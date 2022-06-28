import "./style.css";
function ScorePanel({affichage}){
    return(
        <div className="score-panel">
            <div>
                <p>ROCK<br/>
                PAPER<br/>
                SCISSORS</p>
            </div>
            <div className="scoreCalculator">
                <h3>SCORE:</h3>
                <span>{affichage}</span>
            </div>
        </div>
    );
}
export default ScorePanel;