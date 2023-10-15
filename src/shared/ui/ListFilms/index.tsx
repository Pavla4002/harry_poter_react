import { IFilms } from "src/features/films/types";
import Film from "src/shared/ui/Film";
import styles from './index.module.scss';
import { useAppSelector } from "src/app/hooks";
import { selectFilms } from "src/features/films/selector";
import { useEffect } from "react";
import { filmsAsync } from "src/features/films/asyncThunk";
import { useDispatch } from "react-redux";

const FilmsList = () => {
  const dispatch = useDispatch();
  const films = useAppSelector(selectFilms);
  console.log(films);
  // useEffect(()=>{
  //   dispatch(filmsAsync({title: 'дары смерти'}));
  // },[]);

    return (
       <div style={{width: '90%'}} className={styles.listCard}>
              {
                  films.map(film => <Film key={film.id} film={film}/>)
              }
       </div>
    );
};

export default FilmsList;