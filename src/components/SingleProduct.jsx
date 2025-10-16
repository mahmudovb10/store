import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (isPending)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        Xatolik: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Product Details</h1>

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Rasm */}
          <div className="flex justify-center">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full max-w-sm rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Ma’lumotlar */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text-gray-600 leading-relaxed">{data.description}</p>

            <p className="text-sm">
              <span className="font-semibold text-gray-800">Brand:</span>{" "}
              {data.brand}
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {data.category}
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-800">Rating:</span>{" "}
              {data.rating} ⭐
            </p>
            {data.warrantyInformation && (
              <p className="text-sm">
                <span className="font-semibold text-gray-800">Warranty:</span>{" "}
                {data.warrantyInformation}
              </p>
            )}

            <div className="mt-6">
              <button className="btn btn-primary w-full sm:w-auto">
                Buy ${data.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
