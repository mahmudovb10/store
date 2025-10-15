import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/products");
  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <h1>Store</h1>
      <ul className="mainCards">
        {data?.products?.map((prod) => (
          <div key={prod.id}>
            <Link to={`/singleproduct/${prod.id}`}>
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img src={prod.thumbnail} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {prod.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{prod.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-soft btn-primary">
                      {prod.price}$ Buy
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
