import Switch from 'react-switch'; // probably you don't need to use react-switch, because you can implement it ин yourself

function BackgroundHandleChange({background, setBackground}) {

    const handleChange = (background) => {
        setBackground(background);
    };

    return (
        <div className="example"> {/* example is not a good class name, because it doesn't have any useful information */}
            <label htmlFor="material-switch">
                <Switch
                    checked={background}
                    onChange={handleChange}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch" // do you need this class?
                    id="material-switch"
                />
            </label>
        </div>
    );
}

export default BackgroundHandleChange