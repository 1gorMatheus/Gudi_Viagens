import Pesquisar from "./Pesquisar";
import style from "./style.module.scss";
import Catalago from "./Catalago";

import Imagem1 from "./../../assets/img/Caminho 18@2x.png"
import Imagem2 from "./../../assets/img/Caminho 38@2x.png"
import Imagem3 from "./../../assets/img/Caminho 39@2x.png"
import Cidades from "./Catalago/Cidades";
import MuralExp from "./Catalago/MuralExp";
import FaleConosco from "./FaleConosco";



function Main() {
  // console.log(style.mainCatalago)
  return (
    <main>
      <Pesquisar className={style.mainPesquisar} />
      <Catalago className={style.mainCatalago}
        Primeiro="img"
        title="Viagens Nacionais"
        subTitle="O clima perfeito, no lugar perfeito"
        text="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."
        img={Imagem1}
        buttonText='A G E N D A R'
      />
      
      <Catalago className={style.mainCatalago}
        Primeiro="descricao"
        title="Viagens Nacionais"
        subTitle="Curta uma nova vibe entre amigos"
        text= "Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi"
        img={Imagem2}
        buttonText = 'A G E N D A R' />

      <Catalago className={style.mainCatalago}
        Primeiro="img"
        title="Viagens Nacionais"
        subTitle="Algumas experiências são inexplicáveis"
        text= "Conheça as fontes termais de Caldas Novas, Goiás . Águas quentes, num clima sereno, relaxante e natural."
        img={Imagem3}
        buttonText = 'A G E N D A R' />

        <Cidades/>

        <MuralExp/>

        <FaleConosco/>
    </main>
  );
}

export default Main;
