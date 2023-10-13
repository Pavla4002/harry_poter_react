import { Header } from "antd/es/layout/layout";
import styles from './index.module.scss';

const HeaderPanel = () => {
  return (
    <div>
      <Header className={styles.header}>
        <div className={styles.box}>
          <img src="https://www.nicepng.com/png/full/862-8623108_harry-potter-logo-harry-potter.png" alt="лого" className={styles.image} />
        </div>
      </Header>
    </div>
  );
};

export default HeaderPanel;