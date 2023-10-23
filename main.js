  document.addEventListener("DOMContentLoaded", function () {
    const hideIcon = document.querySelector(".show__hide");
    const passwordInput = document.querySelector(".pass__field input[type='password']");

    hideIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        hideIcon.classList.remove("bx-hide");
        hideIcon.classList.add("bx-show");
      } else {
        passwordInput.type = "password";
        hideIcon.classList.remove("bx-show");
        hideIcon.classList.add("bx-hide");
      }
    });
  });
