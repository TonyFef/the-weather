export const Input = () => {
    return (
        <div className="input-sum">
            <div className="input-sum__text">Show the weather in ...</div>
            <div className="input-group">
                <input
                    type="text"
                    className="input-group__field"
                    placeholder="Search for the city"
                    aria-label="Search for the city"
                    // aria-describedby="button-addon2"
                />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                    Subimt
                </button>
            </div>
        </div>
    );
};
