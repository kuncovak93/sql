function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const result = document.getElementById("result");

    if (
        username.includes("' OR '1'='1") ||
        password.includes("' OR '1'='1")
    ) {
        result.innerText = "⚠️ Prihlásenie úspešné pomocou SQL Injection!";
        result.style.color = "red";
    } 
    else if (username === "admin" && password === "1234") {
        result.innerText = "✅ Prihlásenie úspešné.";
        result.style.color = "green";
    } 
    else {
        result.innerText = "❌ Nesprávne meno alebo heslo.";
        result.style.color = "darkred";
    }
}

document.getElementById("loginButton").addEventListener("click", login);
