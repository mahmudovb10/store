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
          <img className="proImg" src={data.thumbnail} alt="" />
          <h2 className="proTitle">{data.title}</h2>
          <p className="proDesc">{data.description}</p>
          <p className="proBrand">
            Brand: <span className="proBr">{data.brand}</span>
          </p>
          <p className="proCategory">
            Category: <span className="categor">{data.category}</span>
          </p>
          <p className="proRate">
            Rate: <span className="prorat">{data.rating} ⭐</span>
          </p>
          <p className="proWaranty">Waranty: {data.warrantyInformation}</p>
          <button className="btn btn-outline btn-primary proPrice">
            Buy {data.price}$
          </button>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
