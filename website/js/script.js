const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        document.getElementById("registrationMessage").innerHTML =
            "✅ Registration Successful!";

        document.getElementById("registrationMessage").style.color = "green";
        document.getElementById("registrationMessage").style.fontWeight = "bold";
        document.getElementById("registrationMessage").style.marginTop = "15px";

        registrationForm.reset();

    });

}