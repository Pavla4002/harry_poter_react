import { Layout } from "antd";
import FilmsList from "src/shared/ui/ListFilms";
import HeaderPanel from "src/shared/ui/Header";
import styles from './index.module.scss';


const FilmsPage = () => {
  return (
        <Layout style={{backgroundColor:'white'}} className={styles.layout}>
            <HeaderPanel></HeaderPanel>
            <FilmsList/>
        </Layout>
  );
};

export default FilmsPage;