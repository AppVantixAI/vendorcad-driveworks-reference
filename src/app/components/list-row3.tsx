import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, cids, styles }: { d: ListRow3Data; cids: string[]; styles: ListRow3Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("box-content flex relative items-center", styles.className)}>
      <a data-cid={cids[1]} className={cn("box-content block z-1 cursor-pointer hover:underline focus:underline", styles.className2)} data-component="link" href={d.href}>
        <span data-cid={cids[2]} className="box-content inline">
          {d.label}
        </span>
      </a>
    </li>
  );
}
