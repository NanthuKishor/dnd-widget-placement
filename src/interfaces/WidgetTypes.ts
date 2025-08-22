export type TWidgetTypes = "input" | "button" | "table";

export interface IWidgetProps {
  type: TWidgetTypes;
  label: string;
}

export interface IWidgetConstProps {
  id: number;
  type: TWidgetTypes;
  label: string;
}
