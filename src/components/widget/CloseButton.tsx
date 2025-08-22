import { type FC } from "react";
import style from "./widget.module.css";
import type { ICloseButtonProps } from "../../interfaces/GridAreaTypes";

const CloseButton: FC<ICloseButtonProps> = ({ onClickFunction, id }) => {
  return (
    <button className={style.close_btn} onClick={() => onClickFunction(id)}>
      x
    </button>
  );
};

export default CloseButton;
