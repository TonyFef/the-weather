import { APIkey } from "./defaults";
// import sun from "./sun.svg";

export const Main = () => {
    let city = "Ottawa";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    const hello = (e) => {
        let response = fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <>
            <div className="card">
                <div className="border-primary">
                    <div className="card-body">
                        <h5 className="card-title">City</h5>
                        <h3 className="card-temperature">9</h3>
                        <img src="#" alt="#" />
                        <span className="card-title">Clear sky</span>
                    </div>
                </div>
            </div>
        </>
    );
};
