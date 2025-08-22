import { type FC } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import style from "./gridArea.module.css";
import type { IDndItem } from "../../interfaces/GridAreaTypes";
import TextInputWidget from "../widget/TextInputWidget";
import ButtonWidget from "../widget/ButtonWidget";
import TableWidget from "../widget/TableWidget";
import CloseButton from "../widget/CloseButton";
import useDnd from "../../hooks/useDnd";

const ReactGridLayout = WidthProvider(RGL);

const GridAreaWrap: FC = () => {
  const { dndState, handleDelete, onDrop, onLayoutChange } = useDnd();

  const renderElements = () => {
    return dndState.items.map((item: IDndItem) => (
      <div key={item.id} className={style.render_elements_wrap}>
        <CloseButton id={item.id} onClickFunction={handleDelete} />
        {item.type === "input" ? (
          <TextInputWidget />
        ) : item.type === "button" ? (
          <ButtonWidget />
        ) : (
          <TableWidget />
        )}
      </div>
    ));
  };

  return (
    <div className={style.gridArea_wrap}>
      <ReactGridLayout
        layout={dndState.layout}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable={true}
        isResizable={true}
        isDraggable={true}
        style={{
          minHeight: "80vh",
          height: "100%",
          overflowY: "auto",
          background: "#f0f0f0",
          border: "2px dotted black",
        }}
        rowHeight={50}
      >
        {renderElements()}
      </ReactGridLayout>
    </div>
  );
};

export default GridAreaWrap;
