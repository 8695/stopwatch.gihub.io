/* fetch button start stop reset */
let start=document.getElementById('start-btn');
let stop=document.getElementById('stop-btn');
let reset= document.getElementById('reset-btn');

/* fetch timer display */
let timerDisplay=document.querySelector('.timer-display');

/* fecth pins of hour minute second */
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


/* intialize  minute second hour and milisecond with 0 */
let minute=0;
let hour=0;
let second=0;
let milisecond=0;
 
/* take one onther variable timer with null */
var timer=null;

// when click a start button display will start
start.addEventListener('click',function(){
    if(timer!==null){
        clearInterval(timer);
    }
    // timer=setInterval(displayTime, 1000);
    timer=setInterval(startTimer,10);
});

// when click stop button display timer will stop
stop.addEventListener('click',function(){
    clearInterval(timer);  
});

// when click reset button display timer will reset all the display
reset.addEventListener('click',function(){
    timerDisplay.innerText = `00 : 00 : 00 : 00`;
    milisecond = second =minute = 0;
    clearInterval(timer);
    hr.style.transform = `rotate(0deg)`;
    min.style.transform = `rotate(0deg)`;
    sec.style.transform = `rotate(0deg)`;
});

// start function
function startTimer(){
   milisecond++;
    if(milisecond==100){
        second++;
        milisecond=0;
        if(second==60){
            second=0;
            minute++;
            if(minute==60){
                minute=0;
                hour++;
            }
        }
    }
    let miliString = milisecond < 10 ? `0${milisecond}` : milisecond;
    let secString =  second < 10 ? `0${second}` : second;
    let minString = minute < 10 ? `0${minute}` : minute;
    let hrString = hour< 10 ? `0${minute}` : hour;
    timerDisplay.innerHTML = `${hrString} : ${minString} : ${secString} : ${miliString}`;

    // new date method
    const date = new Date();
    
    // Getting hour, mins, secs from date
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    
    const hRotation = ((hh / 60) * 360) + 90;
    const mRotation = ((mm / 60) * 360) + 90;
    const sRotation = ((ss / 60) * 360) + 90;
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}



