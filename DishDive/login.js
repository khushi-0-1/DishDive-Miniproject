document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");
  
    // Replace this condition with your actual login logic
    if (username === "khushi.hackathon@gmail.com" && password === "kk2005") {
      loginMessage.textContent = "Login Successful!";
      loginMessage.style.color = "green";
  
      // Redirect to the homepage (index.html) after a successful login
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000); // Redirect after 2 seconds
    } else {
      loginMessage.textContent = "Login failed. Please check your credentials.";
      loginMessage.style.color = "red";
    }
  });
  