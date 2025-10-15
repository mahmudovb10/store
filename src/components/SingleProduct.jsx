import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Xatolik {error.message}</p>;

  return (
    <div>
      <h1>Single Product</h1>
      {data && (
        <div key={data.id}>
          <img src={data.thumbnail} alt="" />
          <h2>{data.title}</h2>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
