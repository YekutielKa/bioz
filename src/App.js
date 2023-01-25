import { useEffect, useState } from "react";
import "./App.css";
import Options from "./componets/Options";
import WordGerman from "./componets/WordGerman";

const answer = {
  correct_translation: "gas",
  german_word: "Gases",
  random_translation: ["plan", "city", "motion"],
};

function App() {
  const [task, setTask] = useState(1);
  async function getTask() {
    const data = await fetch(
      "https://frontend-interview-api.bioz.com/question_data"
    ).then((responce) => responce.json());
    setTask(task);
  }
  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className="content">
      <WordGerman germanWord={answer.german_word} />
      <p>Please choose the correct translation</p>
      <Options
        randomTranslation={answer.random_translation}
        correctTransletion={answer.correct_translation}
      />

      <button onClick={() => setTask(task + 1)} className="button">
        Task №{task}
      </button>
    </div>
  );
}

export default App;
