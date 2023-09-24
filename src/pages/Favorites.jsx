import { useEffect, useState } from "react";
import FavoritePhone from "../Phones/FavoritePhone";

const Favorites = () => {
  const [phones, setPhones] = useState();
  const [notFound, setNotFound] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const favoritePhone = JSON.parse(localStorage.getItem("favorite"));
    if (favoritePhone) {
      setPhones(favoritePhone);
    } else {
      setNotFound("There is no data");
    }
  }, []);
  const handleRemove = () => {
    localStorage.clear();
    setPhones([]);
    setPhones("There is no data");
  };
  return (
    <div className="container mx-auto text-center">
      <p>{notFound}</p>
      {phones?.length > 0 && (
        <button
          onClick={handleRemove}
          className="text-center text-lg font-bold text-white rounded-md px-5 py-2 bg-red-600"
        >
          Delete All
        </button>
      )}
      <div className=" container mx-auto grid grid-cols md:grid-cols-2  gap-5 my-5 ">
        {isShow
          ? phones?.map((favPhone) => (
              <FavoritePhone
                key={favPhone.id}
                favPhone={favPhone}
              ></FavoritePhone>
            ))
          : phones
              ?.slice(0, 4)
              ?.map((favPhone) => (
                <FavoritePhone
                  key={favPhone.id}
                  favPhone={favPhone}
                ></FavoritePhone>
              ))}
      </div>
      <button
        onClick={() => setIsShow(!isShow)}
        className="text-center text-lg font-bold text-white rounded-md px-5 py-2 bg-red-600"
      >
        {isShow ? "Show Less" : "Show more"}
      </button>
    </div>
  );
};

export default Favorites;
