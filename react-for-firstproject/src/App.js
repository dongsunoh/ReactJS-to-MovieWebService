import {useState, useEffect} from "react";

function App() {

    const [counter, setCounter] = useState(0);
    const onClick = () => {setCounter((current) => current + 1)}

    console.log("i run all the time");
    // 처음 rendering 될때 1번만 실행.
    useEffect(()=>{
        console.log("CALL THE API...");
    }, []);
    return (
          <div>
              <h1>{counter}</h1>
              <button onClick={onClick}>Click me</button>
          </div>
      );
}

export default App;
