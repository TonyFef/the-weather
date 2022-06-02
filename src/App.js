import "./App.css";
// import { Header } from "./Components/Header";
// import { Card } from "./Components/Card";
import { Input } from "./Components/Input";
import { Main } from "./Components/Main";

function App() {
    return (
        <div className="App">
            {/* <Header /> */}
            <Input />

            <div className="cards-grid">
                <Main />
                {/* <Card /> */}
            </div>
        </div>
    );
}

export default App;
