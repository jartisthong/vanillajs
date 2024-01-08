const quotes = [
    {
      quote: "나답게 사는 법을 배워라",
      author: "플라톤",
    },
    {
      quote: "정의란 각자 자기 일을 잘 하는 것이다.",
      author: "플라톤",
    },
    {
      quote:
        "모든 사람들이 쓸모가 있는 것의 쓰임은 알지만, 쓸모가 없는 것의 쓰임을 아는 사람은 아무도 없다.",
      author: "장자",
    },
    {
      quote: "어떤 일이 일어나더라도 자연스럽게 흘러가라. 그리고 그를 통해 자신의 마음을 자유롭게 하라.",
      author: "장자",
    },
    {
      quote: "허물이 있다면, 버리기를 두려워말라.",
      author: "공자",
    },
    {
      quote: "네 운명을 사랑하라. 이것이 지금부터 나의 사랑이 될 것이다! 나는 추한 것과 전쟁을 벌이지 않으련다. 나는 비난하지 않으련다. 나를 비난하는 자도 비난하지 않으련다.",
      author: "니체",
    },
    {
      quote: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.",
      author: "니체",
    },
    {
      quote: "고통이 너를 붙잡고 있는 것이 아니다. 네가 그 고통을 붙잡고 있는 것이다.",
      author: "불교 명언",
    },
    {
      quote: "생각한 대로 살아야 한다.그렇지 않으면 사는 대로 생각하게 된다.",
      author: "폴 불즈제",
    },
    {
      quote: "네 뼈는 유리처럼 약하지 않아.",
      author: "영화 - 아밀리에",
    },
  ];

const quote =  document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
