import { type FC } from "react";
import style from "./widget.module.css";

const ButtonWidget: FC = () => {
  return <button className={style.widget_button}>Button</button>;
};

export default ButtonWidget;
