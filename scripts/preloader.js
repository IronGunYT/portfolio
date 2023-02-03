window.addEventListener("load", function () {
    console.log("Website loaded");
    // document.querySelector("#preloader").style.top = "+100vh";
    document.querySelector("#preloader").style.height = "0";
    document.querySelector("body").style.backgroundColor = "var(--bg-color)";
    console.log("Preloader animated");
});

function change_opacity(from, to, time, item) {
    let opacity = from;
    let step = (to - from) / (time / 10);
    let timer = setInterval(function () {
        if (opacity >= to) {
            clearInterval(timer);
        }
        item.style.opacity = (opacity <= 1 ? opacity : 1);
        opacity += step;
    }, 10);
}

// on mouse move
let cursorShowed = false;
window.addEventListener("mousemove", function (e) {
    if(!cursorShowed) {
        cursorShowed = true;
        // document.querySelector("#magicMouseCursor").style.opacity = "1";
        document.querySelector("#magicPointer").style.opacity = "1";
        change_opacity(0, 1, 500, document.querySelector("#magicMouseCursor"));
        console.log("Cursor appeared");
    }
});
