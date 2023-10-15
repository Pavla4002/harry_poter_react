import { Layout } from "antd";
import FilmsList from "src/shared/ui/ListFilms";
import styles from './index.module.scss';
import Input from "src/shared/ui/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "src/shared/ui/Input/useDebounce";
import MyInput from "src/shared/ui/Input";
import { useAppDispatch } from "src/app/hooks";
import { filmsAsync } from "src/features/films/asyncThunk";



const FilmsPage = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const debouncedSearchTerm = useDebounce<string>(value, 500);
  const handleChange= (event: ChangeEvent<HTMLInputElement> ) =>{
    setValue(event.target.value)
  };

  useEffect(()=>{
    dispatch(filmsAsync({title: debouncedSearchTerm }))

  },[debouncedSearchTerm])
  return (
        <Layout style={{backgroundColor:'white'}} className={styles.layout}>
          <div className={styles.title}>
            <div className={styles.boxSearchTitle}>
              <h1>
                Список фильмов о Гарри Потере
              </h1>
              <div className={styles.boxSearch}>
                <span>Найди фильм по названию</span>
                <MyInput value={value} name="searchFilm" type="text" onChange={handleChange}/>
              </div>
            </div>
          </div>
            <FilmsList/>
        </Layout>
  );
};

export default FilmsPage;