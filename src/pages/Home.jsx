import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://strapi-store-server.onrender.com/api/products?featured=true`)
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <span className="loading loading-ring loading-lg block mx-auto mt-60"></span>
      ) : (
        <div className="container w-3/4 mx-auto mt-10">
          <div className="flex items-center justify-between">
            <div className="w-[496px] flex flex-col gap-10 mt-10">
              <h1 className="text-6xl font-bold text-[#394E6A]">
                We are changing the way people shop
              </h1>
              <p className="text-[#394E6A]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore repellat explicabo enim soluta temporibus asperiores aut
                obcaecati perferendis porro nobis.
              </p>
              <Link
                to="/products"
                className="w-[148px] btn btn-info text-gray-300"
              >
                OUR PRODUCTS
              </Link>
            </div>

            <div className="carousel carousel-center max-w-md p-4 w-[496px] h-[450px] space-x-4 bg-neutral rounded-box mt-10">
              <div className="carousel-item">
                <img
                  src={hero1}
                  className="rounded-box w-[320px] h-[416px]"
                  alt="Hero 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={hero2}
                  className="rounded-box w-[320px] h-[416px]"
                  alt="Hero 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={hero3}
                  className="rounded-box w-[320px] h-[416px]"
                  alt="Hero 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={hero4}
                  className="rounded-box w-[320px] h-[416px]"
                  alt="Hero 4"
                />
              </div>
            </div>
          </div>

          <div className="mt-24 mb-20">
            <h2 className="font-bold text-3xl text-[#394E6A] mb-7">
              Featured Products
            </h2>
            <hr />
            <div className="flex justify-between gap-5">
              {featured.length > 0 &&
                featured.map((el) => <Card key={el.id} data={el} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
