const dayEl = document.querySelector(".days");
const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");

const date = new Date("Feb 11, 2023 18:00:00").getTime();

updateTime();

function updateTime() {
    const currentTime = new Date().getTime();
    const gap = date - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap%day)/hour)
    const m = Math.floor((gap%hour)/minute)
    const s = Math.floor((gap%minute)/second)

    

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateTime, 1000)
}