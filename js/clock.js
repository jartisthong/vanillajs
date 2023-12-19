const clock = document.querySelector("#clock");

clock.innerText = "00:00";

function sayHello() {
    console.log("8 secs");
}


setInterval(sayHello, 8000);

