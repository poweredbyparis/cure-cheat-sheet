/* =========================
   Cure Diagnosis Reference
   Rewritten script
   ========================= */

/* ── DOM refs ─────────────────────────────────── */
const filtersDiv      = document.getElementById("filters");
const resultsDiv      = document.getElementById("results");
const countTotal      = document.getElementById("count-total");
const countMatch      = document.getElementById("count-match");
const symptomSearch   = document.getElementById("symptom-search");
const searchClear     = document.getElementById("search-clear");

/* ── State ────────────────────────────────────── */
let activeTab         = "common";
let selectedSymptoms  = new Set();
let sortMode          = "alpha";
let searchQuery       = "";

/* ── Common symptom set ───────────────────────── */
const commonSymptoms = new Set([
  "fatigue","cough","diarrhea","dizziness","nausea","vomiting",
  "headache","abdominal pain","chest pain","agitation",
  "congestion","runny nose","sweating","can't sleep","low mood",
  "fever","pain","muscle ache"
]);

/* ── Treatment color palette ──────────────────── */
const treatmentColors = {
  "antibiotic":   "#c084fc",
  "anti nausea":  "#34d399",
  "hydration":    "#60a5fa",
  "education":    "#a78bfa",
  "sedative":     "#86efac",
  "painkiller":   "#fb923c",
  "bandage":      "#fda4af",
  "blood":        "#f87171",
  "cast":         "#2dd4bf",
  "decongestant": "#fde047"
};

/* ── Helpers ──────────────────────────────────── */
function normalize(str) {
  return (str || "").toLowerCase().trim();
}

function titleCase(str) {
  // Split on spaces, capitalize first letter of each word only
  // But don't capitalize letters after apostrophes (e.g. can't → Can't)
  return str.toLowerCase().replace(/(?:^|\s)\S/g, c => c.toUpperCase());
}

/* ── Build symptom index ──────────────────────── */
const symptomMap = new Map(); // normalized → raw

conditions.forEach(c => {
  c.symptoms.forEach(s => {
    const raw  = typeof s === "string" ? s : s.name;
    const norm = normalize(raw);
    if (!symptomMap.has(norm)) symptomMap.set(norm, raw);
  });
});

/* Count how many conditions each symptom appears in */
const symptomConditionCount = new Map();
symptomMap.forEach((raw, norm) => {
  const count = conditions.filter(c =>
    c.symptoms.some(s => normalize(typeof s === "string" ? s : s.name) === norm)
  ).length;
  symptomConditionCount.set(norm, count);
});

/* ── Tabs ─────────────────────────────────────── */
const tabContainer = document.getElementById("filters-tabs");

function makeTabBtn(label, mode) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = "tab-btn" + (mode === activeTab ? " active" : "");
  btn.onclick = () => {
    activeTab = mode;
    tabContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderFilters();
  };
  return btn;
}

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.className = "reset-btn";
resetBtn.onclick = () => {
  selectedSymptoms.clear();
  symptomSearch.value = "";
  searchQuery = "";
  searchClear.classList.add("hidden");
  renderFilters();
  render();
};

tabContainer.appendChild(makeTabBtn("Common", "common"));
tabContainer.appendChild(makeTabBtn("Full List", "full"));
tabContainer.appendChild(resetBtn);

/* ── Search ───────────────────────────────────── */
symptomSearch.addEventListener("input", () => {
  searchQuery = normalize(symptomSearch.value);
  searchClear.classList.toggle("hidden", searchQuery === "");
  renderFilters();
});

searchClear.addEventListener("click", () => {
  symptomSearch.value = "";
  searchQuery = "";
  searchClear.classList.add("hidden");
  renderFilters();
});

/* ── Sort ─────────────────────────────────────── */
document.querySelectorAll(".sort-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    sortMode = btn.dataset.sort;
    document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

/* ── Get filtered symptom list ────────────────── */
function getSymptomList() {
  let list = Array.from(symptomMap.keys());

  if (activeTab === "common") {
    list = list.filter(s => {
      const raw = normalize(symptomMap.get(s));
      return commonSymptoms.has(raw) ||
             Array.from(commonSymptoms).some(c => raw.includes(c));
    });
  }

  if (searchQuery) {
    list = list.filter(s => s.includes(searchQuery) || symptomMap.get(s).toLowerCase().includes(searchQuery));
  }

  list.sort((a, b) => titleCase(symptomMap.get(a)).localeCompare(titleCase(symptomMap.get(b))));
  return list;
}

/* ── Render filters ───────────────────────────── */
function renderFilters() {
  filtersDiv.innerHTML = "";
  const list = getSymptomList();

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.style.cssText = "padding:16px 8px;color:var(--text-muted);font-size:12px;";
    empty.textContent = "No symptoms match your search.";
    filtersDiv.appendChild(empty);
    return;
  }

  list.forEach(norm => {
    const raw   = symptomMap.get(norm);
    const label = document.createElement("label");
    label.className = "symptom-label";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = selectedSymptoms.has(norm);
    cb.onchange = () => {
      cb.checked ? selectedSymptoms.add(norm) : selectedSymptoms.delete(norm);
      render();
    };

    const text = document.createElement("span");
    text.className = "symptom-text";
    text.textContent = titleCase(raw);

    const cnt = document.createElement("span");
    cnt.className = "symptom-count";
    cnt.textContent = symptomConditionCount.get(norm) || 0;

    label.appendChild(cb);
    label.appendChild(text);
    label.appendChild(cnt);
    filtersDiv.appendChild(label);
  });
}

