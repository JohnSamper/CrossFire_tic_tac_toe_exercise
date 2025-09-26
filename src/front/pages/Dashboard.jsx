import Crossfirebg from "../assets/img/crossfire_galaxy_recreated.svg";


export const Dashboard = () => {

    return(
        <div className="text-center m-0 " style={{
             backgroundImage: `url(${Crossfirebg})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             width: "100%",
             height: "100vh" }}>

         <h1 className="display-4"> Hey dashboards  dashboarding 
            the Game will be set up from here : ) </h1>
            
                    
                
        </div>
    )

}