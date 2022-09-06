import { AppBar, Box, Typography } from '@mui/material';
import useDisplayingPc from 'src/Hooks/useMediaQuery';

const Header: React.FC = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Typography
          variant={useDisplayingPc() ? 'h4' : 'h5'}
          sx={{ p: 1 }}
          className='header-text'
        >
          NewsSite
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
