import React from "react";
import { Outlet } from 'react-router-dom';
import HeaderPanel from "src/shared/ui/Header";

const MainPage = () => {
  return (
    <div>
      <div>
        <HeaderPanel/>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;