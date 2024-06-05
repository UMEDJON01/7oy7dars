import { useNavigate } from "react-router-dom";

function Card(props) {
  const { title, price, image } = props.data.attributes;
  const { id } = props.data;
  const navigate = useNavigate();

  function handleRedirect(e) {
    e.preventDefault();
    navigate(`/product/${id}`);
  }

  return (
    <div
      onClick={handleRedirect}
      className="card w-96 bg-base-100 mt-20 shadow-xl transition duration-400 hover:shadow-2xl"
    >
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt="comfy store"
          className="rounded-lg bg-cover w-96 h-72"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p className="card-title">{title}</p>
        <p className="text-accent-content">${price / 100}</p>
      </div>
    </div>
  );
}

export default Card;
