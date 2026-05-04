const defaultProgress = {
  homeIntroDone: false,
  findCarbonDone: false,
  classifyDone: false,
  quizDone: false,
  checklistDone: false,
  quizScore: 0,
  foundCount: 0
};

const CARBON_FEE_PER_TON = 300;
const BUDGET_BASE = 500;

function kgToCarbonCost(kg) {
  return Math.round((kg / 1000) * CARBON_FEE_PER_TON * 100) / 100;
}

function getProgress() {
  const raw = localStorage.getItem("carbonProgress");
  return raw ? { ...defaultProgress, ...JSON.parse(raw) } : { ...defaultProgress };
}

function saveProgress(p) {
  localStorage.setItem("carbonProgress", JSON.stringify(p));
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if ((page === "index" && href === "index.html") || href.includes(page)) {
      a.classList.add("active");
    }
  });
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("open");
}

/* 首頁互動 */
function homeQuestion(choice) {
  const box = document.getElementById("homeFeedback");
  if (!box) return;

  const p = getProgress();
  p.homeIntroDone = true;
  saveProgress(p);

  if (choice === "b") {
    box.className = "feedback ok show";
    box.innerHTML = `
      答對了！這就是這個平台想帶你思考的重點。<br><br>
      雖然目前制度主要以大型排放源為主，但對咖啡廳管理者來說，真正重要的不是現在有沒有立刻被收費，而是要不要提早建立碳成本概念。<br><br>
      如果等到未來規範更明確、供應鏈要求更高、顧客也開始在意時才反應，店家可能同時面對設備調整、包材改變、採購重整與品牌壓力，經營彈性就會更小。
    `;
  } else if (choice === "a") {
    box.className = "feedback bad show";
    box.innerHTML = `
      這個想法很常見，但對管理者來說風險比較高。<br><br>
      如果抱著等真的被收再說的心態，未來一旦制度、供應鏈或市場要求變快，店家就可能被迫在短時間內調整原料、配送、設備與包裝，反而更容易增加成本壓力。
    `;
  } else {
    box.className = "feedback bad show";
    box.innerHTML = `
      這個看法其實低估了碳費概念對經營的影響。<br><br>
      對咖啡廳管理層來說，碳排不是抽象的環保口號，而是會連動到採購距離、配送方式、設備效率、包材使用與品牌形象的管理問題。
    `;
  }

  updateGlobalProgress();
}

/* 單元二：碳排元素 */
const carbonInfo = {
  machine: {
    title: "咖啡機",
    type: "製作",
    level: "高",
    kg: 150,
    desc: "咖啡機在沖煮、蒸汽加熱與待機時都會持續耗電，是店內典型高頻使用設備。"
  },
  fridge: {
    title: "冰箱 / 冷藏設備",
    type: "製作",
    level: "高",
    kg: 180,
    desc: "冷藏設備長時間運轉，若使用效率不佳，會造成穩定且持續的排放。"
  },
  cups: {
    title: "包材 / 外帶杯",
    type: "銷售",
    level: "中",
    kg: 70,
    desc: "一次性包材單次看起來不多，但大量銷售下會累積成顯著排放。"
  },
  light: {
    title: "照明",
    type: "製作",
    level: "低",
    kg: 35,
    desc: "照明若長時間開啟，雖然單項不一定最高，但仍是可優化的日常排放來源。"
  },
  delivery: {
    title: "配送",
    type: "運輸",
    level: "中",
    kg: 95,
    desc: "原料與商品配送的頻率、距離與交通方式，都會影響物流排放。"
  },
  commute: {
    title: "員工通勤",
    type: "間接碳排",
    level: "中",
    kg: 60,
    desc: "員工每天上下班的交通方式，例如機車、汽車或大眾運輸，都會形成間接排放。"
  }
};

