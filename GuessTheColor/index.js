let n = 6;
let c = [];
let presentColor;
let q = document.querySelector("span");
let sq = document.querySelectorAll(".sq");
let span = document.querySelector(".span");
let h1 = document.querySelector("h1");
let reset = document.querySelector(".reset");
let mode = document.querySelectorAll(".mode");
q.textContent = presentColor;

init();
function init() {
    for (let i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "EASY" ? n = 3 : n = 6;
            res();
        });
    }
    res();
}

function res() {
    let c = getColors(n);
    presentColor = choseColor(c);
    q.textContent = presentColor;
    reset.textContent = "NEW COLORS";
    span.textContent = "";
    for (let i = 0; i < sq.length; i++) {
        if (c[i]) {
            sq[i].style.display = "block";
            sq[i].style.background = c[i];
        } else sq[i].style.display = "none";
    }
    h1.style.background = "steelblue";
}

reset.addEventListener("click", function () {
    res();
});

for (let i = 0; i < sq.length; i++) {
    sq[i].addEventListener("click", function () {
        let currentColor = this.style.background;
        if (currentColor == presentColor) {
            h1.style.background = presentColor;
            reset.textContent = "NEW COLORS";
            span.textContent = "CORRECT";
            for (let j = 0; j < sq.length; j++) {
                sq[j].style.background = currentColor;
            }
        }
        else {
            this.style.background = "black";
            span.textContent = "TRY AGAIN";
        }
    })
}

function choseColor(c1) {
    let x = Math.floor(Math.random() * c1.length);
    return c1[x];
}

function getColors(num) {
    let arr = [];
    for (let k = 0; k < num; k++) {
        arr[k] = generateRandomRGB();
    }
    return arr;
}

function generateRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}