import React, { InputHTMLAttributes } from "react";
import styles from './index.module.scss'



const MyInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
      <input className={styles.input} {...props}/>
  );
};

export default MyInput;