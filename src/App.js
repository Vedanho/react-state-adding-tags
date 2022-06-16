import { useState } from "react";
import "./App.css";

function App() {
  const [login, setValue] = useState("");

  const [message, setMessage] = useState("");

  const [isActive, setIsActive] = useState(true);

  const [inputClass, setInputClass] = useState("no_Error");

  const [wasInput, setWasInput] = useState(false);

  const [textClass, setTextClass] = useState("message_class");

  const [arr, setArr] = useState([]);

  const deleteTeg = (indexOfTeg) => {
    setArr(
      arr.filter((element, index) => {
        if (index !== indexOfTeg) {
          return true
        } 
        return false
      })
    );
  };
console.log(arr);
  const addTask = () => {
    setArr([...arr, login]);
  };

  const handleClick = () => {
    setIsActive(true);
    setTextClass("message_class");
    addTask();
    setValue("");
  };

  const blurHandler = (e) => {
    if (e.target.name === "input") {
      setWasInput(true);
      if (login === "") {
        setInputClass("is_Error");
        setMessage("Поле ввода не должно быть пустым");
        setTextClass("error_text");
      } else if (login !== "") {
        setMessage("");
      }
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (!e.target.value) {
      setIsActive(true);
    }
    if (e.target.value) {
      setIsActive(false);
      setInputClass("no_Error");
      setWasInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="conteiner">
          <input
            name="input"
            className={inputClass}
            type="text"
            value={login}
            onChange={handleChange}
            onBlur={(e) => blurHandler(e)}
          />
          <button
            type="submit"
            onClick={handleClick}
            disabled={isActive}
            className="button"
          >
            Отправить
          </button>
          {wasInput && <p className={textClass}>{message}</p>}
        </div>
        <div className="arr_conteiner">
          {arr.map((item, index) => (
            <div className="teg_conteiner">
              <span className="teg">{item}</span>
              <button className="delete_teg" onClick={() => deleteTeg(index)}>
                x
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
