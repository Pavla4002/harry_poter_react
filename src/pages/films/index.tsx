import { selectFilms } from "src/features/films/selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filmsAsync } from "src/features/films/asyncThunk";
import { IFilms } from "src/features/films/types";
import { useAppSelector } from "src/app/hooks";

const FilmsPage = () => {
  const dispatch = useDispatch();
  const films = useAppSelector(selectFilms);
  console.log(films);
  useEffect(()=>{
    dispatch(filmsAsync());
  },[]);
  return (
    <div>
      {films.map(film => <div key={film.id}>{film.title_rus}</div>)}
    </div>
  );
};

export default FilmsPage;