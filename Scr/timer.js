
    function startTimer(duration, display) {

        var timer = duration, minutes, seconds;

        setInterval(function() {

        minutes = parseInt(timer/ 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            ganhoEL.innerHTML = `Acabou seu tempo!`;
            perdeModal.showModal()
            alert("Seu tempo acabou! Próximo jogador.");

            const modal = document.getElementById("modal")


            valorGanho = 0
            console.log(valorGanho)
            ganhoEL.innerHTML = `Perdeu tudo!`;
            modal.showModal()

            location.reload(true);

        }

        }, 1000);

    }


    function comecarTimer() {
        var duration = 60 * 3;
        var display = document.querySelector("#timer");

        startTimer(duration, display);


    }
