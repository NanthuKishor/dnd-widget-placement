import { type FC } from "react";
import style from "./widget.module.css";

const TableWidget: FC = () => {
  return (
    <table className={style.widget_table}>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 11</td>
          <td>Cell 12</td>
        </tr>
        <tr>
          <td>Cell 21</td>
          <td>Cell 22</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableWidget;
