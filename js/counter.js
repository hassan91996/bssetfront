let nums = document.querySelectorAll(".count");
let section = document.querySelector(".numbers_sec");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop-200) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};


function startCount(el) {
    const update = () => {
        let target = +el.getAttribute('data');
        let inc = target / 300;
        let current = +el.innerText;
        if (current < target) {
            el.innerText = `${Math.ceil(current + inc)}`
            setTimeout(update, 1)
        }
        else {
            el.innerText = target
        }
    }
    update()
}

