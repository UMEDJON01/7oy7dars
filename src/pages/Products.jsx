import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";

function Products() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(10000);
  const [shipping, setShipping] = useState(false);

  const searchRef = useRef(null);
  const categoryRef = useRef(null);
  const companyRef = useRef(null);
  const sortRef = useRef(null);

  async function getData(
    url = "https://strapi-store-server.onrender.com/api/products"
  ) {
    try {
      const res = await fetch(url);
      const responseData = await res.json();
      setData(responseData.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleFilter() {
    // Implement filtering logic here
  }

  function handleReset() {
    searchRef.current.value = null;
    categoryRef.current.value = "all";
    companyRef.current.value = "all";
    sortRef.current.value = "a-z";
    setPrice(10000);
    setShipping(false);
  }

  return (
    <>
      <div className="container w-3/4 mx-auto mt-14">
        <div className="filter p-5 bg-primary-content rounded-md">
          <div className="filter-top flex gap-5">
            <div className="field flex flex-col w-[244px] gap-2">
              <label htmlFor="search" className="opacity-75">
                Search Product
              </label>
              <input
                ref={searchRef}
                type="search"
                placeholder="Type here"
                className="input input-bordered input-sm py-4 w-full max-w-xs"
                id="search"
              />
            </div>

            <div className="flex flex-col gap-2 w-[244px]">
              <span className="opacity-75 ">Select Category</span>
              <select
                ref={categoryRef}
                className="select select-bordered select-sm w-full max-w-xs"
              >
                <option value="all" selected>
                  all
                </option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-[244px]">
              <span className="opacity-75 ">Select Company</span>
              <select
                ref={companyRef}
                className="select select-bordered select-sm w-full max-w-xs"
              >
                <option value="all" selected>
                  all
                </option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-[244px]">
              <span className="opacity-75 ">Sort By</span>
              <select
                ref={sortRef}
                className="select select-bordered select-sm w-full max-w-xs"
              >
                <option value="a-z" selected>
                  a-z
                </option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
          </div>

          <div className="filter-bottom flex justify-between gap-5 items-center mt-8">
            <div className="range-block w-[244px]">
              <div className="range-input w-[240px]">
                <div className="range-title flex justify-between mb-2">
                  <p>Select Price</p>
                  <p>${price}</p>
                </div>
                <div className="range-field">
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    className="range range-primary"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="range-max-min flex justify-between mt-1">
                  <span>0</span>
                  <span>Max : $1,000.00</span>
                </div>
              </div>
            </div>

            <div className="shipping w-[244px]">
              <div className="form-control">
                <label className="label cursor-pointer flex flex-col gap-3">
                  <span className="label-text">Free Shipping</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={shipping}
                    onChange={(e) => setShipping(e.target.checked)}
                  />
                </label>
              </div>
            </div>

            <div className="search-input">
              <button
                onClick={handleFilter}
                className="btn btn-primary w-[230px]"
              >
                Filter
              </button>
            </div>

            <div className="reset-input">
              <button
                onClick={handleReset}
                className="btn btn-secondary w-[230px]"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="products flex justify-between flex-wrap gap-2 mb-20">
          {data.length > 0 &&
            data.map((el, index) => <Card key={index} data={el} />)}
        </div>
      </div>
    </>
  );
}

export default Products;