/* ── Match logic ──────────────────────────────── */
function matchCondition(condition) {
  if (selectedSymptoms.size === 0) return true;

  const condNorms = condition.symptoms.map(s =>
    normalize(typeof s === "string" ? s : s.name)
  );

  for (const sel of selectedSymptoms) {
    if (!condNorms.includes(sel)) return false;
  }
  return true;
}

/* Match score: how many selected symptoms are covered */
function matchScore(condition) {
  if (selectedSymptoms.size === 0) return condition.symptoms.length;
  const condNorms = condition.symptoms.map(s =>
    normalize(typeof s === "string" ? s : s.name)
  );
  let hits = 0;
  for (const sel of selectedSymptoms) {
    if (condNorms.includes(sel)) hits++;
  }
  return hits;
}

/* ── Sort filtered conditions ─────────────────── */
function sortConditions(list) {
  if (sortMode === "alpha") {
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortMode === "symptoms") {
    return [...list].sort((a, b) => b.symptoms.length - a.symptoms.length);
  }
  if (sortMode === "treatment") {
    return [...list].sort((a, b) => (b.treatment || []).length - (a.treatment || []).length);
  }
  return list;
}

/* ── Render results ───────────────────────────── */
function render() {
  const filtered = sortConditions(conditions.filter(matchCondition));

  /* update stats */
  countTotal.textContent = conditions.length;
  countMatch.textContent = filtered.length;

  resultsDiv.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <span class="material-symbols-rounded">search_off</span>
      <p>No conditions match all selected symptoms</p>
    `;
    resultsDiv.appendChild(empty);
    return;
  }

  filtered.forEach((c, i) => {
    const card = document.createElement("div");
    card.className = "condition";
    card.style.animationDelay = `${Math.min(i * 20, 200)}ms`;

    /* Card head: just the condition name */
    const head = document.createElement("div");
    head.className = "card-head";

    const name = document.createElement("div");
    name.className = "cond-name";
    name.textContent = c.name.toUpperCase();

    head.appendChild(name);

    /* Divider */
    const divider1 = document.createElement("div");
    divider1.className = "card-divider";

    /* Symptoms */
    const symLabel = document.createElement("div");
    symLabel.className = "card-sym-label";
    symLabel.textContent = "Symptoms";

    const chips = document.createElement("div");
    chips.className = "sym-chips";

    c.symptoms.forEach(s => {
      const raw      = typeof s === "string" ? s : s.name;
      const norm     = normalize(raw);
      const hasReq   = typeof s === "object" && s.requires;
      const isMatch  = selectedSymptoms.size > 0 && selectedSymptoms.has(norm);

      const chip = document.createElement("span");
      chip.className = "sym-chip" +
                       (isMatch  ? " matched"  : "") +
                       (hasReq   ? " requires" : "");
      chip.textContent = titleCase(raw);

      if (hasReq) {
        const badge = document.createElement("span");
        badge.className = "req-badge";
        badge.textContent = "req. " + s.requires;
        chip.appendChild(badge);
      }

      chips.appendChild(chip);
    });

    /* Divider */
    const divider2 = document.createElement("div");
    divider2.className = "card-divider";

    /* === TREATMENT — primary focus === */
    const treatSection = document.createElement("div");
    treatSection.className = "treat-section";

    const treatLabel = document.createElement("div");
    treatLabel.className = "treat-section-label";
    treatLabel.textContent = "Treatment";

    const pills = document.createElement("div");
    pills.className = "treat-pills";

    (c.treatment || []).forEach(t => {
      const norm = normalize(t);
      const color = treatmentColors[norm] || "#888";

      const pill = document.createElement("div");
      pill.className = "treat-pill";
      pill.style.backgroundColor = color + "22";
      pill.style.borderColor = color + "55";
      pill.style.color = color;

      const dot = document.createElement("span");
      dot.className = "treat-dot";

      const lbl = document.createElement("span");
      lbl.textContent = titleCase(t);

      pill.appendChild(dot);
      pill.appendChild(lbl);
      pills.appendChild(pill);
    });

    treatSection.appendChild(treatLabel);
    treatSection.appendChild(pills);

    card.appendChild(head);
    card.appendChild(divider1);
    card.appendChild(symLabel);
    card.appendChild(chips);
    card.appendChild(divider2);
    card.appendChild(treatSection);

    resultsDiv.appendChild(card);
  });
}

/* ── Modal ────────────────────────────────────── */
const footerLink = document.getElementById("footer-link");
const modal      = document.getElementById("footer-modal");
const closeBtn   = document.getElementById("modal-close");

footerLink.onclick = () => modal.classList.remove("hidden");
closeBtn.onclick   = () => modal.classList.add("hidden");
modal.onclick = e => { if (e.target === modal) modal.classList.add("hidden"); };

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.add("hidden");
});

/* ── Theme ────────────────────────────────────── */
const themeSwitch = document.getElementById("theme-switch");
let theme = localStorage.getItem("theme") || "dark";

function applyTheme(mode) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(mode);
  localStorage.setItem("theme", mode);
}

applyTheme(theme);

themeSwitch.onclick = () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
};

/* ── Init ─────────────────────────────────────── */
renderFilters();
render();
