const images = [
"1amelie.jpeg",
"2amelie.jpeg",
"3amelie.jpeg",
"4amelie.jpeg",
"5amelie.jpeg",
"6amelie.jpeg",
"7amelie.jpeg",
"8amelie.jpeg",
"9amelie.jpeg",
"10amelie.jpeg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

console.log(bgImage);