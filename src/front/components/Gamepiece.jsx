const Gamepiece = ({player , style , onClick }) => {
    return<div className={`game-piece ${player }` }
     style={style} 
     onClick={onClick}
     
     
     ></div>
}

export {Gamepiece};