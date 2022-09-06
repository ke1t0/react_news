import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const Tab: FC<Props> = ({ children }) => {
  return (
    <Box component='article' sx={{ padding: 3 }}>
      {children}
    </Box>
  );
};

export default Tab;
