import { ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <div className="block relative py-12 px-16 max-md:px-[1.175rem] md:max-lg:px-[2.4rem] 2xl:px-24" data-cid="n340" id="newsletter">
      <div className="block relative max-w-360 pb-4 mx-auto" data-cid="n341">
        <h2 className="box-content block max-w-360 text-[2rem] font-medium leading-[2.375rem] text-center" data-cid="n342" data-component="heading" id="h-subscribe-to-the-vendorcad-newsletter">
          {content.title}
        </h2>
        {" "}
        <p className="box-content block max-w-360 mt-3 text-xl font-light leading-7 text-center" data-cid="n343">
          Get the latest VendorCAD news, tips, and technical updates.
        </p>
        {" "}
      </div>
      {" "}
      <div className="box-content h-60 block relative max-w-360 mt-4 overflow-hidden text-center max-md:h-132.5 md:max-lg:h-120.5 2xl:mx-36" data-cid="n344">
        <div className="h-full min-h-60 block" data-cid="n345">
          <div className="h-full block max-w-240 mx-auto" data-cid="n346">
            <dw-form class="h-60 min-h-full grid relative grid-rows-[240px] overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:h-132.5 max-md:grid-rows-[530px] md:max-lg:h-120.5 md:max-lg:grid-rows-[482px]" data-cid="n347">
              <div className="box-content grid col-start-1 row-start-1 grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[4] max-md:aspect-[0.637] md:max-lg:aspect-[1.434]" data-cid="n348">
                <dw-label class="w-88 h-6 grid relative ml-30 items-start grid-rows-[24px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n349" name="FirstNameCaption">
                  <div className="block text-color-001 [font-family:roboto,_sans-serif] leading-[1.1875rem] text-left whitespace-pre-wrap [overflow-wrap:anywhere]" data-cid="n350">
                    First name
                  </div>
                  {" "}
                </dw-label>
                <dw-text-box class="w-88 h-12 grid relative mt-7 ml-30 grid-rows-[48px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n351" name="FirstName">
                  <label className="flex items-start cursor-default" data-cid="n352">
                    {" "}
                    <span className="w-0 h-0 block overflow-hidden text-color-003 [font-family:'microsoft_sans_serif',_sans-serif] text-[0.6875rem] leading-[0.8125rem] text-left whitespace-pre-wrap [overflow-wrap:break-word]" data-cid="n353">
                      <span className="block pr-1" data-cid="n354" />
                    </span>
                    {" "}
                    <input className="w-full h-11 min-h-4 border border-solid border-border block p-3 rounded-lg flex-1 overflow-clip text-color-001 [font-family:'roboto_light',_sans-serif] leading-4 text-left bg-background cursor-text" data-cid="n355" data-component="input" type="text" />
                    {" "}
                  </label>
                  {" "}
                </dw-text-box>
                <dw-label class="w-88 h-6 grid relative ml-122 items-start grid-rows-[24px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:mt-23 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n356" name="LastNameCaption">
                  <div className="block text-color-001 [font-family:roboto,_sans-serif] leading-[1.1875rem] text-left whitespace-pre-wrap [overflow-wrap:anywhere]" data-cid="n357">
                    Last name
                  </div>
                  {" "}
                </dw-label>
                <dw-text-box class="w-88 h-12 grid relative mt-7 ml-122 grid-rows-[48px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:mt-30 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n358" name="LastName">
                  <label className="flex items-start cursor-default" data-cid="n359">
                    {" "}
                    <span className="w-0 h-0 block overflow-hidden text-color-003 [font-family:'microsoft_sans_serif',_sans-serif] text-[0.6875rem] leading-[0.8125rem] text-left whitespace-pre-wrap [overflow-wrap:break-word]" data-cid="n360">
                      <span className="block pr-1" data-cid="n361" />
                    </span>
                    {" "}
                    <input className="w-full h-11 min-h-4 border border-solid border-border block p-3 rounded-lg flex-1 overflow-clip text-color-001 [font-family:'roboto_light',_sans-serif] leading-4 text-left bg-background cursor-text" data-cid="n362" data-component="input" type="text" />
                    {" "}
                  </label>
                  {" "}
                </dw-text-box>
                <dw-label class="w-88 h-6 grid relative mt-23 ml-30 items-start grid-rows-[24px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:mt-46 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n363" name="EmailCaption">
                  <div className="block text-color-001 [font-family:roboto,_sans-serif] leading-[1.1875rem] text-left whitespace-pre-wrap [overflow-wrap:anywhere]" data-cid="n364">
                    Email
                  </div>
                  {" "}
                </dw-label>
                <dw-text-box class="w-88 h-12 grid relative mt-30 ml-30 grid-rows-[48px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:mt-53 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n365" name="Email">
                  <label className="flex items-start cursor-default" data-cid="n366">
                    {" "}
                    <span className="w-0 h-0 block overflow-hidden text-color-003 [font-family:'microsoft_sans_serif',_sans-serif] text-[0.6875rem] leading-[0.8125rem] text-left whitespace-pre-wrap [overflow-wrap:break-word]" data-cid="n367">
                      <span className="block pr-1" data-cid="n368" />
                    </span>
                    {" "}
                    <input className="w-full h-11 min-h-4 border border-solid border-border block p-3 rounded-lg flex-1 overflow-clip text-color-001 [font-family:'roboto_light',_sans-serif] leading-4 text-left bg-background cursor-text" data-cid="n369" data-component="input" type="text" />
                    {" "}
                  </label>
                  {" "}
                </dw-text-box>
                <dw-label class="w-88 h-6 grid relative mt-23 ml-122 items-start grid-rows-[24px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:mt-69 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n370" name="CompanyCaption">
                  <div className="block text-color-001 [font-family:roboto,_sans-serif] leading-[1.1875rem] text-left whitespace-pre-wrap [overflow-wrap:anywhere]" data-cid="n371">
                    Company
                  </div>
                  {" "}
                </dw-label>
                <dw-text-box class="w-88 h-12 grid relative mt-30 ml-122 grid-rows-[48px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-lg:mt-76 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n372" name="Company">
                  <label className="flex items-start cursor-default" data-cid="n373">
                    {" "}
                    <span className="w-0 h-0 block overflow-hidden text-color-003 [font-family:'microsoft_sans_serif',_sans-serif] text-[0.6875rem] leading-[0.8125rem] text-left whitespace-pre-wrap [overflow-wrap:break-word]" data-cid="n374">
                      <span className="block pr-1" data-cid="n375" />
                    </span>
                    {" "}
                    <input className="w-full h-11 min-h-4 border border-solid border-border block p-3 rounded-lg flex-1 overflow-clip text-color-001 [font-family:'roboto_light',_sans-serif] leading-4 text-left bg-background cursor-text" data-cid="n376" data-component="input" type="text" />
                    {" "}
                  </label>
                  {" "}
                </dw-text-box>
                <dw-label class="w-[36.9375rem] h-12 grid relative mt-48 ml-30 items-start grid-rows-[48px] col-start-1 row-start-1 overflow-hidden grid-cols-[minmax(0,_1fr)] max-md:w-[21.0625rem] max-md:h-24 max-lg:mt-94 max-md:grid-rows-[96px] max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n377" name="PrivacyNotice">
                  <div className="block text-color-001 [font-family:'roboto_light',_sans-serif] text-[0.8125rem] leading-4 text-left whitespace-pre-wrap [overflow-wrap:anywhere]" data-cid="n378">
                    <span className="inline" data-cid="n379">
                      {"We will subscribe you to our monthly newsletter. You can change your preferences or unsubscribe at any time. Your privacy is important to us, all data will be stored securely and processed in line with our "}
                    </span>
                    <span className="inline text-accent" data-cid="n380">
                      terms and conditions
                    </span>
                    <span className="inline" data-cid="n381">
                      {" and "}
                    </span>
                    <span className="inline text-accent" data-cid="n382">
                      privacy policy
                    </span>
                    <span className="inline" data-cid="n383">
                      .
                    </span>
                  </div>
                  {" "}
                </dw-label>
                <dw-hyperlink class="w-[36.9375rem] h-12 block relative mt-48 ml-30 col-start-1 row-start-1 overflow-hidden max-md:w-[21.0625rem] max-md:h-24 max-lg:mt-94 max-lg:ml-0 md:max-lg:w-[43.1875rem]" data-cid="n384" name="PrivacyNoticeLink">
                  <a className="h-full flex text-clr-7 [font-family:'microsoft_sans_serif',_sans-serif] text-[0.6875rem] leading-[0.8125rem] text-left underline cursor-pointer" data-cid="n385" data-component="link" href="/terms-and-conditions/" target="_blank">
                    {" "}
                    <span className="grid items-start flex-1 overflow-hidden whitespace-pre-wrap [overflow-wrap:anywhere]" data-cid="n386" />
                    {" "}
                  </a>
                  {" "}
                </dw-hyperlink>
                <dw-macro-button class="w-[7.0625rem] h-10.5 block relative mt-48 ml-[45.4375rem] col-start-1 row-start-1 overflow-hidden max-md:mt-122 max-lg:ml-0 md:max-lg:mt-110" data-cid="n387" name="Submit">
                  <dw-button class="h-full flex" data-cid="n388">
                    <button className="h-10.5 border-2 border-solid border-color-005 block p-0.5 rounded-lg flex-1 overflow-hidden text-background [font-family:Arial] text-[0.8125rem] leading-[0.9375rem] bg-color-005 cursor-pointer" data-cid="n389" data-component="button">
                      {" "}
                      <div className="block overflow-hidden [font-family:roboto,_sans-serif] text-base leading-[1.1875rem] whitespace-pre-wrap [overflow-wrap:break-word]" data-cid="n390">
                        Subscribe
                      </div>
                      {" "}
                    </button>
                    {" "}
                  </dw-button>
                  {" "}
                </dw-macro-button>
              </div>
              {" "}
            </dw-form>
          </div>
          {" "}
        </div>
        {" "}
        <div className="block" data-cid="n391" />
        {" "}
        <div className="block" data-cid="n392" />
        {" "}
        <div className="block" data-cid="n393" />
        {" "}
      </div>
      {" "}
    </div>
  );
}
