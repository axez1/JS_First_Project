  let intervalTimerOut;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let timerFlag = false;

  const startButtonTimer = document.getElementsByClassName('btn__timer');
  startButtonTimer[0].textContent = 'Пуск';
  document.getElementsByClassName("btn_timerButton").innerHTML = startButtonTimer;

  const resetButtonTimer = document.getElementsByClassName("btn__timer-reset");
  resetButtonTimer[0].addEventListener('click', resetTimer);

  function resetTimer() {
      resetItem();
      clearInterval(intervalTimerOut);
      timerFlag = false;    
      hours = 0;
      minutes = 0;
      seconds = 0;
      updateTimer();
      enableTimeButtons();
      startButtonTimer[0].textContent = "Пуск";
  }

  function resetItem() {
    if(!timerFlag) {
      document.querySelectorAll(".btn__timer-reset").forEach(button => {
      button.style.display = "block";
      });
    } else {
      document.querySelectorAll(".btn__timer-reset").forEach(button => {
      button.style.display = "none";
        });
      }
    }

  function disableTimeButtons() {
        document.querySelectorAll(".btn__nav-dis").forEach(button => {
        button.setAttribute("disabled", "disabled");
      });
  }

  function enableTimeButtons() {
      document.querySelectorAll(".btn__nav-dis").forEach(button => {
      button.removeAttribute("disabled");
    });
  }

  function appendZero(time) {
    return time < 10 ? "0" + time : time;
  }

  // обновления времени на странице
  function updateTimer() {
    let timerCost = document.getElementsByClassName('timer_box');
    timerCost[0].innerHTML = `${appendZero(hours)}:${appendZero(minutes)}:${appendZero(seconds)}`;
  }

  function changeTime(event, i) {  
    
    const timeType = event.target.dataset.type;
    
    if (timeType === "hours") {
      hours = (hours + i + 25) % 25;
    } else if (timeType === "minutes") {
      minutes = (minutes + i + 60) % 60;
    } else if (timeType === "seconds") {
      seconds = (seconds + i + 60) % 60;
    }
    
    updateTimer();
  }

  function useTimer() {    
    if (!timerFlag) {
      startTimer();
    } else {
      pauseTimer();
    }
  }

  function startTimer() {
    resetItem();
    clearInterval(intervalTimerOut);
    timerFlag = true;
    startButtonTimer[0].textContent = "Пауза";
    
    const endTime = Date.now() + (hours * 3600 + minutes * 60 + seconds) * 1000;
    
    intervalTimerOut = setInterval(() => {
      
      const nowTime = Date.now();
      const endedTime = endTime - nowTime;
      
      if (endedTime <= 0) {
        clearInterval(intervalTimerOut);
        timerFlag = false;
        startButtonTimer[0].textContent = "Пуск";
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateTimer();
        sound();
        enableTimeButtons()
      } else {
        hours = Math.floor(endedTime / 3600000);
        minutes = Math.floor((endedTime % 3600000) / 60000);
        seconds = Math.round((endedTime % 60000) / 1000);
        updateTimer();        
        disableTimeButtons();
      }
      
    }, 1000);
  }
  
  function pauseTimer() {
    enableTimeButtons();
    clearInterval(intervalTimerOut);
    timerFlag = false;    
    startButtonTimer[0].textContent = "Продолжить";    
  }

  function sound() {
    let _audio = new Audio('../assets/sounds/timer.mp3');
    _audio.play();
  }

  startButtonTimer[0].addEventListener('click', useTimer);