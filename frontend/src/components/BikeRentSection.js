import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll, FilterBikes } from "../redux/features/Bikes/bikeAction";
import { CategoryAll } from "../redux/features/Category/categoryAction";
import { addToCart } from "../redux/features/Cart/cartSlice";
import { Checkbox, Radio } from "antd";
import Layout from "./Layout";
import { Prices } from "../Helper/Prices";

const BikeRentSection = () => {
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(CategoryAll());
  }, [dispatch]);

  useEffect(() => {
    if (!radio.length && !checked.length) {
      dispatch(BikeAll());
    } else {
      dispatch(FilterBikes({ radio, checked }));
    }
  }, [radio, checked, dispatch]);

  const { bikes } = useSelector((state) => state.bike);
  const { categories } = useSelector((state) => state.category);

  const base_url = "http://localhost:5001";

  const handleFilter = (isChecked, id) => {
    setChecked((prevChecked) =>
      isChecked ? [...prevChecked, id] : prevChecked.filter((c) => c !== id)
    );
  };

  return (
    <Layout title="Bike-4-Rental">
      <section className="flex h-full">
        {/* Sidebar Filters */}
        <aside className="w-1/5 border-r-2 border-orange p-5">
          {/* Filter by Category */}
          <h1 className="text-xl font-bold mb-2">Filter by Category</h1>
          <div className="flex flex-col gap-2 text-base font-semibold">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          {/* Filter by Price */}
          <h1 className="text-xl font-bold mt-4 mb-2">Filter by Price</h1>
          <Radio.Group onChange={(e) => setRadio(e.target.value)} className="flex flex-col gap-2">
            {Prices?.map((p) => (
              <Radio key={p.array} value={p.array}>
                {p.name}
              </Radio>
            ))}
          </Radio.Group>

          {/* Clear Filter Button */}
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-black px-4 py-2 mt-6 text-sm font-semibold text-white shadow-sm hover:bg-orange"
          >
            Clear Filter
          </button>
        </aside>

        {/* Bike Listings */}
        <div className="w-4/5 p-5">
          <div className="flex flex-wrap -m-4">
            {bikes && bikes.length > 0 ? (
              bikes.map((bike) => (
                <div key={bike._id} className="w-full p-4 lg:w-1/4 md:w-1/2">
                  <div className="relative block overflow-hidden rounded-lg">
                    <img
                      alt={bike.name}
                      className="object-cover object-center w-full h-full"
                      src={`${base_url}/api/v1/bike/bike-photo/${bike._id}`}
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-medium text-gray-900">{bike.name}</h2>
                    <p className="mt-1">Price per day: ₹{bike.price}</p>
                  </div>
                  <div className="flex justify-between w-full h-10 mt-3">
                    <Link
                      to={`/order/${bike.slug}`}
                      className="flex items-center px-4 py-1 text-white bg-orange rounded hover:bg-black"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-20">
                <h1 className="text-3xl font-bold text-gray-900">Bikes not available</h1>
                <p className="mt-4 text-base text-gray-600">
                  Sorry, we couldn’t find the bikes you’re looking for.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-block rounded-md bg-orange px-4 py-2 text-white font-semibold shadow-sm hover:bg-black"
                >
                  Go back home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BikeRentSection;
