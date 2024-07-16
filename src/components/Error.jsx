import { useRouteError } from "react-router-dom";

const Error = () =>{
    const error = useRouteError();
    return (
        <div>
            <h1>Opps!!!</h1>
            <h3>Something went Wrong</h3>
            <p>{error.status}:{error.statusText}</p>
        </div>
    )
};

export default Error;
