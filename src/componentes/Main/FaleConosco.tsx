import React from "react";
import Input from "../Input";
import style from "./style.module.scss"
import Button from "../Button";


function FaleConosco() {
    return (
        <section className={style.faleConosco} >
            <form className={style.formFaleConosco} >
                <h1>Fale Conosco</h1>
                <Input type={"text"} placeholder={"Diga seu melhor email"} ></Input>
                <Input type={"text"} placeholder={"Assunto"} textareaPlaceholder={"Escreva sua mensagem"} rows={5} cols={7} ></Input>
                <Button>Enviar</Button>
            </form>
            
        </section>
    );
}

export default FaleConosco;
