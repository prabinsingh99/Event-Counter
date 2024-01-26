const endTime = "HAPPY DEEWALI 22 JANUARY 2025"
document.getElementById("eventTime").innerText = endTime;

const edate = "22 January 2025 00:00:00"

const input = document.getElementsByClassName("inputboxes")

/**
 * Updates the input boxes with the remaining time in days, hours, minutes, and seconds.
 */
function clock() {
    const end = new Date(edate);
    const start = new Date();
    const timeLeft = end - start;
    const timeInSeconds =(timeLeft / 1000);

    // set value in input box
    input[0].value= Math.floor((timeInSeconds / 3600)/24);
    input[1].value= Math.floor((timeInSeconds /3600) % 24);
    input[2].value= Math.floor((timeInSeconds /3600) % 60);
    input[3].value= Math.floor(timeInSeconds% 60);
}

setInterval(
    () =>{
        clock()},
        1000
)