function initFindGame() {
  const items = document.querySelectorAll(".game-item");
  if (!items.length) return;

  const progress = getProgress();
  let found = new Set();

  const countEl = document.getElementById("foundCount");
  const infoEl = document.getElementById("findInfo");
  const barEl = document.getElementById("findProgress");

  function render() {
    if (countEl) countEl.textContent = found.size;
    if (barEl) barEl.style.width = (found.size / 6) * 100 + "%";
    progress.foundCount = found.size;
    progress.findCarbonDone = found.size >= 6;
    saveProgress(progress);
    updateGlobalProgress();
  }

  items.forEach(item => {
    item.addEventListener("click", () => {
      const id = item.dataset.id;
      const data = carbonInfo[id];
      if (!data) return;

      found.add(id);
      item.classList.add("found");

      const cost = kgToCarbonCost(data.kg);

      let cardClass = "";
      if (data.level === "低") {
        cardClass = "carbon-low";
      } else if (data.level === "中") {
        cardClass = "carbon-medium";
      } else {
        cardClass = "carbon-high";
      }

      if (infoEl) {
        infoEl.className = `summary-box carbon-info-box ${cardClass}`;
        infoEl.innerHTML = `
          <strong>${data.title}</strong><br><br>
          類型：${data.type}<br>
          排放等級：${data.level}<br>
          模擬排放量：${data.kg} kg CO2e / 月<br>
          模擬碳成本：NT$ ${cost}<br><br>
          ${data.desc}
        `;
      }

      render();
    });
  });

  render();
}

function resetFindGame() {
  document.querySelectorAll(".game-item").forEach(i => i.classList.remove("found"));

  const p = getProgress();
  p.findCarbonDone = false;
  p.foundCount = 0;
  saveProgress(p);

  const countEl = document.getElementById("foundCount");
  const progressEl = document.getElementById("findProgress");
  const infoEl = document.getElementById("findInfo");

  if (countEl) countEl.textContent = "0";
  if (progressEl) progressEl.style.width = "0%";
  if (infoEl) {
    infoEl.className = "summary-box carbon-info-box";
    infoEl.innerHTML = `
      <strong>請先點選場景中的元素</strong><br><br>
      你會看到：<br>
      • 類型<br>
      • 排放等級<br>
      • 模擬排放量<br>
      • 模擬碳成本
    `;
  }

  initFindGame();
}

/* 單元三：圖片拖曳題 */
let dragged = null;

function initDragDrop() {
  const draggables = document.querySelectorAll(".draggable");
  const zones = document.querySelectorAll(".dropzone");
  if (!draggables.length || !zones.length) return;

  draggables.forEach(item => {
    item.addEventListener("dragstart", () => {
      dragged = item;
    });
  });

  zones.forEach(zone => {
    zone.addEventListener("dragover", e => {
      e.preventDefault();
      zone.classList.add("over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("over");
    });

    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("over");
      if (dragged) zone.appendChild(dragged);
    });
  });
}

function checkClassification() {
  const zones = document.querySelectorAll(".dropzone");
  const fb = document.getElementById("classificationFeedback");
  if (!zones.length || !fb) return;

  let total = 0;
  let correct = 0;
  let wrongMessages = [];

  const explanations = {
    "咖啡豆袋": "咖啡豆袋屬於「原料」，因為它代表的是店家採購進來的原物料來源。管理者要思考的是供應來源、進貨距離與穩定性。",
    "配送貨車": "配送貨車屬於「運輸」，因為它反映的是物流移動成本。配送次數與距離都會影響排放與成本。",
    "咖啡機": "咖啡機屬於「製作」，因為它是在店內製作飲品時直接使用的設備，會影響日常耗電與營運效率。",
    "外帶杯": "外帶杯屬於「銷售」，因為它與顧客拿到商品時的包裝選擇有關，也會影響一次性耗材使用量。",
    "冰箱": "冰箱屬於「製作」，因為它是店內維持原料與商品保存的重要設備，會長時間耗能。",
    "員工通勤": "員工通勤最接近「運輸」概念，因為它涉及人員移動造成的交通排放。管理者可以思考交通補助、排班方式或通勤制度。"
  };

  zones.forEach(zone => {
    zone.querySelectorAll(".draggable").forEach(item => {
      total += 1;
      if (item.dataset.type === zone.dataset.zone) {
        correct += 1;
      } else {
        wrongMessages.push(`• ${item.dataset.name} 放錯了。${explanations[item.dataset.name]}`);
      }
    });
  });

  const p = getProgress();
  fb.classList.add("show");

  if (correct === total && total > 0) {
    fb.className = "feedback ok show";
    fb.innerHTML = "全對！你已經掌握原料、運輸、製作、銷售四種分類邏輯。";
    p.classifyDone = true;
  } else {
    fb.className = "feedback bad show";
    fb.innerHTML = `你目前答對 ${correct} / ${total}。<br><br>${wrongMessages.join("<br><br>")}`;
    p.classifyDone = false;
  }

  saveProgress(p);
  updateGlobalProgress();
}

