
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
            alert("Seu tempo acabou! Próximo jogador.");
            location.reload(true);

        }

        }, 1000);

    }


    window.onload = function () {
        var duration = 60 * 3;
        var display = document.querySelector("#timer");

        startTimer(duration, display);


    }
