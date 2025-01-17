import { Product } from "@/db/index";

const Product = ({ product }: { product: Product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src={product.imageId} alt="" className="h-full w-full object-cover object-center" />
      </div>
    </div>
  );
};

export default Product;
