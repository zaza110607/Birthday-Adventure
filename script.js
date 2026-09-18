function checkPassword() {

    // =========================
    // GANTI KODE RAHASIA DI SINI
    // =========================

    const correctPassword = "piya";

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");


    // =========================
    // CEK PASSWORD
    // =========================

    if (password.toLowerCase() === correctPassword) {

        message.innerHTML =
            "🎉 Kode benar! Surprise dimulai... 💙";

        message.style.color = "#16804b";

        setTimeout(function() {

            window.location.href = "game.html";

        }, 1500);

    } else {

        message.innerHTML =
            "🤭 Hmm... kode rahasianya salah! Coba lagi.";

        message.style.color = "#d35b70";

    }
}
