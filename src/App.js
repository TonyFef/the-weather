import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Input } from "./Components/Input";

function App() {
    return (
        <div className="App">
            {/* <Header /> */}
            <Input />
            <div className="cards-grid">
                <Main />
            </div>
        </div>
    );
}

export default App;
