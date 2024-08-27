import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setSubmittedValue(inputValue);
    if (isEditing) {
      setSubmittedValue(inputValue);
      setIsEditing(false);
    } else {
      console.log(inputValue);
      setSubmittedValue(inputValue);
    }
    setInputValue("");
  };
  let disabled = true;
  const Edit = () => {
    let disabled = false;
    setInputValue(submittedValue);
    setIsEditing(true);
  };
  const deleteList = () => {
    setSubmittedValue("");
    setInputValue("");
    setIsEditing(false);
  };
  return (
    <div className="main">
      <div className="inner-main">

      <TodoApp/>
      </div>
      <div className="credit">Developed by <a href="https://www.linkedin.com/in/muhammad-anas-khan786" target="_blank">Anas Khan</a></div>
    </div>
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   <ol>
    //     <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={inputValue}
    //       onChange={handleInputChange}
    //       placeholder="Enter something..."
    //       />
    //     <button type="submit">Submit</button>
    //   </form>
    //       </ol>
    //   {submittedValue && (
    //     <div>
    //       <input type="text"
    //        value={submittedValue}
           
    //       onChange={handleInputChange}
    //        />
    //       <button onClick={Edit}>Edit</button>
    //       <button onClick={deleteList}>Delete</button>
    //     </div>
    //   )}
    // </div>
    // <div className="p-20 bg-black flex justify-center items-center flex-col">
    //   <div>
    //     <div>
    //       <p>ToDo App</p>
    //     </div>
    //     <div>
    //       <div>
    //         <input id="input" value={inputValue} onChange={handleInputChange} type="text" className="text-3xl" />
    //         <button onClick={()=> setCount(count+inputValue)}>Add</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
