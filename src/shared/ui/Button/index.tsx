import { Button, ButtonProps } from "antd";
import styles from 'src/shared/ui/Button/index.module.scss';


const MyButton = ({children,...props}:ButtonProps) => {
  return (
    <Button type="primary" {...props} className={styles.button}>
           {children}
    </Button>
  );
};

export default MyButton;