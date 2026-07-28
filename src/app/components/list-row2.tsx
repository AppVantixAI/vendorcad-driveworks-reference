export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, cids }: { d: ListRow2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="box-content h-[1.225rem] flex relative items-center">
      <a data-cid={cids[1]} className="box-content h-[1.225rem] block z-1 cursor-pointer hover:underline focus:underline" data-component="link" href={d.href}>
        <span data-cid={cids[2]} className="box-content inline">
          {d.label}
        </span>
      </a>
    </li>
  );
}
