import { Button } from 'antd';



const MyButton = ({children,...props}) => {
  return (
    <Button type="primary">
      {children}
    </Button>
  );
};

export default MyButton;