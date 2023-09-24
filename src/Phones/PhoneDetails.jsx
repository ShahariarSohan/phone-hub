import { useContext } from "react";
import PhoneBanner from "../Header/PhoneBanner";
import SinglePhone from "./SinglePhone";
import { PhoneContext } from "../Layout/MainLayout";
import { useParams } from "react-router-dom";

const PhoneDetails = () => {
  const params = useParams();
  const phones = useContext(PhoneContext);
  const singlePhone = phones?.find((phone) => phone.id === params.id);
  return (
    <div>
      <PhoneBanner></PhoneBanner>
      <SinglePhone singlePhone={singlePhone}></SinglePhone>
    </div>
  );
};

export default PhoneDetails;
