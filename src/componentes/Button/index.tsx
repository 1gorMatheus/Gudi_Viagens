import style from './../../styles/componentes/Button/style.module.scss';

type Props = {
    children:string ;
};

const Button = ({children}: Props) => {
  return <button className={style.botao} >{children}</button>
};

export default Button;
