import { Card } from "antd";
import { IFilms } from "src/features/films/types";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";
import MyButton from "src/shared/ui/Button";
import styles from './index.module.scss';

interface CardFilmProps{
    film: IFilms;
}

const Film = ({film}:CardFilmProps) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    const path = `/pages/film/${film.id}`;
    navigate(path);
  }
    return (
            <Card
              style={{ width: 300}}
              className={styles.card}
              cover={
              <img alt="example" src={film.coverImg} />
            }
            actions={[
              <MyButton onClick={handleClick}>Подробнее</MyButton>
            ]}>
                <Meta className={styles.meta} title={film.title_rus} description={film.genre} />
            </Card>
    );
};

export default Film;