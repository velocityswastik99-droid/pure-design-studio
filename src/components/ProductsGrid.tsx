import { ProductCard } from "./ProductCard";
import laptopProduct from "@/assets/laptop-product.png";
import earbudsProduct from "@/assets/earbuds-product.png";
import watchProduct from "@/assets/watch-product.png";

export function ProductsGrid() {
  return (
    <section id="products" className="section-padding py-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProductCard
            title="Nova Book Pro"
            subtitle="New"
            description="Power meets portability. The thinnest, most powerful laptop we've ever created."
            image={laptopProduct}
            bgColor="light"
            price="From $1,299"
          />
          <ProductCard
            title="Nova Watch"
            subtitle="Series 10"
            description="Your health companion. Advanced sensors. Beautiful design."
            image={watchProduct}
            bgColor="dark"
            price="From $399"
          />
        </div>
        <div className="mt-4">
          <ProductCard
            title="Nova Buds Pro"
            subtitle="2nd Generation"
            description="Immersive sound. Active noise cancellation. All-day comfort."
            image={earbudsProduct}
            bgColor="light"
            price="From $249"
          />
        </div>
      </div>
    </section>
  );
}