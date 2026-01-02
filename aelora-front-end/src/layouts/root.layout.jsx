import { Outlet } from "react-router";  // IGNORE: updated import path
import Navigation from "@/components/Navigation/Navigation";

export const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
