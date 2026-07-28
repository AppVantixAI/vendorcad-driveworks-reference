import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("flex", styles.className)}>
      <a data-cid={cids[1]} className="h-[4.1875rem] flex px-2 items-center cursor-pointer" data-component="link" href={d.href}>
        {" "}
        <span data-cid={cids[2]} className={cn("border-b border-solid border-b-clr-2 block", styles.className2)}>
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
