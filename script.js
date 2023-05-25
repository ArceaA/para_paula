function getTimePassed() {
    var startDate = new Date("February 17, 2023 00:00:00");
    var currentDate = new Date();
    var timePassed = currentDate - startDate;
    var seconds = Math.floor(timePassed / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
  
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
  
    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
  }
  
  setInterval(getTimePassed, 1000);
  
  var cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    var envelope = card.querySelector(".envelope");
  
    card.addEventListener("click", function() {
      card.classList.toggle("open");
    });
  });
  