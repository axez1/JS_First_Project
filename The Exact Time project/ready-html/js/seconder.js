  const minBlock = document.getElementsByClassName("js-min");
  const minSec = document.getElementsByClassName("js-sec");
  const minMlSec = document.getElementsByClassName("js-mlsec");

  let intervalSec = null;
  let minutesSec = 0;
  let secondsSec = 0;
  let mlSecondsSec = 0;

  const startButton = document.getElementsByClassName('btn__second');
  startButton[0].textContent = 'Пуск';
  document.getElementsByClassName("btn_seconder").textContent = startButton;

  const startTimerSeconds = () => {
    mlSecondsSec++;    

    if(mlSecondsSec <= 99) {
      minMlSec[0].innerHTML = mlSecondsSec;
    }
    if(mlSecondsSec == 100) {
      minMlSec[0].innerHTML = "00";
    }

    if(mlSecondsSec > 99) {
      secondsSec++;
      minSec[0].innerHTML = "0" + secondsSec;
      mlSecondsSec = 0;
    }
    if(secondsSec > 9)  {
      minSec[0].innerHTML = secondsSec;
    }
    if(secondsSec > 59)  {
      minutesSec++;
      minBlock[0].innerHTML = "0" + minutesSec;
      secondsSec = 0;
      minSec[0].innerHTML = "0" + secondsSec;
    }
    if(minutesSec > 9)  {
      minSec[0].innerHTML = minutesSec;
    }
  }

  
  startButton[0].addEventListener('click', () => {
    if (intervalSec === null) {
        clearInterval(intervalSec);
        intervalSec = setInterval(startTimerSeconds, 10);
        startButton[0].textContent = 'Стоп';        
    } else if(startButton[0].textContent === 'Стоп'){
        clearInterval(intervalSec);        
        startButton[0].textContent = 'Сброс';
    } else if (startButton[0].textContent === 'Сброс') {      
      clearInterval(intervalSec);

      intervalSec = null;

      startButton[0].textContent = 'Пуск';
      
      minutesSec = 0;
      secondsSec = 0;
      mlSecondsSec = 0;

      minBlock[0].innerHTML = "00";
      minSec[0].innerHTML = "00";
      minMlSec[0].innerHTML = "00";
  }   
  });
