import React from "react";
import Button from "../../Button";
import style from "./../style.module.scss"

function Cidades() {
  return <div className={style.cidades}>
    <div className={style.cidadeRio} ><Button>RIO DE JANEIRO</Button></div>
    <div className={style.cidadeRioDasOstras}><Button >RIO DAS OSTRAS</Button></div>
    <div className={style.cidadeCaldasNovas} ><Button>CALDAS NOVAS</Button></div>
    <div className={style.cidadeAmazonia} ><Button>AMAZÔNIA</Button></div>
  </div>;
}

export default Cidades;
