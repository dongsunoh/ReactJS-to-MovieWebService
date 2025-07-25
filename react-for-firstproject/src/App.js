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
                <Route path={`${process.env.PUBLIC_URL}/`}  Component={Home} />
                <Route path={`${process.env.PUBLIC_URL}/movie/:id`} Component={Detail} />
            </Routes>
        </Router>
    );
}

export default App;