function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let miniutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormate = "AM";

    if(hours === 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        timeFormate = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    miniutes = miniutes < 10 ? "0" + miniutes : miniutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let finalTime = `${hours}: ${miniutes}: ${seconds}`;
    document.getElementById("time").innerText = finalTime;
    document.querySelector("small").innerText = timeFormate;

    setInterval(digitalClock, 1000);
}

digitalClock();