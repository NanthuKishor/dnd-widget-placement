import type { FC } from "react";
import style from "./widget.module.css";
import { WIDGET_PROPS } from "../../constants/WidgetConstants";
import type { IWidgetConstProps } from "../../interfaces/WidgetTypes";
import Widget from "./Widget";

const WidgetContainer: FC = () => {
  return (
    <div className={style.widgetContainer}>
      <h1>Widgets</h1>
      {WIDGET_PROPS.map((widget: IWidgetConstProps) => (
        <Widget key={widget.id} type={widget.type} label={widget.label} />
      ))}
    </div>
  );
};

export default WidgetContainer;