function resetClassification() {
  location.reload();
}

/* 單元四：實戰方案 */
const planSelections = { 1: null, 2: null, 3: null };

const planData = {
  import_high: { label: "進口長距離原料", kg: 180 },
  regional_mid: { label: "區域型穩定供應", kg: 110 },
  local_low: { label: "在地合作與低里程採購", kg: 60 },

  packaging_high: { label: "大量一次性包材", kg: 120 },
  packaging_mid: { label: "減量包材", kg: 70 },
  packaging_low: { label: "鼓勵自備杯＋精簡包材", kg: 30 },

  energy_high: { label: "高耗能長時運轉", kg: 200 },
  energy_mid: { label: "基本節能管理", kg: 110 },
  energy_low: { label: "節能設備＋離峰調整", kg: 50 }
};

function selectPlanStep(step, key) {
  planSelections[step] = key;

  const choice1 = document.getElementById("planChoice1");
  const choice2 = document.getElementById("planChoice2");
  const choice3 = document.getElementById("planChoice3");

  if (step === 1) {
    if (choice1) choice1.textContent = `已選擇：${planData[key].label}`;
    const nextBtn1 = document.getElementById("nextStep1");
    if (nextBtn1) nextBtn1.style.display = "inline-flex";
  }

  if (step === 2) {
    if (choice2) choice2.textContent = `已選擇：${planData[key].label}`;
    const nextBtn2 = document.getElementById("nextStep2");
    if (nextBtn2) nextBtn2.style.display = "inline-flex";
  }

  if (step === 3) {
    if (choice3) choice3.textContent = `已選擇：${planData[key].label}`;
    const nextBtn3 = document.getElementById("nextStep3");
    if (nextBtn3) nextBtn3.style.display = "inline-flex";
  }
}

function goToPlanStep(step) {
  const box1 = document.getElementById("planStepBox1");
  const box2 = document.getElementById("planStepBox2");
  const box3 = document.getElementById("planStepBox3");
  const resultPage = document.getElementById("planResultPage");

  if (step === 2) {
    if (box1) box1.style.display = "none";
    if (box2) box2.style.display = "block";
  }

  if (step === 3) {
    if (box2) box2.style.display = "none";
    if (box3) box3.style.display = "block";
  }

  if (step === 4) {
    if (box3) box3.style.display = "none";
    if (resultPage) resultPage.style.display = "block";
    calculatePlanResult();
  }
}

function calculatePlanResult() {
  const resultBox = document.getElementById("planResultPage");
  if (!resultBox) return;

  if (!planSelections[1] || !planSelections[2] || !planSelections[3]) {
    resultBox.innerHTML = "請先完成三個步驟的選擇。";
    return;
  }

  const totalKg =
    planData[planSelections[1]].kg +
    planData[planSelections[2]].kg +
    planData[planSelections[3]].kg;

  const cost = kgToCarbonCost(totalKg);

  let level = "";
  let earthText = "";

  if (totalKg >= 420) {
    level = "高";
    earthText = "這組選擇排放較高，未來成本壓力也會比較大。";
  } else if (totalKg >= 220) {
    level = "中";
    earthText = "這組選擇有做平衡，但還有優化空間。";
  } else {
    level = "低";
    earthText = "這組選擇相對友善，較符合低碳經營方向。";
  }

  resultBox.innerHTML = `
    <strong>你的經營決策結果</strong><br><br>
    原料：${planData[planSelections[1]].label}<br>
    包材：${planData[planSelections[2]].label}<br>
    設備：${planData[planSelections[3]].label}<br><br>
    模擬排放量：${totalKg} kg CO2e<br>
    排放等級：${level}<br>
    模擬碳成本：NT$ ${cost}<br><br>
    ${earthText}
  `;

  const p = getProgress();
  p.quizDone = true;
  p.quizScore = totalKg <= 220 ? 3 : totalKg <= 420 ? 2 : 1;
  saveProgress(p);
  updateGlobalProgress();
}

