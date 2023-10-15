import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import {useParams } from 'react-router-dom';
import { characterAsync } from "src/features/characters/asyncThunk";
import { selectCharacter } from "src/features/characters/selector";
import styles from './index.module.scss';


const CharacterPage = () => {
  const {characterId} = useParams();
  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCharacter);
  useEffect(()=>{
    dispatch(characterAsync(characterId));
  },[]);

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h1>{character?.fullname}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.part1}>
          <div className={styles.imgBox}>
            <img src= {character?.img} alt="" className={styles.img}/>
          </div>
          <span>
             Прозвище: " {character?.nicknames} "
          </span>
        </div>
        <div className={styles.part2}>
          <span>Пол: {character?.gender}</span>
          <span>Вид: {character?.type}</span>
          <span>Дата рождения: {character?.dateOfBirth}</span>
          <span>Дата смерти: {character?.dateOfDeath == null ? ' нет' : character?.dateOfDeath}</span>
          <span>Чистота крови: {character?.purityOfBlood}</span>
          <span>Патронус: {character?.patronus}</span>
          <span>Факультет: {character?.faculty}</span>
          <span>Титулы: {character?.title}</span>
          <span>Характеристика: {character?.description}</span>
        </div>

      </div>

    </div>
  );
};

export default CharacterPage;