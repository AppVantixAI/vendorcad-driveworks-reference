import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, cids, styles }: { d: ListRow4Data; cids: string[]; styles: ListRow4Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("box-content flex relative items-center", styles.className)}>
      <a data-cid={cids[1]} className={cn("box-content block z-1 underline cursor-pointer", styles.className2)} data-component="link" href={d.href}>
        <span data-cid={cids[2]} className="box-content inline [overflow-wrap:break-word]">
          {d.label}
        </span>
      </a>
    </li>
  );
}
