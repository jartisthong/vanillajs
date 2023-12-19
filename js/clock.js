const clock = document.querySelector("#clock");

clock.innerText = "00:00";

function sayHello() {
    console.log("no disapear no repeat");
}


setTimeout(sayHello, 1000)
