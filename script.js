function revealFunction() {

    window.sr = ScrollReveal({ duration: 1350, distance: '-150px', innerWidth: "100px", easing: 'ease-out' });

    sr.reveal('.reveal-left', { origin: 'allSection', reset: true });
    sr.reveal('.reveal-right', { origin: 'allSection', reset: true });
    sr.reveal('.reveal-top', { origin: 'top', reset: true });
    sr.reveal('.image1', { delay: 200, easing: "ease-in", interval: 200, scale: 1, reset: true });
    sr.reveal('.image2', { delay: 200, easing: "ease-in-out", interval: 200, scale: 1, reset: true });


}

window.addEventListener('load', () => {

    revealFunction();

});




// typing animation

var typed = new Typed(".typing", {
    strings: ["", "React Developer", "YouTuber", "Web Developer", "Web Designer or", "Web Animation and more....."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})



// // email

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_j1gwc9n", "template_hi3gw7r", params).then(function(res) {
        alert("Success! " + res.status)
    })
}


/*----aside-----*
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList(i).querySelector("a");
    a.addEventListener("click", function() {
        for (let j = 0; j < totalnavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);

    })

}

function showSection(element) {
    for (let i = 0; i < totalSection; i++)

    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")

}*/

// Function to animate the percentage counter
function animatePercentage(targetPercentage, duration) {
    let start = 0;
    const element = document.getElementById("percentage");
    const increment = targetPercentage / (duration / 50); // Increment every 50 ms

    const interval = setInterval(function() {
        start += increment;
        if (start >= targetPercentage) {
            start = targetPercentage;
            clearInterval(interval);
        }
        element.textContent = Math.floor(start) + '%'; // Update the counter text
    }, 50); // Adjust the timing as needed (50ms interval here)
}

// Start the animation with target percentage 75% and duration of 3000ms (3 seconds)
animatePercentage(80, 3000);