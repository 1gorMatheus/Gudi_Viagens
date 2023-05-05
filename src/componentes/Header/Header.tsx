import React from "react";
import Gudi from '../../assets/img/Gudi.svg'
import style from './styles.module.scss'
import Button from "../Button";

// type Props = {};

function Header() {
    return (
        <header>
            <section className={style.headerSection}>
                <div className={style.headerLogo}>
                    <a href="/">
                        <img src={Gudi} alt="logo Gudi" />
                        <strong>O bom da vida é viver</strong>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/benefícios">Benefícios</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/agendar"><Button>A G E N D A R</Button></a></li>
                    </ul>
                </nav>
            </section>

        </header>
    )
}

export default Header;
