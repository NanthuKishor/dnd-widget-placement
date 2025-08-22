import type { Layout } from "react-grid-layout";
import type { TWidgetTypes } from "./WidgetTypes";

export interface IDndItem {
  id: string;
  type: TWidgetTypes;
}
export interface IDndState {
  layout: Layout[];
  items: IDndItem[];
}

export interface ICloseButtonProps {
  onClickFunction: (id: string) => void;
  id: string;
}
