function contentLoaded() {
  // HEADER
  const mobileToggle = document.querySelector(".nav__mobile-menu-icon");
  const navMenu = document.querySelector(".nav__links");

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // COUNTDOWN TIMER
  // Get elements
  const countdownTimer = document.querySelector(".hero__countdown-section");
  const days = countdownTimer.querySelector("#countdown__days");
  const hours = countdownTimer.querySelector("#countdown__hours");
  const minutes = countdownTimer.querySelector("#countdown__minutes");
  const seconds = countdownTimer.querySelector("#countdown__seconds");

  // Countdown End Date
  let dueDate = new Date("Jan 1, 2024 00:00:00").getTime();

  // Execute every 1 second
  setInterval(() => {
    let timeCurrent = new Date().getTime();
    let timeRemaining = dueDate - timeCurrent;

    // Display results on screen
    days.innerHTML = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.innerHTML = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    seconds.innerHTML = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  });
  // FAQ
  const faq = document.getElementById("faq");
  const questions = Array.from(faq.querySelectorAll(".faq__item"));
  console.log(questions);

  questions.forEach((question) => {
    const btnOpenMenu = question.querySelector(".question > img");
    const answer = question.querySelector(".answer");

    btnOpenMenu.addEventListener("click", () => {
      answer.classList.toggle("active");
    });
  });
}
