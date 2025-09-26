import Crossfirebg from "../assets/img/crossfire_galaxy_recreated.svg";
import X_mark from "../assets/img/x_mark.svg"
import O_mark from "../assets/img/o_mark.svg"
import { useEffect, useRef, useState } from "react";
import { Gamepiece } from "../components/Gamepiece";

const backgrounds = {
    x: { backgroundImage: `url(${X_mark})` },
    o: { backgroundImage: `url(${O_mark})` },

}
const lines = [
            //Rows 
            [0, 1 , 2], 
            [3, 4, 5],
            [6 , 7, 8], 
            //diagonals 
            [0 , 4, 8], 
            [ 6 , 4 ,2], 

            //Collumns 
            [0, 3, 6 ], 
            [1, 4 , 7], 
            [ 2, 5 , 8], 
        ];
         
 
export const TicTacToeGame = () => {

    const [Xwins, setXwins] = useState(0);
    const [Owins, setOwins] = useState(0);
    const [tie, settie] = useState(0);

    const isDone = useRef(false); 

    const [activeplayer , setActiveplayer] = useState("x")

    const [Gamestate, setGamestate] = useState(
        [null , null , null,
            null, null , null ,
            null , null , null
        ]);


     const dehydrate = () => {

        sessionStorage.setItem("Gamestate" , JSON.stringify(Gamestate));
        sessionStorage.setItem("Xwins" , Xwins);
        sessionStorage.setItem("Owins" , Owins);
        sessionStorage.setItem("Ties" , tie);
      };

    const handelClick = (idx) => {

          if (isDone.current) {
            setGamestate(new Array(9).fill(null)); 
            isDone.current = false;                 
            dehydrate();
            return;
        }

        if(Gamestate[idx] !== null ){
            return;
        }

    



        // console.log("ding! ");
        // console.log (activeplayer , idx )

        setGamestate([
            ...Gamestate.slice(0, idx),
            activeplayer,
            ...Gamestate.slice(idx + 1)
        ]);

        setActiveplayer(activeplayer === "x" ? "o" : "x");
    }

    useEffect (() => {
        setGamestate(JSON.parse(
            sessionStorage.getItem("Gamestate") 
        ) || new Array(9).fill(null))  ;

        setXwins(JSON.parse(
            sessionStorage.getItem("Xwins")
        ) || 0 ) ;

        setOwins(JSON.parse(
            sessionStorage.getItem("Owins")
        ) || 0 ) ;

        settie(JSON.parse(
            sessionStorage.getItem("Ties")
        ) || 0 ) ;

    }, [])


      useEffect(() => {

        for (let line of lines) {
            if (line.every( idx => Gamestate[idx] === "x") ){
                isDone.current = true;
                setXwins(prev => prev + 1 );
                dehydrate();
            } else if (line.every(idx => Gamestate[idx] === "o" )){
                isDone.current = true;
                setOwins(prev => prev + 1  ) ; 
                dehydrate();
            }
        }
        
         if (Gamestate.every(cell => cell !== null )){
            isDone.current=true;
            settie(prev => prev + 1);
            dehydrate();
    
         }

      } , [Gamestate]); 
 


    return (
        <div className="text-center m-0 p-5" style={{
            backgroundImage: `url(${Crossfirebg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh"
        }}>

            <>

            </>

            <div className="container d-flex flex-column align-items-center  ">
                <h1 className="p-4 text-warning "> X wins :<code>{Xwins} </code >  |  O Wins :<code> {Owins}</code>  |  Ties :<code>  {tie}</code> </h1>

                <div className="game-board mt-3">
                    {Gamestate.map((player, idx) => <Gamepiece
                        key={idx}
                        player={player}
                        style={backgrounds[player]}
                        onClick={() => handelClick(idx)}
                    />)}


                </div>
            </div>


        </div>
    )

}