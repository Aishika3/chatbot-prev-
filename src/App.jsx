import "./App.css";
import OpenAI from "openai";
//import { OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";

function App() {
  const openai = new OpenAI({ key: import.meta.env.VITE_Open_AI_Key });
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  //console.log(import.meta.env.VITE_Open_AI_Key);

  const selectOption = (option) => {
    setOption(option);
  };

  const generate = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.chat.completions.create(object);

    setResult(response.data.choices[0].text);
    console.log(response);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation generate={generate} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
