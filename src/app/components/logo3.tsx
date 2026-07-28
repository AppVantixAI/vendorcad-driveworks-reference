import type { ReactNode } from "react";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  href: string;
  label: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, cids, styles }: { d: Logo3Data; cids: string[]; styles: Logo3Styles }) {
  return (
    <a data-cid={cids[0]} className={cn("box-content h-6 block p-2 rounded-[50%] text-background underline bg-color-004 shadow-[var(--clr-9)_0px_1px_4px_0px] cursor-pointer hover:no-underline", styles.className)} data-component="link" href={d.href} target="_blank" title={d.label}>
      {" "}
      <svg data-cid={cids[1]} className={cn("box-content w-auto h-6 block min-w-6 overflow-hidden text-2xl leading-[2.125rem] focus:outline-clr-19 focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="icon" viewBox="0 0 128 128" fill="currentColor">{d.icon}</svg>
      {" "}
    </a>
  );
}