function resetPlanResult() {
  planSelections[1] = null;
  planSelections[2] = null;
  planSelections[3] = null;

  const box1 = document.getElementById("planStepBox1");
  const box2 = document.getElementById("planStepBox2");
  const box3 = document.getElementById("planStepBox3");
  const resultPage = document.getElementById("planResultPage");

  if (box1) box1.style.display = "block";
  if (box2) box2.style.display = "none";
  if (box3) box3.style.display = "none";
  if (resultPage) {
    resultPage.style.display = "none";
    resultPage.innerHTML = "";
  }

  const choice1 = document.getElementById("planChoice1");
  const choice2 = document.getElementById("planChoice2");
  const choice3 = document.getElementById("planChoice3");

  if (choice1) choice1.textContent = "尚未選擇";
  if (choice2) choice2.textContent = "尚未選擇";
  if (choice3) choice3.textContent = "尚未選擇";

  const nextBtns = ["nextStep1", "nextStep2", "nextStep3"];
  nextBtns.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.style.display = "none";
  });

  const p = getProgress();
  p.quizDone = false;
  p.quizScore = 0;
  saveProgress(p);
  updateGlobalProgress();
}

/* 單元五：行動清單 */
let budgetGame = {
  material: null,
  transport: null,
  production: null,
  sales: null
};

const budgetOptions = {
  cheap_far: {
    label: "長期配合的供應商但距離較遠",
    spend: 0,
    kg: 180,
    pros: "關係熟、合作溝通容易。",
    cons: "距離較遠，模擬碳成本較高。"
  },
  balanced_material: {
    label: "一般平衡型供應商",
    spend: 80,
    kg: 110,
    pros: "成本與距離較平衡。",
    cons: "屬於折衷方案，不是最低排放。"
  },
  local_material: {
    label: "不太喜歡但距離近的供應商",
    spend: 150,
    kg: 60,
    pros: "距離近、排放較低。",
    cons: "合作關係可能不是最舒服。"
  },

  frequent_delivery: {
    label: "高頻率配送",
    spend: 0,
    kg: 140,
    pros: "補貨彈性高。",
    cons: "配送次數多，排放較高。"
  },
  planned_delivery: {
    label: "規劃配送",
    spend: 60,
    kg: 85,
    pros: "能兼顧便利與排放控制。",
    cons: "需要更好的庫存規劃。"
  },
  optimized_delivery: {
    label: "最佳化配送",
    spend: 120,
    kg: 45,
    pros: "排放較低，效率較好。",
    cons: "前期要多做規劃。"
  },

  old_equipment: {
    label: "維持舊設備",
    spend: 0,
    kg: 190,
    pros: "短期不用多花錢。",
    cons: "耗能高，長期成本壓力較大。"
  },
  basic_upgrade: {
    label: "基本節能調整",
    spend: 100,
    kg: 110,
    pros: "投入不高，也能改善。",
    cons: "改善幅度有限。"
  },
  smart_upgrade: {
    label: "高效率設備管理",
    spend: 180,
    kg: 60,
    pros: "長期更有利於永續經營。",
    cons: "前期預算壓力較大。"
  },

  single_use: {
    label: "大量一次性包材",
    spend: 0,
    kg: 130,
    pros: "流程最省事。",
    cons: "耗材多、排放高。"
  },
  reduced_packaging: {
    label: "減量包材",
    spend: 50,
    kg: 80,
    pros: "可降低部分耗材與排放。",
    cons: "不是最低排放。"
  },
  bring_your_own: {
    label: "自備杯機制＋精簡包材",
    spend: 90,
    kg: 35,
    pros: "排放最低，品牌形象較好。",
    cons: "需要教育顧客與配套。"
  }
};

function updateBudgetView() {
  let spend = 0;
  let kg = 0;

  Object.values(budgetGame).forEach(key => {
    if (key) {
      spend += budgetOptions[key].spend;
      kg += budgetOptions[key].kg;
    }
  });

  const left = BUDGET_BASE - spend;
  const carbonCost = kgToCarbonCost(kg);

  const leftEl = document.getElementById("budgetLeft");
  const costEl = document.getElementById("budgetCarbonCost");
  if (leftEl) leftEl.textContent = left;
  if (costEl) costEl.textContent = carbonCost;
}

function chooseBudgetOption(section, key) {
  budgetGame[section] = key;
  const target = document.getElementById(`budget-${section}`);
  if (target) target.textContent = `已選擇：${budgetOptions[key].label}`;
  updateBudgetView();
}

