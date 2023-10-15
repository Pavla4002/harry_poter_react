import { Header } from "antd/es/layout/layout";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";

const HeaderPanel = () => {
  const navigate = useNavigate();
  function handleClick (){
    navigate('/harry_poter_react')
  }
  return (
      <Header className={styles.header}>
        <div className={styles.box} onClick={handleClick}>
          <img src="https://www.nicepng.com/png/full/862-8623108_harry-potter-logo-harry-potter.png" alt="лого" className={styles.image} />
        </div>
      </Header>
  );
};

export default HeaderPanel;