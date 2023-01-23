import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { setGameState} = useContext(GameStateContext);
  return (
    <div className="Menu">
       <button onClick={() => {setGameState("playing")}}>Start Quiz</button>
    </div>
  );
}
export default Menu;