import React from "react";
import { Outlet } from 'react-router-dom';
import HeaderPanel from "src/shared/ui/Header";
import styles from './index.module.scss';

const MainPage = () => {
  return (
    <div>
      <div>
        <HeaderPanel/>
      </div>
      <main>
        <Outlet />
      </main>
      <div className={styles.footer}></div>
    </div>
  );
};

export default MainPage;