import React from "react";
import Imagens from "./Imagens";
import Descricao from "./Descricao";

type Props = {
    className: string;
    img: string;
    Primeiro: string;
    title: string  ;
    subTitle: string;
    text: string;
    buttonText: string
};

function Catalago({ className, Primeiro, img, title, subTitle, text, buttonText }: Props) {
    return (
        <section className={className}>
            {Primeiro === 'img' ? (
                <>
                    <Imagens img={img} />
                    <Descricao title={title} subTitle={subTitle} text={text} ClassNameText='backgroundColorBlue' buttonText = {buttonText}  />
                </>
            ) : (
                <>
                    <Descricao title={title} subTitle={subTitle} text={text} ClassNameText='backgroundColorWhite'  buttonText = {buttonText}  />
                    <Imagens img={img} />
                </>
            )}
        </section>
    );
}

export default Catalago;
