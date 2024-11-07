var formElement = document.getElementById("resume-Form");
var DisplayElement = document.getElementById("resume-display");
console.log("formElement:", formElement);
console.log("resumeDisplayElement:", DisplayElement);
if (formElement && DisplayElement) {
    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("number").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var resumeHtml = "\n<h2><b>Dynamic Resume </b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        DisplayElement.innerHTML = resumeHtml;
    });
}
else {
    console.error("resume element not found.");
}
