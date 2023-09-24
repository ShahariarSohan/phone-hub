import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { id, brand_name, image, phone_name, price, rating } = phone;
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={image} className="h-full w-full object-fit" />
      </div>
      <div className="p-6">
        <p className="block font-sans text-base  leading-normal  antialiased  font-medium">
          {brand_name}
        </p>
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {phone_name}
          </p>
          <p className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link to={`/phone-details/${id}`}>
          <button
            className=" bg-green-600 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default Phone;
