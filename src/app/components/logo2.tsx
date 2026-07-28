export type Logo2Data = {
  href: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, cids }: { d: Logo2Data; cids: string[] }) {
  return (
    <figure data-cid={cids[0]} className="box-content w-18 h-18 block">
      <a data-cid={cids[1]} className="box-content h-18 inline-block text-accent underline cursor-pointer hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] hover:no-underline focus:border-clr-10 focus:text-clr-10 focus:outline-clr-10 focus:[text-decoration-color:var(--clr-10)]" data-component="link" href={d.href}>
        <img data-cid={cids[2]} className="w-18 h-18 inline max-w-full overflow-clip aspect-[auto_144/144] align-bottom" data-component="image" alt="" height="144" src={d.imgSrc} width="144" />
      </a>
    </figure>
  );
}
