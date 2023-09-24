import { useEffect, useState } from "react";
import FavoritePhone from "../Phones/FavoritePhone";

const Favorites = () => {
  const [phones, setPhones] = useState();
  const [notFound, setNotFound] = useState();
  useEffect(() => {
    const favoritePhone = JSON.parse(localStorage.getItem("favorite"));
    if (favoritePhone) {
      setPhones(favoritePhone);
    } else {
      setNotFound("There is no data");
    }
  }, []);

  return (
    <div className="container mx-auto text-center">
      <p>{notFound}</p>
      <div className=" container mx-auto grid grid-cols md:grid-cols-2  gap-5 my-5 ">
        {phones?.map((favPhone) => (
          <FavoritePhone key={favPhone.id} favPhone={favPhone}></FavoritePhone>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
