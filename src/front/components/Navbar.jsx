import { Link } from "react-router-dom";
import crossfirelogo from "../assets/img/crossfire_logo_transparent.png"

export const Navbar = () => {

	return (
		<nav className=" nav navbar navbar-dark  bg-dark " >
			<div className="container-fluid ps-5 d-flex align-items-center">
				<Link to="/">

					<img
						src={crossfirelogo}
						alt="crossfire Logo"
						className="navbar-brand d-inline-block align-top"
						style={{ height: "100px" }}
					/>
				</Link>
				<div className=" text-warning text-center align-items-center "> 
					<h1 className="fs-3 text-justify align-middle "> Level up your game — join now! </h1>
				</div>

				 <div className="pe-4">
				<Link to="/Signup">
					<button className=" custombtn  btn btn-warning  m-3">Signup</button>
				</Link>

				<Link to="/Login">
					<button className=" custombtn btn btn-warning">Login</button>
				</Link>
				</div>
			

			</div>
		</nav>
	);
};