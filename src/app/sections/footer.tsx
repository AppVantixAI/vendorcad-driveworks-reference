import Logo2 from "../components/logo2";
import { Logo2_cids } from "../_cids";
import { logos2 as logosContent } from "../content";
/** Site footer. */
export default function Footer({ logos = logosContent } = {}) {
  return (
    <div className="block relative bg-surface" data-cid="n394">
      <div className="flex max-w-360 py-12 px-16 justify-center items-center gap-4 mx-auto max-md:px-[1.175rem] md:max-lg:px-[2.4rem] 2xl:px-24" data-cid="n395">
        {logos.map((d, i) => <Logo2 key={i} d={d} cids={Logo2_cids[i]} />)}
        {" "}
      </div>
      {" "}
    </div>
  );
}
