function contentLoaded() {
  // HEADER
  const header = document.querySelector(".header");
  const mobileToggle = header.querySelector(".nav__mobile-menu-icon");
  const navMenu = header.querySelector(".nav__links");

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
  });
  // For DESKTOP ONLY
  document.addEventListener("scroll", () => {
    // CHANGE MENU COLORS
    // If header is at the very top of the page, keep transparent style
    if (window.scrollY <= 20 && header.classList.contains("variant")) {
      header.classList.remove("variant");
    }
    // Else, change style to variant
    if (window.scrollY >= 30 && !header.classList.contains("variant")) {
      header.classList.add("variant");
    }
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

  // WE CAN HELP YOU - Change image for large screens
  const weCanHelpImg = document.querySelector(
    "#we-can-help-you .section__image"
  );
  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 1200) {
      // Replace imaage for WE CAN HELP YOU
      weCanHelpImg.src = "img/group-of-people.png";
    } else {
      // Replace image for WE CAN HELP YOU
      weCanHelpImg.src = "img/group-of-doctors.png";
    }
  });

  // FAQ
  const faq = document.getElementById("faq");
  const questions = Array.from(faq.querySelectorAll(".faq__item"));

  questions.forEach((question) => {
    const btnOpenMenu = question.querySelector(".question > img");
    const answer = question.querySelector(".answer");

    btnOpenMenu.addEventListener("click", () => {
      answer.classList.toggle("active");
    });
  });
}
