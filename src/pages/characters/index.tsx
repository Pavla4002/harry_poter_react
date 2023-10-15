import React from "react";
import CharactersList from "src/shared/ui/CharactersList";
import styles from './index.module.scss';

const CharactersPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>
        <h1>
          Список персонажей
        </h1>
      </div>
      <div>
        <CharactersList/>
      </div>

    </div>
  );
};

export default CharactersPage;