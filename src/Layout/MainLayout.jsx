import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { createContext } from "react";
export const PhoneContext = createContext();
const MainLayout = () => {
  const phones = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <PhoneContext.Provider value={phones}>
        <Outlet></Outlet>
      </PhoneContext.Provider>
    </div>
  );
};

export default MainLayout;
