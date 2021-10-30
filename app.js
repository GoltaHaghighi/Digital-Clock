const clock = document.querySelector(".clock");
function time() {
    myCode();
}
setInterval(time , 1000);
function myCode() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let t;
    if (h === 0) {
        h = 12;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    if (m < 10) {
        m = `0${m}`;
    } 
    if (h < 10) {
        h = `0${h}`;
    }
    if ( h > 12 ){
        let hour = h - 12 ;
        if (hour < 10) {
            hour = `0${hour}`
        }
        t = `${hour}:${m}:${s} \t PM `;
    } else {
       t = `${h} : ${m} : ${s} \t AM` ;
    }
    clock.innerText = t;
}
