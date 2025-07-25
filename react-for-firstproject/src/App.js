import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/movie/" Component={Detail} />
            </Routes>
        </Router>
    );
}

export default App;