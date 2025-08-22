import { type FC } from "react";
import type { IWidgetProps } from "../../interfaces/WidgetTypes";
import style from "./widget.module.css";

const Widget: FC<IWidgetProps> = ({ type, label }) => {
  return (
    <div
      className={style.widget}
      draggable={true}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
        e.dataTransfer.setData("text/plain", type)
      }
    >
      {label}
    </div>
  );
};

export default Widget;
