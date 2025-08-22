import { useEffect, useState } from "react";
import type { IDndItem, IDndState } from "../interfaces/GridAreaTypes";
import type { Layout } from "react-grid-layout";

const useDnd = () => {
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

  return {
    onDrop,
    onLayoutChange,
    handleDelete,
    dndState,
  };
};

export default useDnd;
