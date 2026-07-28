import Logo from "../components/logo";
import { Logo_cids } from "../_cids";
import { Logo_styles } from "../_styles";
import { logos as logosContent } from "../content";
/** Logo Cloud section. */
export default function LogoCloudSection2({ logos = logosContent } = {}) {
  return (
    <div className="block relative py-12 px-16 bg-surface max-md:px-[1.175rem] md:max-lg:px-[2.4rem] 2xl:px-24" data-cid="n174">
      <div className="flex max-w-360 gap-y-8 gap-x-12 mx-auto max-lg:flex-wrap" data-cid="n175">
        <div className="box-content block min-w-0 self-center flex-1 [word-break:break-word] [overflow-wrap:break-word] max-lg:basis-full" data-cid="n176">
          <figure className="box-content block" data-cid="n177">
            <div className="box-content block relative before:content-[''] before:block before:w-138 before:h-0 before:pt-[310.5px] max-md:before:w-[337.5px] max-md:before:pt-[11.8625rem] md:max-lg:before:w-[43.2rem] md:max-lg:before:pt-[24.3rem] 2xl:before:w-174 2xl:before:pt-[391.5px]" data-cid="n178">
              <iframe className="box-content w-138 h-[19.4375rem] block absolute max-w-full overflow-clip [background-size:100%_100%] bg-no-repeat max-md:w-84.5 max-md:h-47.5 max-lg:[background-size:initial] max-lg:[background-repeat:initial] md:max-lg:w-[43.1875rem] md:max-lg:h-[24.3125rem] 2xl:w-174 2xl:h-98" style={{ backgroundImage: "url(\"/assets/cloned/images/9778623b0445.jpg\")" }} data-cid="n179" height="281" title="Erhardt Markisen - VendorCAD Customer Stories" width="500" />
              {" "}
            </div>
          </figure>
          {" "}
        </div>
        {" "}
        <div className="box-content block min-w-0 self-center flex-1 [word-break:break-word] [overflow-wrap:break-word] max-lg:basis-full" data-cid="n180">
          <div className="h-[13.1rem] flex flex-col flex-wrap justify-center items-start gap-8 max-md:h-[265.5px] md:max-lg:h-44 2xl:h-44" data-cid="n181">
            <div className="block relative" data-cid="n182">
              <p className="box-content block max-w-360 mb-3 text-2xl font-light leading-[2.125rem]" data-cid="n183">
                “It’s a huge advantage if you can manage design, configuration, automation, and sales in one application”
              </p>
              {" "}
              <p className="box-content block max-w-360 mt-3 font-medium" data-cid="n184">
                Thorsten Winkelmann, Area Sales Manager at ERHARDT Markisenbau GmbH
              </p>
              {" "}
            </div>
            {" "}
            <div className="h-[2.65rem] flex flex-wrap items-center gap-4" data-cid="n185">
              <div className="box-content h-[2.65rem] block" data-cid="n186">
                <a className="border-2 border-solid border-clr-2 inline-block py-2 px-4 rounded-lg content-center text-background text-center bg-color-002 cursor-pointer whitespace-nowrap hover:[filter:brightness(1.1)] focus:[filter:brightness(1.1)]" data-cid="n187" data-component="button" href="/customer-stories/erhardt-markisenbau/" rel="01905464-57dc-731a-ac3c-0a986facf3e6">
                  Read customer story
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
      {" "}
      <div className="block relative max-w-360 py-12 px-[3.6rem] bg-surface mx-auto max-md:px-[16.9px] md:max-lg:px-[34.5px] 2xl:px-[5.4rem]" data-cid="n188">
        <h2 className="box-content block max-w-360 text-xl leading-6 text-center" data-cid="n189" data-component="heading" id="h-vendorcad-is-trusted-by-manufacturers-large-and-small-around-the-world">
          Built for mid-market manufacturers who win when buyers design around their STEP.
        </h2>
        {" "}
        <div className="flex max-w-360 mt-8 flex-wrap justify-center items-center gap-12" data-cid="n190">
          {logos.map((d, i) => <Logo key={i} d={d} cids={Logo_cids[i]} styles={Logo_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="h-[2.65rem] flex max-w-360 flex-wrap justify-center items-center gap-4 mx-auto" data-cid="n206">
        <div className="box-content h-[2.65rem] block" data-cid="n207">
          <a className="border-2 border-solid border-foreground inline-block py-2 px-4 rounded-lg content-center text-center [word-break:break-word] cursor-pointer whitespace-nowrap hover:bg-clr-4 focus:bg-clr-4" data-cid="n208" data-component="button" href="/customer-stories/" rel="01905464-7663-72be-a177-81aa9abbda96">
            View all customer stories
          </a>
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
