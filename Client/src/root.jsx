import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;