import { useEffect, useState, type FC } from "react";
import RGL, { WidthProvider, type Layout } from "react-grid-layout";
import style from "./gridArea.module.css";
import type { IDndItem, IDndState } from "../../interfaces/GridAreaTypes";
import TextInputWidget from "../widget/TextInputWidget";
import ButtonWidget from "../widget/ButtonWidget";
import TableWidget from "../widget/TableWidget";
import CloseButton from "../widget/CloseButton";

const ReactGridLayout = WidthProvider(RGL);

const GridAreaWrap: FC = () => {
  const [dndState, setDndState] = useState<IDndState>(
    JSON.parse(localStorage.getItem("dndState") as string)
      ? JSON.parse(localStorage.getItem("dndState") as string)
      : {
          layout: [],
          items: [],
        }
  );

  useEffect(() => {
    localStorage.setItem("dndState", JSON.stringify(dndState));
  }, [dndState]);

  const onDrop = (_: Layout[], layoutItem: Layout, e: DragEvent) => {
    const type = e.dataTransfer?.getData("text/plain") as
      | "input"
      | "button"
      | "table";
    const newItem = {
      id: `${Date.now()}`,
      type,
    };
    setDndState((prev: IDndState) => ({
      items: [...prev.items, newItem],
      layout: [
        ...prev.layout,
        {
          ...layoutItem,
          i: newItem.id,
          w: type === "table" ? 3 : type === "input" ? 2 : 2,
          h: type === "table" ? 4 : 1,
          isResizable: true,
          isDraggable: true,
          resizeHandles: ["se", "sw"],
        },
      ],
    }));
  };

  const onLayoutChange = (layout: Layout[]) => {
    setDndState((prev: IDndState) => ({ ...prev, layout }));
  };

  const handleDelete = (id: string) => {
    setDndState((prev: IDndState) => ({
      items: prev.items.filter((item: IDndItem) => item.id !== id),
      layout: prev.layout.filter((l: Layout) => l.i !== id),
    }));
  };

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
