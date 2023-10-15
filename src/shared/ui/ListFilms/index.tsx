import Film from "src/shared/ui/Film";
import styles from './index.module.scss';
import { useAppSelector } from "src/app/hooks";
import { selectFilms } from "src/features/films/selector";

const FilmsList = () => {
  const films = useAppSelector(selectFilms);
    return (
       <div style={{width: '90%'}} className={styles.listCard}>
              {
                  films.map(film => <Film key={film.id} film={film}/>)
              }
       </div>
    );
};

export default FilmsList;