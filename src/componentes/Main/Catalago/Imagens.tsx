import React from "react";

type Props = {
    img: string ;
};

function Imagens({img}: Props) {
  return <img src={img} alt="" />;
}

export default Imagens;
