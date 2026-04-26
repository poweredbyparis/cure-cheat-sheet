import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue, onDisconnect, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBjrWAf8cJImkoNhVzyWpiMjphTl2TCZcQ",
  authDomain:        "cure-cheat-sheet.firebaseapp.com",
  databaseURL:       "https://cure-cheat-sheet-default-rtdb.firebaseio.com",
  projectId:         "cure-cheat-sheet",
  storageBucket:     "cure-cheat-sheet.firebasestorage.app",
  messagingSenderId: "303318847171",
  appId:             "1:303318847171:web:7a286ffbe3605f70d2dc76"
};

const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

// Register this session; Firebase auto-removes it when the tab closes
const sessionsRef = ref(db, "sessions");
const mySession   = await push(sessionsRef, { t: serverTimestamp() });
onDisconnect(mySession).remove();

// Watch total session count and update the pill in the header
const onlineEl = document.getElementById("count-online");
onValue(sessionsRef, snap => {
  onlineEl.textContent = snap.exists() ? snap.size : 0;
});
