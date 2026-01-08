let goal = "cut";

function goTo(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function setGoal(g) {
  goal = g;
  goTo("data");
}

function buildPlan() {
  const w = +weight.value;
  const h = +height.value;
  const a = +age.value;
  const act = +activity.value;

  if (!w || !h || !a) {
    alert("كمل البيانات");
    return;
  }

  let bmr = 10*w + 6.25*h - 5*a + 5;
  let calories = Math.round(bmr * act);

  calories += goal === "cut" ? -500 : 500;

  document.getElementById("calories").innerText = calories + " kcal";

  document.getElementById("meals").innerHTML =
    goal === "cut"
    ? "08:00 فطار<br>13:00 غداء<br>19:00 عشاء"
    : "08:00 فطار<br>13:00 غداء<br>16:00 سناك<br>19:00 عشاء";

  document.getElementById("alts").innerHTML =
    "فراخ ↔ سمك<br>رز ↔ بطاطس<br>شوفان ↔ عيش أسمر";

  goTo("plan");
}
