document.addEventListener('DOMContentLoaded', () => {
  const daysEl = document.querySelector('.days');
  const hoursEl = document.querySelector('.hours');
  const minEl = document.querySelector('.min');
  const secEl = document.querySelector('.sec');

  function countdown() {
      const endDate = new Date('April 24, 2025 08:00:00').getTime(); // Update the year to future date
      const now = new Date().getTime();
      const timeRemaining = endDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minEl.textContent = minutes;
      secEl.textContent = seconds;

      if (timeRemaining < 0) {
          clearInterval(countdownInterval);
          daysEl.textContent = '0';
          hoursEl.textContent = '0';
          minEl.textContent = '0';
          secEl.textContent = '0';
      }
  }

  const countdownInterval = setInterval(countdown, 1000);
});
