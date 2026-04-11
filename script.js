
const filtersDiv = document.getElementById("filters");
const resultsDiv = document.getElementById("results");

/* state */
let activeTab = "common";
let selectedSymptoms = new Set();

/* common symptoms */
const commonSymptoms = new Set([
  "fatigue","cough","diarrhea","dizziness","nausea","vomiting",
  "headache","abdominal pain","chest pain","agitation",
  "congestion","runny nose","sweating","can't sleep","low mood"
]);

/* special cases */
const SPECIAL_SYMPTOMS = {
  PAIN_MUSCLE: "pain_muscleache_combo"
};

/* helpers */
function titleCase(str){
  return str.toLowerCase().split(" ").map(word=>{
    if(word.includes("'")){
      const parts = word.split("'");
      return parts.map((p,i)=> i===0 ? p.charAt(0).toUpperCase()+p.slice(1) : p).join("'");
    }
    return word.charAt(0).toUpperCase()+word.slice(1);
  }).join(" ");
}

function normalize(str){
  return (str || "").toLowerCase().trim();
}

/* symptom index */
const symptomMap = new Map();

conditions.forEach(c=>{
  c.symptoms.forEach(s=>{
    const name = typeof s==="string" ? s : s.name;
    symptomMap.set(normalize(name), name);
  });
});

/* tabs */
const tabContainer = document.createElement("div");

const commonTab = document.createElement("button");
commonTab.textContent = "Common";
commonTab.classList.add("active");

const fullTab = document.createElement("button");
fullTab.textContent = "Full List";

const resetTab = document.createElement("button");
resetTab.textContent = "Reset";
resetTab.classList.add("reset-btn");

commonTab.onclick = ()=>{
  activeTab="common";
  commonTab.classList.add("active");
  fullTab.classList.remove("active");
  renderFilters();
};

fullTab.onclick = ()=>{
  activeTab="full";
  fullTab.classList.add("active");
  commonTab.classList.remove("active");
  renderFilters();
};

resetTab.onclick = ()=>{
  selectedSymptoms.clear();
  document.querySelectorAll("#filters input").forEach(cb=>cb.checked=false);
  render();
};

tabContainer.appendChild(commonTab);
tabContainer.appendChild(fullTab);
tabContainer.appendChild(resetTab);

document.getElementById("filters-tabs").appendChild(tabContainer);

/* get symptoms */
function getCommonSymptoms(){
  let list = Array.from(symptomMap.keys());

  if(activeTab==="common"){
    list = list.filter(s=>commonSymptoms.has(s));
  }

  return list.sort((a,b)=>{
    return titleCase(symptomMap.get(a)).localeCompare(titleCase(symptomMap.get(b)));
  });
}

/* render filters */
function renderFilters(){
  filtersDiv.querySelectorAll(".symptom").forEach(e=>e.remove());

  let symptoms = getCommonSymptoms();

  if(activeTab==="common"){
    symptoms.unshift(SPECIAL_SYMPTOMS.PAIN_MUSCLE);
  }

  symptoms.forEach(name=>{
    const wrapper = document.createElement("label");
    wrapper.className="symptom";

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked = selectedSymptoms.has(name);

    checkbox.onchange=()=>{
      checkbox.checked ? selectedSymptoms.add(name) : selectedSymptoms.delete(name);
      render();
    };

    const label = document.createElement("span");

    let displayName = name===SPECIAL_SYMPTOMS.PAIN_MUSCLE
      ? "Pain + Muscle Ache"
      : titleCase(symptomMap.get(name));

    label.textContent=" "+displayName;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    filtersDiv.appendChild(wrapper);
  });
}

/* match logic */
function matchCondition(condition){
  if(selectedSymptoms.size===0) return true;

  const conditionSymptoms = condition.symptoms.map(s=>
    normalize(typeof s==="string" ? s : s.name)
  );

  for(let sel of selectedSymptoms){
    if(sel===SPECIAL_SYMPTOMS.PAIN_MUSCLE){
      const hasPain = conditionSymptoms.some(s=>s.includes("pain"));
      const hasMuscle = conditionSymptoms.some(s=>s.includes("muscle ache"));
      if(!(hasPain && hasMuscle)) return false;
      continue;
    }

    if(!conditionSymptoms.includes(normalize(sel))) return false;
  }

  return true;
}

