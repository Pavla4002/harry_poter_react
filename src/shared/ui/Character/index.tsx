import React from "react";
import styles from './index.module.scss';
import { Card } from "antd";
const { Meta } = Card;
import { ICharacters } from "src/features/characters/types";
import MyButton from "src/shared/ui/Button";
import {useNavigate} from 'react-router-dom';

interface CharacterProps{
  character:ICharacters,
}

const Character = ({character}:CharacterProps) => {
  const navigate = useNavigate();
  function clickMe (){
    navigate(`/harry_poter_react/pages/character/${character.id}`)
  }
  return (
    <Card
      style={{ width: 300, height: 600}}
      className={styles.card}
      cover={
        <img alt="example" src={character.img} className={styles.img}/>
      }
      actions={[
        <MyButton onClick={clickMe}>Подробнее</MyButton>
      ]}>
      <Meta className={styles.meta} title={character.fullname} description={character.faculty} />
    </Card>
  );
};

export default Character;