function start() {
    let counter = 0;
    counter += 1;
    if (counter % 2 !== 0) {
        var interval = setInterval(() => {
            var milliSecond = document.getElementById("milliSecond").innerHTML++
            if (milliSecond > 98) {
                document.getElementById("milliSecond").innerHTML = "00"
                var second = document.getElementById("second").innerHTML++
            }
            if (second > 58) {
                document.getElementById("second").innerHTML = "00"
                var minute = document.getElementById("minute").innerHTML++
            }
            if (minute > 58) {
                document.getElementById("minute").innerHTML = "00";
            }
        }, 9)
    } else {
        clearInterval(interval)
    }
}

document.getElementById("start").addEventListener("click", start);