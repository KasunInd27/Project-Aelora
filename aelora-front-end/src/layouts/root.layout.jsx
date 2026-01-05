import { Outlet } from "react-router";  // IGNORE: updated import path

export const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
