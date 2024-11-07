const formElement = document.getElementById("resume-Form") as HTMLFormElement;
const DisplayElement = document.getElementById("resume-display") as HTMLDivElement;
console.log("formElement:", formElement);
console.log("resumeDisplayElement:", DisplayElement);
if (formElement && DisplayElement) {
    formElement.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value
        const email = (document.getElementById("email") as HTMLInputElement).value
        const phone = (document.getElementById("number") as HTMLInputElement).value
        const education = (document.getElementById("education") as HTMLInputElement).value
        const experience = (document.getElementById("experience") as HTMLInputElement).value
        const skills = (document.getElementById("skills") as HTMLInputElement).value

        const resumeHtml = `
<h2><b>Dynamic Resume </b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;


        DisplayElement.innerHTML = resumeHtml;
    });
} else {
    console.error("resume element not found.")
}

