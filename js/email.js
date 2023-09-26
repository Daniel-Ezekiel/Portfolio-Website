"use strict";

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("ZtawX5PzXezIijqHo");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_92tq4vj", "template_6uekskq", this).then(
        console.log(this.user_name),
        function () {
          console.log("SUCCESS!");
          document
            .querySelectorAll("input")
            .forEach((input) => (input.value = ""));
          document.querySelector("textarea").value = "";
          alert("Your message has been sent successfully! Thank you!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Apologies. Your message failed to send.");
        }
      );
    });
};
