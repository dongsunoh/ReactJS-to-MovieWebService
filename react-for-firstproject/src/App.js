import {useState, useEffect} from "react";

function App() {

    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => {setCounter((current) => current + 1)}
    const onChange = (event) => {
        setKeyword(event.target.value);
    };

    // 처음 rendering 될때 1번만 실행.
    useEffect(()=>{
        console.log("i run only one");
    }, []);

    // 처음 rendering 될때 keyword state가 변화할 때 코드를 실행.
    useEffect(() => {
        console.log("i run when 'keyword' changes.");
    }, [keyword]);

    // 처음 rendering 될때 counter state가 변화할 때 코드를 실행.
    useEffect(() => {
        console.log("i run when 'counter' changes.");
    }, [counter]);

    useEffect(() => {
        console.log("i run when 'counter' and 'keyword' changes.");
    }, [counter, keyword])

    return (
          <div>
              <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
              <h1>{counter}</h1>
              <button onClick={onClick}>Click me</button>
          </div>
      );
}

export default App;
