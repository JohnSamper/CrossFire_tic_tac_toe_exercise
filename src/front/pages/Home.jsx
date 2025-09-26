import React from "react";
import Crossfirebg from "../assets/img/crossfire_galaxy_recreated.svg";
import { useNavigate } from "react-router-dom";


export const Home = () => {

 const navigate = useNavigate();

const Navplay =  () => {
    navigate("/TicTacToeGame"); 
  };

  navigate("/TicTacToeGame")

  return (
    <div
      className="text-center m-0 p-3"
      style={{
        backgroundImage: `url(${Crossfirebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="text-center mt-0 pt-5 ">
        <h1 className="crossfire-title pt-5">CROSSFIRE</h1>
        <p className="tagline">TIC-TAC-TOE GAME</p>

        <div className="home-page-graphics my-4">
			<div className="tictactoe">
				<div className="cell x" ></div>
				<div className="cell o" ></div> 
				<div className="cell o"></div>
				<div className="cell x"></div>
				<div className="cell x"></div>
				<div className="cell x"></div>
				<div className="cell o "></div>
				<div className="cell"></div>
				<div className="cell o"></div>
				{/* Winning line */}
				<div className="winning-line"></div>
			</div>
		</div>

        <button className="custombtn btn btn-warning btn-lg"  onClick={Navplay} >
          Play Now!
        </button>
      </div>
    </div>
  );
};