import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { filmAsync } from "src/features/films/asyncThunk";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { selectFilm } from "src/features/films/selector";
import styles from './index.module.scss';


const FilmPage = () => {
  const {filmId} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(selectFilm);
  useEffect(()=>{
    dispatch(filmAsync(filmId));
  },[]);
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.part1}>
          <div><img src={film?.coverImg} alt="" /></div>
          <div className={styles.smallPart1}>
            <span>{film?.title_eng}</span>
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