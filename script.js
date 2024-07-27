

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', function() {
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Activate navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header .navbar a[href="#' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}


function sendEmail(e) {
    e.preventDefault(); 

    var fullName = document.getElementById('fullName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    emailjs.send("service_wcyk6vh", "template_yrhr6vg", {
      "from_name": fullName,
      "from_email": emailAddress,
      "mobile_number": mobileNumber,
      "email_subject": emailSubject,
      "message_html": message
    })
    .then(function(response) {
      console.log("Email sent successfully", response);
      alert("Your message has been sent successfully!");
      
      document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
      console.error("Failed to send email", error);
      alert("Oops! An error occurred, please try again later.");
    });
  }

  document.getElementById('contactForm').addEventListener('submit', sendEmail);

