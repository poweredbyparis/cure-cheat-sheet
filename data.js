const conditions = [
  {
    name: "abdomen bruising",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "abdominal muscle ache", requires: null },
      { name: "abdominal bruising", requires: "stethoscope" },
      { name: "abdominal swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "alcohol intoxication",
    symptoms: [
      { name: "loss of consciousness", requires: null },
      { name: "agitation", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "sweating", requires: null },
      { name: "slurred speech", requires: null },
      { name: "positive blood alcohol", requires: "blood test" }
    ],
    treatment: ["hydration", "anti nausea", "education"]
  },
  {
    name: "anal sex injury",
    symptoms: [
      { name: "anal bleeding", requires: null }
    ],
    treatment: ["painkiller", "education"]
  },
  {
    name: "anemia",
    symptoms: [
      { name: "dizziness", requires: null },
      { name: "fatigue", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "pale skin", requires: "stethoscope" },
      { name: "very low blood count", requires: "blood test" }
    ],
    treatment: ["blood"]
  },
  {
    name: "asthma attack",
    symptoms: [
      { name: "sweating", requires: null },
      { name: "cough", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "high heart rate", requires: "bp cuff" }
    ],
    treatment: ["sedative"]
  },
  {
    name: "back spasm",
    symptoms: [
      { name: "back pain", requires: null },
      { name: "back stiffness", requires: null }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "broken heart syndrome",
    symptoms: [
      { name: "can't sleep", requires: null },
      { name: "low mood", requires: null },
      { name: "chest pain", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "high heart rate", requires: "bp cuff" }
    ],
    treatment: ["education"]
  },
  {
    name: "body dysmorphia",
    symptoms: [
      { name: "chest muscle ache", requires: null },
      { name: "upper arm muscle ache", requires: null },
      { name: "forearm muscle ache", requires: null },
      { name: "back pain", requires: null },
      { name: "poor body image", requires: null },
      { name: "normal blood", requires: "blood test" }
    ],
    treatment: ["education"]
  },
  {
    name: "bowel obstruction",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "constipation", requires: null },
      { name: "loss of appetite", requires: null },
      { name: "blocked bowel", requires: "ct scan" },
      { name: "enlarged abdomen", requires: "xray" },
      { name: "tense abdomen", requires: "stethoscope" }
    ],
    treatment: ["hydration", "antibiotic", "painkiller"]
  },
  {
    name: "bronchitis",
    symptoms: [
      { name: "cough", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "coarse lung sounds", requires: "stethoscope" }
    ],
    treatment: ["antibiotic", "decongestant"]
  },
  {
    name: "cellulitis",
    symptoms: [
      { name: "painful rash", requires: null },
      { name: "fever", requires: "bp cuff" },
      { name: "red irritated skin", requires: "stethoscope" },
      { name: "blisters", requires: "stethoscope" }
    ],
    treatment: ["antibiotic"]
  },
  {
    name: "chest bruising",
    symptoms: [
      { name: "chest pain", requires: null },
      { name: "chest muscle ache", requires: null },
      { name: "chest bruising", requires: "stethoscope" },
      { name: "chest swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "chest cut",
    symptoms: [
      { name: "chest bleeding", requires: null },
      { name: "chest pain", requires: null }
    ],
    treatment: ["bandage", "painkiller"]
  },
  {
    name: "chest stabbing",
    symptoms: [
      { name: "chest bleeding", requires: null },
      { name: "chest pain", requires: null }
    ],
    treatment: ["bandage", "painkiller", "blood"]
  },
  {
    name: "chickenpox",
    symptoms: [
      { name: "painful rash", requires: null },
      { name: "loss of appetite", requires: null },
      { name: "moderate headache", requires: null },
      { name: "fever", requires: "bp cuff" }
    ],
    treatment: ["antibiotic"]
  },
  {
    name: "cluster headache",
    symptoms: [
      { name: "severe headache", requires: null },
      { name: "runny nose", requires: null }
    ],
    treatment: ["painkiller", "sedative"]
  },
  {
    name: "cystic acne",
    symptoms: [
      { name: "red tender bumps", requires: null },
      { name: "pimples", requires: null },
      { name: "nodules", requires: null }
    ],
    treatment: ["antibiotic"]
  },
  {
    name: "depression",
    symptoms: [
      { name: "can't sleep", requires: null },
      { name: "anxiety", requires: null },
      { name: "low mood", requires: null },
      { name: "loss of appetite", requires: null },
      { name: "fatigue", requires: null },
      { name: "normal blood", requires: "blood test" }
    ],
    treatment: ["sedative", "education"]
  },
  {
    name: "ear infection",
    symptoms: [
      { name: "ear pain", requires: null },
      { name: "fever", requires: "bp cuff" },
      { name: "fluid in eardrum", requires: "stethoscope" }
    ],
    treatment: ["antibiotic"]
  },
  {
    name: "excessive fasting",
    symptoms: [
      { name: "agitation", requires: null },
      { name: "fatigue", requires: null },
      { name: "moderate headache", requires: null },
      { name: "can't sleep", requires: null },
      { name: "muscle aches", requires: null }
    ],
    treatment: ["hydration"]
  },
  {
    name: "factitious disorder",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "severe headache", requires: null },
      { name: "cough", requires: null },
      { name: "chest pain", requires: null },
      { name: "lower leg pain", requires: null },
      { name: "nausea", requires: null },
      { name: "hand pain", requires: null },
      { name: "normal body scan", requires: "ct scan" }
    ],
    treatment: ["education"]
  },
  {
    name: "flu",
    symptoms: [
      { name: "cough", requires: null },
      { name: "congestion", requires: null },
      { name: "fatigue", requires: null },
      { name: "body aches", requires: null },
      { name: "mild headache", requires: null },
      { name: "sore throat", requires: null },
      { name: "normal chest xray", requires: "xray" },
      { name: "fever", requires: "bp cuff" }
    ],
    treatment: ["hydration", "decongestant", "painkiller"]
  },
  {
    name: "foot bruising",
    symptoms: [
      { name: "foot pain", requires: null },
      { name: "foot muscle ache", requires: null },
      { name: "foot bruising", requires: "stethoscope" },
      { name: "foot swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "foot gunshot",
    symptoms: [
      { name: "foot bleeding", requires: null },
      { name: "foot pain", requires: null }
    ],
    treatment: ["bandage", "blood", "painkiller"]
  },
  {
    name: "food poisoning",
    symptoms: [
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "diarrhea", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "irregular bowel sounds", requires: "stethoscope" },
      { name: "decreased electrolytes", requires: "blood test" }
    ],
    treatment: ["hydration", "anti nausea"]
  },
  {
    name: "forearm bruising",
    symptoms: [
      { name: "forearm pain", requires: null },
      { name: "forearm muscle ache", requires: null },
      { name: "forearm bruising", requires: "stethoscope" },
      { name: "forearm swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "forearm stabbing",
    symptoms: [
      { name: "forearm bleeding", requires: null },
      { name: "forearm pain", requires: null }
    ],
    treatment: ["bandage", "blood", "painkiller"]
  },
  {
    name: "gaming addiction",
    symptoms: [
      { name: "can't sleep", requires: null },
      { name: "restlessness", requires: null },
      { name: "low mood", requires: null },
      { name: "congestion", requires: null },
      { name: "agitation", requires: null },
      { name: "shortness of breath", requires: "stethoscope" }
    ],
    treatment: ["sedative", "education", "decongestant"]
  },
  {
    name: "gi bleed",
    symptoms: [
      { name: "anal bleeding", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "bloody vomiting", requires: null },
      { name: "bloody diarrhea", requires: null },
      { name: "irregular bowel sounds", requires: "stethoscope" },
      { name: "low blood pressure", requires: "bp cuff" },
      { name: "low blood count", requires: "blood test" }
    ],
    treatment: ["blood", "painkiller"]
  },
  {
    name: "gonorrhea",
    symptoms: [
      { name: "burning urination", requires: null },
      { name: "bloody urine", requires: null },
      { name: "fever", requires: "bp cuff" },
      { name: "gonorrhea urine", requires: "urine test" }
    ],
    treatment: ["antibiotic", "education"]
  },
  {
    name: "gout",
    symptoms: [
      { name: "foot pain", requires: null },
      { name: "forearm swelling", requires: "stethoscope" }
    ],
    treatment: ["hydration", "painkiller", "education"]
  },
  {
    name: "hand bruising",
    symptoms: [
      { name: "hand pain", requires: null },
      { name: "hand muscle ache", requires: null },
      { name: "hand bruising", requires: "stethoscope" },
      { name: "hand swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "hay fever",
    symptoms: [
      { name: "congestion", requires: null },
      { name: "runny nose", requires: null },
      { name: "fatigue", requires: null },
      { name: "cough", requires: null }
    ],
    treatment: ["decongestant"]
  },
  {
    name: "head bruising",
    symptoms: [
      { name: "head pain", requires: null },
      { name: "head muscle ache", requires: null },
      { name: "head bruising", requires: "stethoscope" },
      { name: "head swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "head cut",
    symptoms: [
      { name: "hand bleeding", requires: null },
      { name: "head pain", requires: null }
    ],
    treatment: ["bandage", "painkiller"]
  },
  {
    name: "heart infection",
    symptoms: [
      { name: "chest pain", requires: null },
      { name: "body aches", requires: null },
      { name: "bacteria in blood", requires: "blood test" },
      { name: "fever", requires: "bp cuff" },
      { name: "abnormal heart sounds", requires: "stethoscope" },
      { name: "shortness of breath", requires: "stethoscope" }
    ],
    treatment: ["antibiotic", "painkiller"]
  },
  {
    name: "heatstroke",
    symptoms: [
      { name: "moderate headache", requires: null },
      { name: "agitation", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "slurred speech", requires: null },
      { name: "sweating", requires: null },
      { name: "fever", requires: "bp cuff" },
      { name: "high heart rate", requires: "bp cuff" }
    ],
    treatment: ["hydration"]
  },
  {
    name: "high blood sugar",
    symptoms: [
      { name: "frequent urination", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "high sugar blood", requires: "blood test" },
      { name: "ketones urine", requires: "urine test" }
    ],
    treatment: ["anti nausea", "hydration", "education"]
  },
  {
    name: "high lactic acid",
    symptoms: [
      { name: "muscle aches", requires: null },
      { name: "fatigue", requires: null },
      { name: "dizziness", requires: null }
    ],
    treatment: ["hydration"]
  },
  {
    name: "ibs-c",
    symptoms: [
      { name: "constipation", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "vomiting", requires: null },
      { name: "nausea", requires: null },
      { name: "flatulence", requires: "stethoscope" }
    ],
    treatment: ["anti nausea"]
  },
  {
    name: "infected belly button piercing",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "infected belly button", requires: "stethoscope" }
    ],
    treatment: ["antibiotic"]
  },
  {
    name: "infectious diarrhea",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "diarrhea", requires: null },
      { name: "generalized abdominal pain", requires: "stethoscope" },
      { name: "irregular bowel sounds", requires: "stethoscope" },
      { name: "fever", requires: "bp cuff" },
      { name: "low blood pressure", requires: "bp cuff" },
      { name: "high white cell count", requires: "blood test" }
    ],
    treatment: ["hydration", "antibiotic"]
  },
  {
    name: "kidney stones",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "nausea", requires: null },
      { name: "bloody urine", requires: null },
      { name: "high white cell count", requires: null },
      { name: "stones in kidney", requires: null },
      { name: "pain over sides", requires: null }
    ],
    treatment: ["unknown"]
  },
  {
    name: "lower leg bruising",
    symptoms: [
      { name: "lower leg pain", requires: null },
      { name: "lower leg muscle ache", requires: null },
      { name: "lower leg bruising", requires: "stethoscope" },
      { name: "lower leg swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "lower leg gunshot",
    symptoms: [
      { name: "lower leg bleeding", requires: null },
      { name: "lower leg pain", requires: null }
    ],
    treatment: ["bandage", "blood", "painkiller"]
  },
  {
    name: "migraine",
    symptoms: [
      { name: "severe headache", requires: null },
      { name: "light sensitivity", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "normal brain", requires: "xray" }
    ],
    treatment: ["anti nausea", "hydration", "painkiller"]
  },
  {
    name: "mild acid reflux",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "chest pain", requires: null },
      { name: "nausea", requires: null }
    ],
    treatment: ["hydration", "painkiller"]
  },
  {
    name: "mild cold",
    symptoms: [
      { name: "mild headache", requires: null },
      { name: "cough", requires: null },
      { name: "congestion", requires: null },
      { name: "sore throat", requires: null },
      { name: "runny nose", requires: null },
      { name: "fatigue", requires: null },
      { name: "no fever", requires: "bp cuff" }
    ],
    treatment: ["decongestant", "painkiller"]
  },
  {
    name: "mild dehydration",
    symptoms: [
      { name: "dizziness", requires: null },
      { name: "nausea", requires: null }
    ],
    treatment: ["hydration"]
  },
  {
    name: "mild hand fracture left",
    symptoms: [
      { name: "hand pain", requires: null },
      { name: "hand bruising", requires: null },
      { name: "hand swelling", requires: "stethoscope" },
      { name: "bone displacement", requires: "xray" },
      { name: "moderate fracture line", requires: "xray" }
    ],
    treatment: ["cast", "painkiller"]
  },
  {
    name: "mild toothache",
    symptoms: [
      { name: "mild headache", requires: null },
      { name: "tooth pain", requires: null }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "moderate acid reflux",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "chest pain", requires: null },
      { name: "nausea", requires: null }
    ],
    treatment: ["anti nausea", "education"]
  },
  {
    name: "moderate cold",
    symptoms: [
      { name: "mild headache", requires: null },
      { name: "cough", requires: null },
      { name: "congestion", requires: null },
      { name: "sore throat", requires: null },
      { name: "runny nose", requires: null },
      { name: "fatigue", requires: null },
      { name: "normal xray", requires: "xray" },
      { name: "no fever", requires: "bp cuff" }
    ],
    treatment: ["painkiller", "decongestant"]
  },
  {
    name: "moderate dehydration",
    symptoms: [
      { name: "dizziness", requires: null },
      { name: "loss of consciousness", requires: null },
      { name: "nausea", requires: null },
      { name: "decreased electrolytes", requires: "blood test" },
      { name: "low blood pressure", requires: "bp cuff" }
    ],
    treatment: ["hydration"]
  },
  {
    name: "moderate foot fracture right",
    symptoms: [
      { name: "foot pain", requires: null },
      { name: "foot bruising", requires: null },
      { name: "foot bleeding", requires: "stethoscope" },
      { name: "foot swelling", requires: "stethoscope" },
      { name: "bone displacement", requires: "xray" },
      { name: "moderate fracture line", requires: "xray" }
    ],
    treatment: ["cast", "painkiller"]
  },
  {
    name: "moderate lower leg fracture left",
    symptoms: [
      { name: "lower leg pain", requires: null },
      { name: "lower leg bruising", requires: null },
      { name: "lower leg bleeding", requires: "stethoscope" },
      { name: "lower leg swelling", requires: "stethoscope" },
      { name: "bone displacement", requires: "xray" },
      { name: "moderate fracture line", requires: "xray" }
    ],
    treatment: ["cast", "painkiller"]
  },
  {
    name: "moderate thigh fracture right",
    symptoms: [
      { name: "thigh pain", requires: null },
      { name: "thigh bruising", requires: null },
      { name: "thigh bleeding", requires: "stethoscope" },
      { name: "thigh swelling", requires: "stethoscope" },
      { name: "bone displacement", requires: "xray" },
      { name: "moderate fracture line", requires: "xray" }
    ],
    treatment: ["cast", "painkiller"]
  },
  {
    name: "moderate upper arm fracture left",
    symptoms: [
      { name: "upper arm pain", requires: null },
      { name: "upper arm bleeding", requires: null },
      { name: "upper arm bruising", requires: "stethoscope" },
      { name: "upper arm swelling", requires: "stethoscope" },
      { name: "bone displacement", requires: "xray" },
      { name: "moderate fracture line", requires: "xray" }
    ],
    treatment: ["cast", "painkiller"]
  },
  {
    name: "muscle strain",
    symptoms: [
      { name: "fatigue", requires: null },
      { name: "muscle aches", requires: null }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "neck spasm",
    symptoms: [
      { name: "neck pain", requires: null },
      { name: "moderate headache", requires: null },
      { name: "neck stiffness", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "neck stabbing",
    symptoms: [
      { name: "neck bleeding", requires: null },
      { name: "neck pain", requires: null }
    ],
    treatment: ["bandage", "blood", "painkiller"]
  },
  {
    name: "opioid withdrawal",
    symptoms: [
      { name: "agitation", requires: null },
      { name: "restlessness", requires: null },
      { name: "nausea", requires: null },
      { name: "diarrhea", requires: null },
      { name: "vomiting", requires: null },
      { name: "high heart rate", requires: "bp cuff" }
    ],
    treatment: ["hydration", "sedative", "anti nausea"]
  },
  {
    name: "orthorexia",
    symptoms: [
      { name: "poor body image", requires: null },
      { name: "presents six pack unsolicited", requires: null },
      { name: "low iron", requires: "blood test" }
    ],
    treatment: ["education", "hydration"]
  },
  {
    name: "panic attack",
    symptoms: [
      { name: "nausea", requires: null },
      { name: "restlessness", requires: null },
      { name: "dizziness", requires: null },
      { name: "chest pain", requires: null },
      { name: "agitation", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "high heart rate", requires: "bp cuff" }
    ],
    treatment: ["sedative", "education"]
  },
  {
    name: "pelvic cut",
    symptoms: [
      { name: "pelvic bleeding", requires: null },
      { name: "pelvic pain", requires: null }
    ],
    treatment: ["bandage", "painkiller"]
  },
  {
    name: "pelvis bruising",
    symptoms: [
      { name: "pelvic pain", requires: null },
      { name: "pelvic muscle ache", requires: null },
      { name: "pelvic bruising", requires: "stethoscope" },
      { name: "pelvic swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "pelvic gunshot",
    symptoms: [
      { name: "pelvic bleeding", requires: null },
      { name: "pelvic pain", requires: null }
    ],
    treatment: ["bandage", "blood", "painkiller"]
  },
  {
    name: "pneumonia",
    symptoms: [
      { name: "cough", requires: null },
      { name: "fatigue", requires: null },
      { name: "chest pain", requires: null },
      { name: "congestion", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "coarse lung sounds", requires: "stethoscope" },
      { name: "fever", requires: "bp cuff" },
      { name: "lung congestion", requires: "xray" }
    ],
    treatment: ["antibiotic", "decongestant"]
  },
  {
    name: "porn addiction",
    symptoms: [
      { name: "sweating", requires: null },
      { name: "hand pain", requires: null },
      { name: "pelvic pain", requires: null },
      { name: "pelvic muscle ache", requires: null },
      { name: "pelvic bruising", requires: "stethoscope" },
      { name: "pelvic swelling", requires: "stethoscope" },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "unbridled horniness", requires: "stethoscope" }
    ],
    treatment: ["sedative", "education", "hydration", "bandage"]
  },
  {
    name: "restless leg syndrome",
    symptoms: [
      { name: "restlessness", requires: null },
      { name: "can't sleep", requires: null },
      { name: "lower leg pain", requires: null },
      { name: "normal vitals", requires: "bp cuff" },
      { name: "low iron", requires: "blood test" }
    ],
    treatment: ["sedative"]
  },
  {
    name: "rule 34 trauma response",
    symptoms: [
      { name: "dizziness", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "can't sleep", requires: null },
      { name: "shortness of breath", requires: "stethoscope" }
    ],
    treatment: ["sedative", "anti nausea", "hydration", "education"]
  },
  {
    name: "ruptured eardrum",
    symptoms: [
      { name: "ear pain", requires: null },
      { name: "dizziness", requires: null },
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "burst eardrum", requires: "stethoscope" }
    ],
    treatment: ["antibiotic", "painkiller"]
  },
  {
    name: "scorpion bite",
    symptoms: [
      { name: "painful rash", requires: null },
      { name: "loss of consciousness", requires: null }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "seasonal allergies",
    symptoms: [
      { name: "congestion", requires: null },
      { name: "runny nose", requires: null }
    ],
    treatment: ["decongestant"]
  },
  {
    name: "severe toothache",
    symptoms: [
      { name: "moderate headache", requires: null },
      { name: "tooth pain", requires: null },
      { name: "fever", requires: "bp cuff" }
    ],
    treatment: ["antibiotic", "painkiller"]
  },
  {
    name: "sickle cell disease",
    symptoms: [
      { name: "abdominal pain", requires: null },
      { name: "dizziness", requires: null },
      { name: "shortness of breath", requires: "stethoscope" },
      { name: "sickle cell disease", requires: "blood test" }
    ],
    treatment: ["blood", "painkiller"]
  },
  {
    name: "sinusitis",
    symptoms: [
      { name: "mild headache", requires: null },
      { name: "congestion", requires: null },
      { name: "fever", requires: "bp cuff" },
      { name: "face pain", requires: "stethoscope" }
    ],
    treatment: ["decongestant", "painkiller"]
  },
  {
    name: "spider bite",
    symptoms: [
      { name: "painful rash", requires: null }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "stomach flu",
    symptoms: [
      { name: "nausea", requires: null },
      { name: "vomiting", requires: null },
      { name: "diarrhea", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "irregular bowel sounds", requires: "stethoscope" },
      { name: "generalized abdominal pain", requires: "stethoscope" },
      { name: "fever", requires: "bp cuff" },
      { name: "high white cell count", requires: "blood test" }
    ],
    treatment: ["hydration", "anti nausea"]
  },
  {
    name: "stress headache",
    symptoms: [
      { name: "mild headache", requires: null }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "tension headache",
    symptoms: [
      { name: "moderate headache", requires: null },
      { name: "muscle aches", requires: null },
      { name: "tender neck", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "thigh cut",
    symptoms: [
      { name: "thigh bleeding", requires: null },
      { name: "thigh pain", requires: null }
    ],
    treatment: ["bandage", "painkiller"]
  },
  {
    name: "thigh bruising",
    symptoms: [
      { name: "thigh pain", requires: null },
      { name: "thigh muscle ache", requires: null },
      { name: "thigh bruising", requires: "stethoscope" },
      { name: "thigh swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "throat infection",
    symptoms: [
      { name: "throat pain", requires: null },
      { name: "congestion", requires: null },
      { name: "cough", requires: null },
      { name: "pus in throat", requires: "stethoscope" },
      { name: "swollen tonsils", requires: "stethoscope" }
    ],
    treatment: ["decongestant", "painkiller"]
  },
  {
    name: "upper arm gunshot",
    symptoms: [
      { name: "upper arm bleeding", requires: null },
      { name: "upper arm pain", requires: null }
    ],
    treatment: ["bandage", "painkiller", "blood"]
  },
  {
    name: "upper arm bruising",
    symptoms: [
      { name: "upper arm pain", requires: null },
      { name: "upper arm muscle ache", requires: null },
      { name: "upper arm bruising", requires: "stethoscope" },
      { name: "upper arm swelling", requires: "stethoscope" }
    ],
    treatment: ["painkiller"]
  },
  {
    name: "zombie slash",
    symptoms: [
      { name: "bleeding", requires: null },
      { name: "pain", requires: null }
    ],
    treatment: ["blood", "bandage"]
  },
    {
    name: "cocaine overdose",
    symptoms: [
      { name: "chest pain", requires: null },
      { name: "sweating", requires: null },
      { name: "restlessness", requires: null },
      { name: "high blood pressure", requires: "bp cuff" },
      { name: "positive cocaine test", requires: "urine test" }
    ],
    treatment: ["hydration", "painkiller", "sedative"]
  },
    {
    name: "urinary tract infection",
    symptoms: [
      { name: "burning urination", requires: null },
      { name: "abdominal pain", requires: null },
      { name: "frequent urination", requires: null },
      { name: "pain over bladder", requires: "stethoscope" },
      { name: "fever", requires: "fever" },
      { name: "high urine bacteria", requires: "urine test" },
      { name: "bloody urine", requires: "urine test" }
    ],
    treatment: ["painkiller", "antibiotic"]
  },
    {
    name: "drug induced agitation",
    symptoms: [
      { name: "restlessness", requires: null },
      { name: "agitation", requires: null },
      { name: "sweating", requires: null },
      { name: "nausea", requires: "null" },
      { name: "vomiting", requires: "null" },
      { name: "hallucinations", requires: "null" },
      { name: "positive drug test", requires: "urine test" }
    ],
    treatment: ["sedative", "education"]
  },
    {
    name: "lyme disease",
    symptoms: [
      { name: "painful rash", requires: null },
      { name: "body aches", requires: null },
      { name: "fever", requires: "bp cuff" },
      { name: "positive lyme test", requires: "blood test" },
      { name: "tick bite", requires: "null" }
    ],
    treatment: ["antibiotic"]
  },
    {
    name: "rhabdo",
    symptoms: [
      { name: "chest muscle ache", requires: null },
      { name: "upper arm muscle ache", requires: null },
      { name: "forearm muscle ache", requires: null },
      { name: "back pain", requires: null },
      { name: "lower leg pain", requires: null },
      { name: "thigh pain", requires: null },
      { name: "muscle breakdown", requires: "blood test" },
      { name: "bloody urine", requires: "urine test" }
    ],
    treatment: ["painkiller", "hydration"]
  }
];