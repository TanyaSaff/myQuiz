import "./App.css";
import React from "react";

const questions = [
  {
    title: "Самый юный мститель. Совмещает жизнь обычного школьника и борца с преступностью",
    variants: ["Звездный Лорд", "Человек-паук", "Человек-муравей"],
    correct: 1,
  },
  {
    title: "Великий и ужасный Бог грома. Принц Асгарда и сын Одина. Также известен как Златовласка",
    variants: ["Черная Пантера", "Доктор Стрендж", "Тор"],
    correct: 2,
  },
  {
    title: "Ученый-физик и могучий злобный зеленый гигант одновременно. Ненавидит лестницы",
    variants: ["Грут", "Ракета", "Халк"],
    correct: 2,
  },
  {
    title: "Первый мститель. Так же достоин Мьёльнира, как и сам Тор",
    variants: ["Халк", "Капитан Америка", "Железный человек"],
    correct: 1,
  },
  {
    title: "Гений, миллиардер, плейбой, филантроп. И да, у него все-таки есть сердце",
    variants: ["Железный человек", "Капитан Америка", "Черная Пантера"],
    correct: 0,
  },
];

const img = ["spiderman.jpg", "thor.jpg", "hulk.jpg", "captain_America.jpg", "iron_Man.jpg"];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="lastImg.png" alt="" />
      <h2>
        Вы отгадали {correct} из {questions.length}
      </h2>
        <a href="index.js">
          <button>Попробовать снова</button>
        </a>
    </div>
  );
}

function Game({currentGuestion,onClickVariant, step, currentImg}) {

  const persent = Math.round( ++step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persent}%` }} className="progress__inner"></div>
      </div>
      <div className="quizContainer">
        <div className="quizContainerItem">
        <h1>{currentGuestion.title}</h1>
        <ul>
          {
          currentGuestion.variants.map((el, index) => {
            return (
              <li onClick={() => onClickVariant(index)} key = {index}>
                {el}
              </li>
            )
          })
          }
        </ul>
        </div>
        <div>  
          <img src={currentImg} alt="" />
        </div>
      </div>
    </>
  );
}
function Start ({startQuiz}) {
    return (
      <div className="result">
        <img src="avengers.jpg" alt="" />
        <h2>Проверим, как хорошо Вы знаете Мстителей?</h2>
        <button onClick={() => startQuiz()}>Конечно!</button>
      </div>
    );
  }

function App() {

  const[step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const currentGuestion = questions[step];
  let [start, setStart] = React.useState(true);
  const currentImg = img[step];
 

  const startQuiz = () => {
    return setStart(false);
  };

  const onClickVariant = (index) => {
    if(index === currentGuestion.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  }

  return (
    <div className="App">
      { start ? <Start startQuiz={startQuiz}/> :
        step < questions.length ? 
        <Game currentGuestion = {currentGuestion} onClickVariant = {onClickVariant} step = {step} img={img} currentImg={currentImg}/> :
        <Result correct={correct}/>
      }
    </div>
  );
}

export default App;
