let valorModalTempo = document.getElementById("tempoModaltxt");


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
            valorModalTempo.innerHTML = `Seu tempo acabou! Próximo jogador. O seu saldo foi ${parseInt(saldoAtual.innerText)}.`;

            const modal = document.getElementById("tempoModal")


            valorGanho = 0
            modal.showModal()


        }

        }, 1000);

    }


    window.onload = function () {
        var duration =  60 * 3;
        var display = document.querySelector("#timer");

        startTimer(duration, display);


    }
