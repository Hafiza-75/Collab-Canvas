// Initialize EmailJS
(function () {
  emailjs.init("7rbZDCxU8U9b-pygh");
})();

window.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("sendInviteBtn");
  const emailInput = document.getElementById("emailInput");
  const successBox = document.getElementById("successMessage");

  sendBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter an email.");
      return;
    }

    const templateParams = {
      to_email: email,
    };

    emailjs
      .send("service_zsepjrf", "template_zqmauk9", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          successBox.style.display = "block";
          emailInput.value = "";

          setTimeout(() => {
            successBox.style.display = "none";
          }, 3000);
        },
        function (error) {
          console.error("FAILED...", error);
          alert("Failed to send invite. Please try again.");
        }
      );
  });
});
