const Clickcount = document.getElementById("Clv");
const ClickincBtn = document.getElementById("ClincBtn");
const ClickresetBtn = document.getElementById("ClresetBtn");
const Clickresult = document.getElementById("Clresult");
const timeLeftEl = document.getElementById("Cltime");
const bestCpsEl = document.getElementById("bestCps");
const fEb = document.getElementById("cln");

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
    fEb.textContent = "";
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

    let cps = clickCount / (duration / 1000);
    cps = Math.round(cps);

    Clickresult.textContent = `Your CPS: ${cps}`;

    /* ----- BEST CPS ----- */
    if (cps > bestCps) {
        bestCps = cps;
        bestCpsEl.textContent = `Best CPS: ${bestCps}`;
    }

    /* ----- YOUR STATEMENTS ----- */
    if (cps < 0) {
        alert("kuch kar le madarchod");
    } 
    else if (cps > 20) {
        alert("bhag bc tere jese logon ki wajah se hi duniya kharab hai");
    }
    else if (cps === 10) {
        fEb.textContent = "Wow! You clicked 10 times per sec ! Keep going! just like i clapped ur mom yesterday";
    }
    else if (cps === 9) {
        fEb.textContent = "Amazing! 9 cps already! are you aisha?";
    }
    else if (cps === 8) {
        fEb.textContent = "Great! 8 cps! you should go on a DATE and MATE MATE";
    }
    else if (cps === 7) {
        fEb.textContent = "Nice! 7 cps! If She is Seven feels like heaven?";
    }
    else if (cps === 6) {
        fEb.textContent = "Good! 6 cps! ik u beat ur meat harder than this ?";
    }
    else if (cps === 5) {
        fEb.textContent = "Not Bad! 5 cps! i will tell ur gf that ur a pedofile";
    }
    else if (cps === 4) {
        fEb.textContent = "Keep Trying! 4 cps! You can do better!";
    }
    else if (cps === 3) {
        fEb.textContent = "just 3 cps! thats number of holes in your mom !";
    }
    else if (cps === 2) {
        fEb.textContent = "Come on! 2 cps! even your crush had 3 ex and still ghosted you!";
    }
    else if (cps === 1) {
        fEb.textContent = "Let's go! 1 cps! You got this bitch!";
    }
    else {
        fEb.textContent = "Bro this not INC seats in election?";
    }
}

/* ---------- RESET ---------- */
function resetTest() {
    running = false;
    finished = false;
    clickCount = 0;

    Clickcount.textContent = 0;
    Clickresult.textContent = "Your CPS: 0";
    timeLeftEl.textContent = "Time Left: 5.0s";
    fEb.textContent = "";
}
