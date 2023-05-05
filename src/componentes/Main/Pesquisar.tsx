import React from "react";
import Input from "../Input/index";
import Button from "../Button";

type Props = {
  className:string;
};

const Pesquisar = ({className}: Props) => {
  return (
    <section className={className}>
      <h1  >Para qual estado você deseja ir?</h1>
      <Input type="text" placeholder="Pequisar" />
      <Button>B U S C A R</Button>
    </section>
  );
};

export default Pesquisar;
