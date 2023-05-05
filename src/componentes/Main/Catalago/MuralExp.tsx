import React from "react";

import Imagens from "./Imagens";

import style from "./../style.module.scss"

import img1 from "./../../../assets/img/Retângulo 197@2x.png";
import img2 from "./../../../assets/img/Retângulo 198@2x.png";
import img3 from "./../../../assets/img/Retângulo 199@2x.png";
import img4 from "./../../../assets/img/Retângulo 200@2x.png";
import img5 from "./../../../assets/img/Retângulo 201@2x.png";
import img6 from "./../../../assets/img/Retângulo 202@2x.png";

import localidade from "./../../../assets/img/localidade.svg"
import montanha from "./../../../assets/img/montanha.svg"
import coco from "./../../../assets/img/coco.svg"
import resteurante from "./../../../assets/img/restaurante.svg"

function MuralExp() {
    const imagens = [img1, img2, img3, img4, img5, img6];
    return (
        <section className={style.muralDeExp} >
            <div className={style.muralTitle} >
            <p>use a hashtag #brasilisverigudi</p>
            <h1>Nosso mural de Experiências</h1>
            </div>
            <div className={style.imagens} >
                {imagens.map((item, index) => (
                    <Imagens key={index} img={item} />
                ))}
            </div>
            <section className={style.experiencia} >
                <div className={style.localidade} >
                    <Imagens img={localidade} />
                    <p>O melhor do Brasil</p>
                </div>
                <div className={style.montanha} >
                    <Imagens img={montanha} />
                    <p>Cidades mais frequentadas</p>
                </div>
                <div className={style.coco} >
                    <Imagens img={coco} />
                    <p>Pontos turísticos</p>
                </div>
                <div className={style.restaurante} >
                    <Imagens img={resteurante} />
                    <p>Restaurantes</p>
                </div>
            </section>
        </section>
    );
}

export default MuralExp;