function finishBudgetGame() {
  const resultBox = document.getElementById("budgetResult");
  if (!resultBox) return;

  const sections = ["material", "transport", "production", "sales"];
  const allDone = sections.every(k => budgetGame[k]);

  if (!allDone) {
    resultBox.className = "summary-box";
    resultBox.innerHTML = "請先完成四個流程的選擇。";
    return;
  }

  let spend = 0;
  let kg = 0;
  let pros = [];
  let cons = [];

  sections.forEach(k => {
    const option = budgetOptions[budgetGame[k]];
    spend += option.spend;
    kg += option.kg;
    pros.push(`• ${option.label}：${option.pros}`);
    cons.push(`• ${option.label}：${option.cons}`);
  });

  const left = BUDGET_BASE - spend;
  const carbonCost = kgToCarbonCost(kg);

  if (left < 0) {
    resultBox.className = "summary-box budget-result-box budget-result-high";
    resultBox.innerHTML = `你目前超出預算 NT$ ${Math.abs(left)}，請重新調整選項。`;

    const p = getProgress();
    p.checklistDone = false;
    saveProgress(p);
    updateGlobalProgress();
    return;
  }

  let finalComment = "";
  let levelText = "";
  let levelClass = "";

  if (kg <= 260) {
    levelText = "低";
    levelClass = "budget-result-low";
    finalComment = "低碳，但可能要付出更多調整成本。";
  } else if (kg <= 420) {
    levelText = "中";
    levelClass = "budget-result-medium";
    finalComment = "屬於平衡型方案，兼顧成本與排放。";
  } else {
    levelText = "高";
    levelClass = "budget-result-high";
    finalComment = "短期較方便，但長期排放與成本壓力較高。";
  }

  resultBox.className = `summary-box budget-result-box ${levelClass}`;
  resultBox.innerHTML = `
    <strong>你的最終結果</strong><br><br>
    <strong>成果等級：</strong> ${levelText}<br><br>

    原料：${budgetOptions[budgetGame.material].label}<br>
    運輸：${budgetOptions[budgetGame.transport].label}<br>
    製作：${budgetOptions[budgetGame.production].label}<br>
    銷售：${budgetOptions[budgetGame.sales].label}<br><br>

    使用預算：NT$ ${spend}<br>
    剩餘預算：NT$ ${left}<br>
    模擬排放量：${kg} kg CO2e<br>
    模擬碳成本：NT$ ${carbonCost}<br><br>

    <strong>優點</strong><br>
    ${pros.join("<br>")}<br><br>

    <strong>缺點</strong><br>
    ${cons.join("<br>")}<br><br>

    <strong>提醒</strong><br>
    ${finalComment}<br><br>
    沒有最好，只有更適合你的選擇。
  `;

  const p = getProgress();
  p.checklistDone = true;
  p.findCarbonDone = true;
  p.classifyDone = true;
  p.quizDone = true;
  saveProgress(p);
  updateGlobalProgress();
}

function resetBudgetGame() {
  budgetGame = {
    material: null,
    transport: null,
    production: null,
    sales: null
  };

  ["material", "transport", "production", "sales"].forEach(k => {
    const el = document.getElementById(`budget-${k}`);
    if (el) el.textContent = "尚未選擇";
  });

  const resultBox = document.getElementById("budgetResult");
  if (resultBox) {
    resultBox.className = "summary-box";
    resultBox.innerHTML = "先完成四個流程選擇，再查看你的最終結果。";
  }

  const leftEl = document.getElementById("budgetLeft");
  const costEl = document.getElementById("budgetCarbonCost");
  if (leftEl) leftEl.textContent = BUDGET_BASE;
  if (costEl) costEl.textContent = 0;

  const p = getProgress();
  p.checklistDone = false;
  saveProgress(p);
  updateGlobalProgress();
}

/* 整體進度：只算 4 個正式活動 */
function updateGlobalProgress() {
  const p = getProgress();
  const keys = ["findCarbonDone", "classifyDone", "quizDone", "checklistDone"];
  const done = keys.filter(k => p[k]).length;
  const pct = Math.round(done / keys.length * 100);

  const globalBar = document.getElementById("globalProgress");
  const globalText = document.getElementById("globalProgressText");

  if (globalBar) globalBar.style.width = pct + "%";
  if (globalText) {
    globalText.textContent = `目前完成 ${done} / ${keys.length} 個重點學習活動，進度 ${pct}%。互動評估分數：${p.quizScore || 0}。`;
  }
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initReveal();
  initFindGame();
  initDragDrop();
  updateGlobalProgress();
  updateBudgetView();
});