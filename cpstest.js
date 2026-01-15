const Clickcount = document.getElementById("Clv");
const ClickincBtn = document.getElementById("ClincBtn");
const ClickresetBtn = document.getElementById("ClresetBtn");
const Clickresult = document.getElementById("Clresult");
const timeLeftEl = document.getElementById("Cltime");
const bestCpsEl = document.getElementById("bestCps");
const note = document.getElementById("cln");

let clickCount = 0;
let running = false;
let finished = false;
let startTime = 0;
const duration = 5000; // 5 seconds
let bestCps = 0;

/* ---------- CLICK ---------- */
ClickincBtn.addEventListener("click", () => {
    if (finished) return;

    if (!running) startTest();

    clickCount++;
    Clickcount.textContent = clickCount;
});

/* ---------- RESET ---------- */
ClickresetBtn.addEventListener("click", resetTest);

/* ---------- START ---------- */
function startTest() {
    running = true;
    finished = false;
    clickCount = 0;
    Clickcount.textContent = 0;
    startTime = performance.now();
    requestAnimationFrame(updateTimer);
}

/* ---------- TIMER ---------- */
function updateTimer() {
    if (!running) return;

    const elapsed = performance.now() - startTime;
    const timeLeft = Math.max(0, duration - elapsed);

    timeLeftEl.textContent = `Time Left: ${(timeLeft / 1000).toFixed(1)}s`;

    if (elapsed >= duration) {
        endTest();
    } else {
        requestAnimationFrame(updateTimer);
    }
}

/* ---------- END ---------- */
function endTest() {
    running = false;
    finished = true;

    let cps = Math.round(clickCount / (duration / 1000));

    Clickresult.textContent = `Your CPS: ${cps}`;
    console.log(cps);

    /* ----- BEST CPS ----- */
    if (cps > bestCps) {
        bestCps = cps;
        bestCpsEl.textContent = `Best CPS: ${bestCps}`;
    

    }

    /* ----- YOUR STATEMENTS ----- */
  const messages = {
  10: "Wow! You clicked 10 times per sec ! Keep going! just like i clapped ur mom yesterday",
  9: "Amazing! 9 cps already! are you aisha?",
  8: "Great! 8 cps! you should go on a DATE and MATE MATE",
  7: "Nice! 7 cps! If She is Seven feels like heaven?",
  6: "Good! 6 cps! ik u beat ur meat harder than this ?",
  5: "Not Bad! 5 cps! i will tell ur gf that ur a pedofile",
  4: "Keep Trying! 4 cps! You can do better!",
  3: "just 3 cps! thats number of holes in your mom !",
  2: "Come on! 2 cps! even your crush had 3 ex and still ghosted you!",
  1: "Let's go! 1 cps! You got this bitch!"
 };

 // ALWAYS show something
 note.textContent = messages[cps] || "Bro this not INC seats in election?";

}

/* ---------- RESET ---------- */
function resetTest() {
    running = false;
    finished = false;
    clickCount = 0;
    note.style.display = "none";

    Clickcount.textContent = 0;
    Clickresult.textContent = "Your CPS: 0";
    timeLeftEl.textContent = "Time Left: 5.0s";
    note.textContent = "";
}
