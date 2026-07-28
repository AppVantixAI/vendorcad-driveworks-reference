import type { ProductCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ProductCardData = {
  href: string;
  imgSrc: string;
  srcSet: string;
  id: string;
  title: string;
  description: string;
  href2: string;
  rel: string;
  href3: string;
  rel2: string;
  label: string;
};
/** A product card. */
export default function ProductCard({ d, cids, styles }: { d: ProductCardData; cids: string[]; styles: ProductCardStyles }) {
  return (
    <div data-cid={cids[0]} className="box-content block min-w-0 flex-1 [word-break:break-word] [overflow-wrap:break-word] max-lg:basis-full">
      <div data-cid={cids[1]} className="h-full border border-solid border-surface-2 flex rounded-3xl flex-col justify-between items-stretch bg-background shadow-[var(--clr-4)_0px_4px_6px_-1px,var(--clr-4)_0px_2px_4px_-2px]">
        <div data-cid={cids[2]} className="flex flex-col items-stretch">
          <div data-cid={cids[3]} className="block relative pt-2 px-2">
            <figure data-cid={cids[4]} className="box-content w-[355.3px] h-[199.9px] table clear-both max-w-360 text-center max-md:w-[319.5px] max-md:h-[179.7px] md:max-lg:w-[42.075rem] md:max-lg:h-[378.7px] 2xl:w-[451.3px] 2xl:h-[253.9px]">
              <a data-cid={cids[5]} className="box-content h-full inline-block text-accent underline cursor-pointer hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] hover:no-underline focus:border-clr-10 focus:text-clr-10 focus:outline-clr-10 focus:[text-decoration-color:var(--clr-10)]" data-component="link" href={d.href}>
                <img data-cid={cids[6]} className={cn("w-full h-50 inline max-w-full rounded-tl-3xl rounded-tr-3xl overflow-clip aspect-video align-bottom max-md:h-45 md:max-lg:h-[23.6875rem] 2xl:h-63.5", styles.className)} data-component="image" alt="" height="540" sizes="auto, (max-width: 960px) 100vw, 960px" src={d.imgSrc} srcSet={d.srcSet} width="960" />
              </a>
            </figure>
            {" "}
          </div>
          {" "}
          <div data-cid={cids[7]} className="block relative p-4">
            <h3 data-cid={cids[8]} className="box-content block max-w-360 text-2xl leading-[1.8125rem]" data-component="heading" id={d.id}>
              {d.title}
            </h3>
            {" "}
            <p data-cid={cids[9]} className="box-content block max-w-360 mt-3 font-light">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div data-cid={cids[10]} className={cn("flex p-4 flex-wrap justify-between items-end", styles.className2)}>
          <div data-cid={cids[11]} className={cn("flex flex-wrap items-end gap-4", styles.className3)}>
            <div data-cid={cids[12]} className="box-content block">
              <a data-cid={cids[13]} className="border-2 border-solid border-clr-2 inline-block py-2 px-4 rounded-lg content-center text-background text-center bg-color-002 cursor-pointer whitespace-nowrap hover:[filter:brightness(1.1)] focus:[filter:brightness(1.1)]" data-component="button" href={d.href2} rel={d.rel}>
                Learn more
              </a>
            </div>
            {" "}
            <div data-cid={cids[14]} className={cn("box-content block", styles.className4)}>
              <a data-cid={cids[15]} className="border-2 border-solid border-primary inline-block py-2 px-4 rounded-lg content-center text-background text-center bg-primary cursor-pointer whitespace-nowrap hover:[filter:brightness(1.1)] focus:[filter:brightness(1.1)]" data-component="button" href={d.href3} rel={d.rel2}>
                {d.label}
              </a>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
