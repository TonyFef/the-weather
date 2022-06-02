import "./App.css";
import { Input } from "./Components/Input";
import { Main } from "./Components/Main";

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
