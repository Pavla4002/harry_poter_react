import { Button } from 'antd';
import { CompoundedComponent } from "antd/lib/float-button/interface";
import styles from 'src/shared/ui/Button/index.module.scss';


const MyButton = ({children,...props}:CompoundedComponent) => {
  return (
    <Button type="primary" {...props} className={styles.button}>
           {children}
    </Button>
  );
};

export default MyButton;