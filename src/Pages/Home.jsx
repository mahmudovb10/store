import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/products");
  if (isPending)
    return (
      <span className="loading loading-spinner loading-xl flex justify-center ml-auto mr-auto"></span>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Online Store</h1>
      <ul className="mainCards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-10 mb-10">
        {data?.products?.map((prod) => (
          <li key={prod.id} className="list-none">
            <Link to={`/singleproduct/${prod.id}`}>
              <div className="card bg-base-100 w-80 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition">
                <figure>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-full h-56 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg font-semibold">
                    {prod.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="line-clamp-2">{prod.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-soft btn-primary">
                      {prod.price}$ Buy
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
