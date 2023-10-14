import { Button } from 'antd';
import { CompoundedComponent } from "antd/lib/float-button/interface";



const MyButton = ({children,...props}:CompoundedComponent) => {
  return (
    <Button type="primary" {...props}>
      {children}
    </Button>
  );
};

export default MyButton;