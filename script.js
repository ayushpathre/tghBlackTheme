
//screen loader
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})

// Quick Connect Form Toggle
document.addEventListener("DOMContentLoaded", function () {
    const quickForm = document.querySelector(".quick-connect");
    const quickIcon = document.querySelector(".quick-icon");

    // Toggle form visibility on icon click
    quickIcon.addEventListener("click", function () {
      if (quickForm.classList.contains("hidden")) {
        quickForm.classList.remove("hidden"); // Show the form
        quickForm.style.transform = "translateX(0%)"; // Slide into view
      } else {
        quickForm.classList.add("hidden"); // Hide the form
        quickForm.style.transform = "translateX(110%)"; // Slide out of view
      }
    });
});







 // Function to show service details
 function showServiceDetails(serviceId) {
    document.querySelectorAll('.service-item').forEach(detail => {
        detail.style.display = detail.id === serviceId ? 'block' : 'none';
    });
}

// Add event listeners to service list items
document.querySelectorAll('.services-list ul li a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        showServiceDetails(item.getAttribute('href').substring(1));
    });
});
// Show the first service detail by default when the page loads
document.addEventListener('DOMContentLoaded', () => showServiceDetails('service1'));


//drop down
// Check URL hash and display corresponding service on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash.substring(1); // Get the hash without '#'
    if (currentHash) {
        showServiceDetails(currentHash); // Show the service matching the hash
    } else {
        showServiceDetails('service1'); // Default to the first service if no hash
    }
});

// Update service details dynamically when navigating back/forward
window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.substring(1); // Get updated hash
    showServiceDetails(newHash); // Show service based on updated hash
});

  function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

//contact form Data handlling for backend
document.querySelector('.contact-form form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        state: document.getElementById('state').value,
        message: document.getElementById('message').value
    };

    try {
        // Send the form data to the backend
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset(); // Clear the form
        } else {
            alert('Failed to send message. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // const quickIcon = document.getElementById("quick-icon");
    // const quickConnect = document.querySelector(".quick-connect");
    const quickForm = document.getElementById("quick-form");

    // // Toggle form visibility
    // quickIcon.addEventListener("click", () => {
    //     quickConnect.style.transform =
    //         quickConnect.style.transform === "translateX(0%)"
    //             ? "translateX(100%)"
    //             : "translateX(0%)";
    // });

    // Form submission
    quickForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(quickForm);
        const formObject = Object.fromEntries(formData);

        try {
            const response = await fetch("server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                alert("Your message has been sent successfully!");
                quickForm.reset();
            } else {
                alert("Failed to send your message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    });
});

//Contact-Us-form
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    // Submit the Contact Form (for detailed inquiries)
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);

        try {
            const response = await fetch("contact_form_server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObject),
            });

            const responseData = await response.json();

            if (response.ok) {
                document.getElementById("form-response").innerText = "Your message has been sent successfully!";
                contactForm.reset();
            } else {
                document.getElementById("form-response").innerText = "Failed to send your message. Please try again.";
            }
        } catch (error) {
            // console.error("Error:", error);
            // document.getElementById("form-response").innerText = "send successfully";
        }
    });
});


