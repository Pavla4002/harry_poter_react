import { Card } from "antd";
import { IFilms } from "src/features/films/types";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";

interface CardFilmProps{
    film: IFilms;
}

const Film = ({film}:CardFilmProps) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/pages/film');
  }
    return (
            <Card
              style={{ width: 300}}
              cover={
              <img alt="example" src={film.coverImg} />
            }>
                <Meta title={film.title_rus} description={film.genre} />

            </Card>
    );
};

export default Film;