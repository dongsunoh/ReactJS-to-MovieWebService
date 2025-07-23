import {useState, useEffect} from "react";

function Hello() {

    useEffect(() => {
       console.log("hi :)");
        // 아래가 cleanup function. 컴포넌트가 destroy 될 때 실행 됨.
       return () => {console.log("bye :(")};
    }, []);

    return (
        <h1>Hello</h1>
    );
}

function App() {

    const [showing, setShowing] = useState(false);

    const onClick = () => {
        setShowing(prevShowing => !prevShowing);
    };

    return (
          <div>
              {showing ? <Hello /> : null}
              <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
          </div>
      );
}

export default App;
