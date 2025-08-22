import { type FC } from "react";
import style from "./layout.module.css";
import WidgetContainer from "../widget/WidgetContainer";
import GridAreaWrap from "../gridArea/GridAreaWrap";
const Layout: FC = () => {
  return (
    <div className={style.parent_wrap}>
      <div className={style.left_wrap}>
        <WidgetContainer />
      </div>
      <div className={style.right_wrap}>
        <GridAreaWrap />
      </div>
    </div>
  );
};

export default Layout;
