import React from "react";

type Props = {
    children?: React.ReactNode;
    className?: string;
    className2?: string;
    img?: string;
    title?: string;
};

const FooterList = ({ children, className }: Props) => {
    return (
    <div className={className}>
          {children}
    </div >);
};

export default FooterList;
