import { Layout } from "antd";
import FilmsList from "src/shared/ui/ListFilms";
import HeaderPanel from "src/shared/ui/Header";


const FilmsPage = () => {
  return (
    <div>
        <Layout style={{backgroundColor:'white'}}>
          <HeaderPanel></HeaderPanel>
          <FilmsList/>
        </Layout>
    </div>
  );
};

export default FilmsPage;