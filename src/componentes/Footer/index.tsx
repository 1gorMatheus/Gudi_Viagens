import style from "./../../styles/componentes/Footer/styles.module.scss";
import NavFooter from './NavFooter';
import FooterList from './FooterList';
import Gudi from '../../assets/img/Gudi.svg'


function Footer() {
    const navList = {
        gudi: [
            { id: 0, img:Gudi, Slogan:"O bom da vida é viver"},
            { id: 1, label: 'Sobre nós', url: '/' },
            { id: 2, label: 'Mural de memórias', url: '/' },
            { id: 3, label: 'Eventos Gudi', url: '/' },
            { id: 4, label: 'Nosso blog', url: '/' },
        ],
        contato: [
            { id: 0, title: 'Contato' },
            { id: 1, label: 'Chat Virtual', url: '/' },
            { id: 2, label: 'SAC Online', url: '/' },
            { id: 3, label: 'Ouvidoria', url: '/' },
            { id: 4, label: 'FAQ', url: '/' },
        ],
        beneficios: [
            { id: 0, title: 'Beneficios' },
            { id: 1, label: 'Conta Digital Gudi', url: '/' },
            { id: 2, label: 'Viaje com milhas', url: '/' },
            { id: 3, label: 'C6 Átomos', url: '/' },
            { id: 4, label: 'iD Jovem', url: '/' },
        ],
        lugares: [
            { id: 0, title: 'Lugares' },
            { id: 1, label: 'O melhor lugar do Brasil', url: '/' },
            { id: 2, label: 'Cidades frequentes', url: '/' },
            { id: 3, label: 'Pontos turísticos', url: '/' },
            { id: 4, label: 'Restaurantes', url: '/' },
        ],
        curiosidades: [
            { id: 0, title: 'Curiosidades' },
            { id: 1, label: 'Cultura e tradições', url: '/' },
            { id: 2, label: 'Pratos típicos', url: '/' },
            { id: 3, label: 'Mitos brasileiros', url: '/' },
            { id: 4, label: 'Carnaval', url: '/' },
        ],
    };

    return (
        <footer>
            <section className={style.footer}>
                <FooterList className={style.footerNavList} >
                    {navList.gudi.map((item) => (
                        <NavFooter classNameLogo={style.footerLogo} key={item.id} label={item.label!}
                        Slogan={item.Slogan!} img={item.img} />
                    ))}
                </FooterList>
                 <FooterList className={style.footerNavList} >
                    {navList.contato.map((item) => (
                        <NavFooter key={item.id} label={item.label!} title={item.title!} />
                    ))}
                </FooterList>
               <FooterList className={style.footerNavList} >
                    {navList.beneficios.map((item) => (
                        <NavFooter key={item.id} label={item.label!} title={item.title!} />
                    ))}
                </FooterList>
                <FooterList className={style.footerNavList} >
                    {navList.lugares.map((item) => (
                        <NavFooter key={item.id} label={item.label!} title={item.title!} />
                    ))}
                </FooterList>
                <FooterList className={style.footerNavList} >
                    {navList.curiosidades.map((item) => (
                        <NavFooter key={item.id} label={item.label!} title={item.title!} />
                    ))}
                </FooterList>

            </section>
        </footer>
    );
}

export default Footer;

