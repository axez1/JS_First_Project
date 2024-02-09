let cities = {
  "Минск": {"image": "../assets/images/minsk.png", "timezone": "Europe/Minsk", "text": "Минск, +3 часа к Гринвичу"},
  "Токио": {"image": "../assets/images/tokyo.png", "timezone": "Asia/Tokyo", "text": "Токио, +9 часов к Гринвичу"},
  "Пекин": {"image": "../assets/images/bijing.png", "timezone": "Asia/Shanghai", "text": "Пекин, +8 часов к Гринвичу"},
  "Буэнос-Айрес": {"image": "../assets/images/Buenos_Aires.png", "timezone": "America/Argentina/Buenos_Aires", "text": "Буэнос-Айрес, -3 часа к Гринвичу"},
  "Нью-Йорк": {"image": "../assets/images/New_York.png", "timezone": "America/New_York", "text": "Нью-Йорк, -5 часов к Гринвичу"},
  "Лондон": {"image": "../assets/images/London.png", "timezone": "Europe/London", "text": "Лондон, 0 по Гринвичу"}
};

function updateTime(city) {  
  let dateInfo = new Date();  
  let timeNow = dateInfo.toLocaleTimeString('ru-RU', {timeZone: cities[city].timezone});
  document.getElementsByClassName('hms')[0].textContent = timeNow;
}

function updateCity(city) {  
  document.getElementsByClassName('imgOfSities')[0].src = cities[city].image;
  updateTime(city);
}

function updateText(city) {
  document.getElementsByClassName('text__hms')[0].textContent = cities[city].text;
  updateTime(city);
}

let buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Сбрасываем выделение с активной кнопки
    document.querySelector('.btn.btn__active').classList.remove('btn__active');
    // Выделяем новую активную кнопку
    this.classList.add('btn__active');
    // Обновляем город, пояснение к Гринвичу
    updateCity(this.textContent);
    updateText(this.textContent);
  });
}

setInterval(function() {
  // Получаем текущий активный город
  let activeCity = document.querySelector('.btn.btn__active').textContent;
  updateTime(activeCity);
}, 1000);
