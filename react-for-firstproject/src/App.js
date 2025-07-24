import {useState} from "react";

function App() {

    const [todo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => {
        setTodo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault(); // 웹 브라우저의 기본동작을 막는 함수
        if(todo === "") {
            return;
        }
        setToDos((currentArray) => [todo, ...currentArray]);
        setTodo("");
    };

    return (
          <div>
              <h1>My To Dos ({toDos.length})</h1>
              <form onSubmit={onSubmit}>
                  <input
                      value={todo}
                      type="text"
                      placeholder="write your to do..."
                      onChange={onChange}
                  />
                  <button>Add To Do</button>
              </form>
              <hr/>
              <ul>
                  {toDos.map((item, index)=>(
                      <li key={index}>{item}</li>
                  ))}
              </ul>
          </div>
      );
}

export default App;
