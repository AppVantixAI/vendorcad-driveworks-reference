import ProductCard from "../components/product-card";
import { ProductCard_cids } from "../_cids";
import { ProductCard_styles } from "../_styles";
import { products as productsContent } from "../content";
/** Product Grid section. */
export default function ProductGridSection3({ products = productsContent } = {}) {
  return (
    <div className="block bg-surface" data-cid="n267">
      <div className="block relative py-12 px-16 max-md:px-[1.175rem] md:max-lg:px-[2.4rem] 2xl:px-24" data-cid="n268">
        <div className="block relative max-w-360 pb-4 mx-auto" data-cid="n269">
          <h2 className="box-content block max-w-360 text-[2rem] font-medium leading-[2.375rem] text-center" data-cid="n270" data-component="heading" id="h-software">
            Software
          </h2>
          {" "}
          <p className="box-content block max-w-360 mt-3 text-xl font-light leading-7 text-center" data-cid="n271">
            CAD product configurator for manufacturers.
          </p>
          {" "}
        </div>
        {" "}
        <div className="flex max-w-360 mt-4 gap-4 mx-auto max-lg:flex-wrap grid-cols-1 lg:grid-cols-3" data-cid="n272">
          {products.map((d, i) => <ProductCard key={i} d={d} cids={ProductCard_cids[i]} styles={ProductCard_styles[i]} />)}
          {" "}
        </div>
        {" "}
        <div className="block relative max-w-360 mt-4 pt-8 mx-auto" data-cid="n321">
          <div className="h-[2.65rem] flex max-w-360 flex-wrap justify-center items-center gap-4" data-cid="n322">
            <div className="box-content h-[2.65rem] block" data-cid="n323">
              <a className="border-2 border-solid border-foreground inline-block py-2 px-4 rounded-lg content-center text-center [word-break:break-word] cursor-pointer whitespace-nowrap hover:bg-clr-4 focus:bg-clr-4" data-cid="n324" data-component="button" href="/pricing" rel="018f7162-8bf3-7898-af79-88b032302048">
                Compare software
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
