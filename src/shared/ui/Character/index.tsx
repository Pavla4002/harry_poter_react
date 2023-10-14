import React from "react";
import styles from "src/shared/ui/Film/index.module.scss";
import { Card } from "antd";
const { Meta } = Card;
import { ICharacters } from "src/features/characters/types";

interface CharacterProps{
  character:ICharacters,
}

const Character = ({character}:CharacterProps) => {
  return (
    <Card
      style={{ width: 300}}
      cover={
        <img alt="example" src={character.img} />
      }>
      <Meta className={styles.meta} title={character.fullname} description={character.faculty} />
    </Card>
  );
};

export default Character;