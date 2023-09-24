import PropTypes from "prop-types";

const FavoritePhone = ({ favPhone }) => {
  const { brand_name, image, phone_name, price } = favPhone || {};
  return (
    <div>
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
      </div>
    </div>
  );
};

FavoritePhone.propTypes = {
  favPhone: PropTypes.object.isRequired,
};

export default FavoritePhone;
