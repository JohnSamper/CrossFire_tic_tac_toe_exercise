import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Crossfirebg from "../assets/img/crossfire_galaxy_recreated.svg";


export const Login = () => {

    return(
        <div className="text-center m-0" style={{
             backgroundImage: `url(${Crossfirebg})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             width: "100%",
             height: "100vh" }}>

         <h1 className="display-4"> Hey this is the login  page to the Tic-tac-toe game </h1>
                    
                
        </div>
    )

}