/** Top navigation bar. */
export default function Navbar() {
  return (
    <div className="flex py-5 px-16 flex-wrap justify-center items-center gap-6 bg-primary max-md:px-[1.175rem] md:max-lg:px-[2.4rem] 2xl:px-24" data-cid="n51">
      <p className="box-content block text-background text-xl leading-7 text-center" data-cid="n52">
        Try the real VendorCAD workspace — live demo, instant access, no credit card required.
      </p>
      {" "}
      <div className="h-[2.65rem] flex flex-wrap items-center gap-4" data-cid="n53">
        <div className="box-content h-[2.65rem] block" data-cid="n54">
          <a className="border-2 border-solid border-clr-2 inline-block py-2 px-4 rounded-lg content-center text-background text-center [word-break:break-word] bg-color-002 cursor-pointer whitespace-nowrap hover:[filter:brightness(1.1)] focus:[filter:brightness(1.1)]" data-cid="n55" data-component="button" href="/demo" rel="01905462-bf39-70e1-9000-ff45314cc484">
            Open live demo
          </a>
        </div>
        {" "}
        <div className="box-content h-[2.65rem] block" data-cid="n56">
          <a className="border-2 border-solid border-background inline-block py-2 px-4 rounded-lg content-center text-background text-center [word-break:break-word] cursor-pointer whitespace-nowrap hover:bg-clr-11 focus:bg-clr-11" data-cid="n57" data-component="button" href="/pricing" rel="01905462-dcac-7b96-aa8d-6e0f6ccfbdfb">
            See pricing
          </a>
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
