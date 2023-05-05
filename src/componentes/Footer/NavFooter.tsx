
type Props = {
    //   list: NavList;
    title?: string;
    className?: string | undefined;
    classNameLogo?: string
    label: string;
    img?: string;
    Slogan?:string;
};

function NavFooter({ Slogan,classNameLogo, img, label, title, className }: Props) {
    return (
        <div className={className} >
            <ul>
                {title ? <h3>{title}</h3> : ""}
                {img ? <li className={classNameLogo}>
                    <a href="/">
                        <img src={img} alt="logo Gudi" />
                        <strong>{Slogan}</strong>
                    </a>
                </li> : ""
                }
                <li><a href="/">{label}</a></li>

            </ul>
        </div>
    );
}

export default NavFooter;
