function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

  
    if (username.includes("' OR '1'='1") || password.includes("' OR '1'='1")) {
        document.getElementById("result").innerText = "Prihlásenie úspešné (SQL Injection!)";
    } else if (username === "admin" && password === "1234") {
        document.getElementById("result").innerText = "Prihlásenie úspešné";
    } else {
        document.getElementById("result").innerText = "Nesprávne údaje";
    }
}
