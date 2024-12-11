// app.js
const apiBaseURL = "http://localhost:4000"; // Replace with your API base URL

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");


    // Handle registration form submission
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("register-username").value;
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;

        try {
            const response = await fetch(`${apiBaseURL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                alert("Registration successful! Redirecting to login.");
                toggleForm(); // Redirect to login form
            } else {
                const errorData = await response.json();
                alert(`Registration failed: ${errorData.message || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again later.");
        }
    });



    // Handle login form submission
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        try {
            const response = await fetch(`${apiBaseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Login successful!");
                // Redirect to the dashboard or home page
                window.location.href = "/dashboard";
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again later.");
        }
    });

    // Function to toggle between forms
    window.toggleForm = () => {
        const container = document.querySelector(".container");
        container.classList.toggle("active");
    };
});
