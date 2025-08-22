import { type FC } from "react";
import style from "./widget.module.css";

const TextInputWidget: FC = () => {
  return (
    <input type="text" placeholder="Name" className={style.widget_input} />
  );
};

export default TextInputWidget;
