let nowtime = document.getElementById("nowtime");
function timer(){
    let times = new Date();   

    let year = times.getFullYear(); // 년도
    let month = times.getMonth() + 1;  // 월
    let date = times.getDate();  // 날짜

    let hours = times.getHours();
    let minutes = times.getMinutes();
    let seconds = times.getSeconds();

    nowtime.innerText = `${year}/${month}/${date} `+`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
timer();
setInterval(timer,1000);