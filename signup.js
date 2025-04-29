// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            // Save to localStorage (replace with backend call in real app)
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if user already exists
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert("Email is already registered.");
                return;
            }

            // Save user
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed. Try again.");
        }
    });
});