/* treatment colors */
const treatmentColors = {
  "Antibiotic":"#ff00ff",
  "Anti Nausea":"#2a6212",
  "Hydration":"#4a85e8",
  "Education":"#9800ff",
  "Sedative":"#97fb97",
  "Painkiller":"#fa860e",
  "Bandage":"#ffb7b7",
  "Blood":"#ff0000",
  "Cast":"#40e0cf",
  "Decongestant":"#ffff00"
};

/* render results */
function render(){
  const filtered = conditions.filter(matchCondition);
  resultsDiv.innerHTML="";

  if(filtered.length===0){
    resultsDiv.innerHTML="<p>No matching conditions</p>";
    return;
  }

  filtered.forEach(c=>{
    const div = document.createElement("div");
    div.className="condition";

    const symList = document.createElement("div");
    symList.className="symptom-list";

    c.symptoms.forEach(s=>{
      const raw = typeof s==="string" ? s : s.name;

      const item = document.createElement("div");
      item.textContent = titleCase(raw);

      if(typeof s==="object" && s.requires){
        const req = document.createElement("span");
        req.style.color="#ff0000";
        req.textContent=" (Req. "+titleCase(s.requires)+")";
        item.appendChild(req);
      }

      symList.appendChild(item);
    });

    const condName = document.createElement("div");
    condName.textContent = titleCase(c.name);

    const treatList = document.createElement("div");
    treatList.className="treatment-list";

    (c.treatment||[]).forEach(t=>{
      const item = document.createElement("div");
      item.className="treatment-item";

      const label = document.createElement("span");
      label.textContent = titleCase(t);

      const colorBox = document.createElement("span");
      colorBox.className="treatment-color";
      colorBox.style.backgroundColor = treatmentColors[titleCase(t)] || "#ccc";

      item.appendChild(label);
      item.appendChild(colorBox);
      treatList.appendChild(item);
    });

    div.appendChild(symList);
    div.appendChild(document.createElement("br"));
    div.appendChild(condName);
    div.appendChild(document.createElement("br"));
    div.appendChild(treatList);

    resultsDiv.appendChild(div);
  });
}

/* modal */
const footerLink = document.getElementById("footer-link");
const modal = document.getElementById("footer-modal");
const closeBtn = document.getElementById("modal-close");

footerLink.onclick = ()=>modal.classList.remove("hidden");
closeBtn.onclick = ()=>modal.classList.add("hidden");

modal.onclick = e=>{
  if(e.target===modal) modal.classList.add("hidden");
};

/* theme */
const themeSwitch = document.getElementById("theme-switch");

let theme = localStorage.getItem("theme") || "dark";

function applyTheme(mode){
  document.body.classList.remove("light","dark");
  document.body.classList.add(mode);
  localStorage.setItem("theme",mode);
}

applyTheme(theme);

themeSwitch.onclick=()=>{
  theme = theme==="dark" ? "light" : "dark";
  applyTheme(theme);
};


/* steam live users */

const STEAM_APP_ID = "APP_ID";
const userCountEl = document.getElementById("user-count");

let lastCount = null;

async function fetchSteamPlayers() {
  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${STEAM_APP_ID}`
    );
    const data = await res.json();
    return data?.response?.player_count ?? null;
  } catch (err) {
    return null;
  }
}

function animateCount(from, to, duration = 800) {
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(from + (to - from) * progress);

    userCountEl.textContent = `Active Doctors: ${value.toLocaleString()}`;

    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

async function updateSteamCounter() {
  const count = await fetchSteamPlayers();
  if (count == null) return;

  if (lastCount == null) {
    lastCount = count;
    userCountEl.textContent = `Active Doctors: ${count.toLocaleString()}`;
    return;
  }

  animateCount(lastCount, count);
  lastCount = count;
}

updateSteamCounter();
setInterval(updateSteamCounter, 60000);

/* init */
renderFilters();
render();