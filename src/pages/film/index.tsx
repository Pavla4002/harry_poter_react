import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { filmAsync } from "src/features/films/asyncThunk";
import { useAppDispatch, useAppSelector} from "src/app/hooks";
import { selectFilm } from "src/features/films/selector";
import styles from './index.module.scss';
import MyButton from "src/shared/ui/Button";



const FilmPage = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/harry_poter_react/pages/characters');
  }
  const {filmId} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(selectFilm);
  useEffect(()=>{
    filmId && dispatch(filmAsync(+filmId));
  },[]);
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h1>
          {film?.title_rus}
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.part1}>
          <div><img src={film?.coverImg} alt="" /></div>
          <div className={styles.smallPart1}>
            <span>{film?.title_eng}</span>
          </div>
          <div>
            <MyButton onClick={handleClick}>Персонажи</MyButton>
          </div>
        </div>
        <div className={styles.part2}>
          <span>Режиссер: {film?.director}</span>
          <span>Год выпуска: {film?.release}</span>
          <span>Автор музыки: {film?.authorMusic}</span>
          <span>Длительность: {film?.duration}</span>
          <span>Жанр: {film?.genre}</span>
          <div className={styles.part1}>
            <span>Описание:</span>
            <span>{film?.description}</span>
          </div>
        </div>
      </div>
      </div>

  );
};

export default FilmPage;