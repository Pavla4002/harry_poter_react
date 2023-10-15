import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { selectCharacters } from "src/features/characters/selector";
import { charactersAsync } from "src/features/characters/asyncThunk";
import Character from "src/shared/ui/Character";
import styles from './index.module.scss';

const CharactersList = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters)
  useEffect(()=>{
    dispatch(charactersAsync());
  },[])
  return (
    <div className={styles.listCard}>
      {characters.map(character=> <Character key={character.id} character={character}/>)}
    </div>
  );
};

export default CharactersList;