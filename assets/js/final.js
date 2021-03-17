const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

const score = {
    score: mostRecentScore,
};

/* Sending emails */
function sendMail(contactForm) {
  emailjs
    .send("service_edl6rt5", "template_t45mpqs", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      project_request: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        window.alert("Thank you for your message, we will get back to you shortly");
      },
      function (error) {
        console.log("FAILED", error);
        window.alert("Oops! Something went wrong and we couldn't send your message!")
      }
    );
  return false;
}