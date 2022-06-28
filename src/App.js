import "./style.css";
import BtnCiseau from "./btn_ciseau.js";
import BtnFeuille from "./btn_feuille.js";
import BtnPierre from "./btn_pierre.js";
import ScorePanel from "./score.js";
import BtnModal from "./btnModal.js";
import { useState } from "react";
function nbrRand() {
  let x = Math.random() * 3
  return x;
}
function App() {
  let scoretotal = 0
  function mafonction(_x) {
    Saffichage({
      base: false,
      resultat: true,
      affichageneutre: "container_btn_choix",
      choixUtilisateur: _x
    })
  }
  let [affScore, SetAffscore] = useState({
    score: scoretotal
  })
  let [affichage, Saffichage] = useState({
    base: true,
    resultat: false,
    affichageneutre: "container_btn",
    choixUtilisateur: 0
  })
  let demarrageCiseau;
  let demarragePierre;
  let demarrageFeuille;
  let demarrageFeuilleChoix;
  let choixRand;
  if (affichage.base == true) {
    demarrageCiseau = <BtnCiseau />;
    demarrageFeuille = <BtnFeuille />;
    demarragePierre = <BtnPierre />;
  }
  else if (affichage.resultat == true) {
    if (Math.random()*3 <= 1) {
      choixRand = <BtnCiseau />
      if (affichage.choixUtilisateur == "pierre") {
        SetAffscore({ score: scoretotal })
      }
      else if (affichage.choixUtilisateur == "feuille") {
        SetAffscore({ score: scoretotal })
      }
    }
    else if (Math.random()*3 <= 2) {
      choixRand = <BtnFeuille />
    }
    else if (Math.random()*3 <= 3) {
      choixRand = <BtnPierre />
    }
    if (affichage.choixUtilisateur == "ciseau") {
      demarrageFeuilleChoix = <BtnCiseau />
    }
    else if (affichage.choixUtilisateur == "feuille") {
      demarrageFeuilleChoix = <BtnFeuille />

    }
    else if (affichage.choixUtilisateur == "pierre") {
      demarrageFeuilleChoix = <BtnPierre />

    }
  }
  return (
    <div className="container_all">
      <div className="container_scoreboard">
        <ScorePanel affichage={affScore.score} />
      </div>
      <div className={affichage.affichageneutre}>
        <div onClick={() => mafonction("ciseau")}>{demarrageCiseau}</div>
        <div onClick={() => mafonction("feuille")}>{demarrageFeuille}</div>
        <div onClick={() => mafonction("pierre")}>{demarragePierre}</div>
        <div>{demarrageFeuilleChoix}</div>
        <div>{choixRand}</div>
      </div>
      <div className="container_btnModal">
        <BtnModal />
      </div>
    </div>
  );
}
export default App;