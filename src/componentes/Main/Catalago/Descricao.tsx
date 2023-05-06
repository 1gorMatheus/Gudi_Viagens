import React from 'react'
import style from "./../../../styles/componentes/Main/descricaoStyle.module.scss";
import Button from '../../Button';

type Props = {
    title: string;
    subTitle: string;
    text: string;
    ClassNameText: string;
    buttonText:string;
};

function Descricao({ ClassNameText, title, subTitle, text, buttonText }: Props) {


const destaque = ['Planos Multi', 'Caldas Novas, Goiás']
const palavras = text.split(' ');
// console.log(palavras);
const palavrasDestacadas = palavras.map((item )=>{
  for(let i = 0 ; i < destaque.length; i++) {
    let destaqueTexto = destaque[i].split(' ');
    for(let j = 0 ; j < destaqueTexto.length; j++){
      if(item === destaqueTexto[j]){
        return <strong> {item}</strong> ;
      }
    }
  }
  return item;
})

// console.log(palavrasDestacadas);
const textoCompleto =palavrasDestacadas.map((item, index) => (
    <React.Fragment key={index}> {item} </React.Fragment>
  ));
// console.log(textoCompleto);



    return (
        <>
            <div className={`${style[ClassNameText]}`} >
                <div className={style.title} >
                    <div className={style.hrLine}></div>
                    <strong>{title}</strong>
                </div>
                <h1>{subTitle}</h1>
                <p>{textoCompleto}</p>
                <Button>{buttonText}</Button>
            </div>
        </>
    );
}

export default Descricao;
