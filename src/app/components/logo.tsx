import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <figure data-cid={cids[0]} className={cn("box-content h-12 block", styles.className)}>
      <a data-cid={cids[1]} className="box-content h-12 inline-block text-accent underline cursor-pointer hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] hover:no-underline focus:border-clr-10 focus:text-clr-10 focus:outline-clr-10 focus:[text-decoration-color:var(--clr-10)]" data-component="link" href={d.href}>
        <img data-cid={cids[2]} className={cn("h-12 inline max-w-full overflow-clip align-bottom", styles.className2)} data-component="image" alt="" height="96" src={d.imgSrc} width={d.width} />
      </a>
    </figure>
  );
}
