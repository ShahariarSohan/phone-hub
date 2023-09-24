import PropTypes from "prop-types";
import Phone from "./Phone";
import { useContext } from "react";
import { PhoneContext } from "../Layout/MainLayout";
const Phones = () => {
  const phones = useContext(PhoneContext);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">
        Our Phones Collections
      </h1>
      <div className=" container mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-3  gap-5 my-5">
        {phones?.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.array,
};
export default Phones;
