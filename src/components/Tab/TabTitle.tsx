import { Button } from '@mui/material';
import { FC, useCallback } from 'react';
import './TabTitle.css';

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: FC<Props> = ({ title, index, setSelectedTab }) => {
  const handleClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <Button
      variant='contained'
      onClick={handleClick}
      sx={{ fontSize: 16, fontWeight: 'bold', width: '100%' }}
    >
      {title}
    </Button>
  );
};

export default TabTitle;
