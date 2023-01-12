import BounceLoader from "react-spinners/BounceLoader";

function Spinner() {
    return (
        <div className="spinner">
            <BounceLoader
                color="rgb(255, 183, 0)"
                size={300}
            />
        </div>
    )
}

export default Spinner;