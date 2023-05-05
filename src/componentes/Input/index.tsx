import React from "react";
import style from'./style.module.scss';
type Props = {
    type:string;
    rows?:number;
    cols?:number;
    placeholder:string;
    textareaPlaceholder?:string;
};

const Input = ({placeholder, textareaPlaceholder, type, rows, cols}: Props) => {
  return <div className={style.containerInput}>
  <input type={type} placeholder={placeholder} ></input>
  {rows && cols ? <textarea placeholder={textareaPlaceholder} rows={rows} cols={cols} />: ''}
  </div>;
};

export default Input;
