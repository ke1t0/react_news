import useMediaQuery from '@mui/material/useMediaQuery';

export default function useDisplayingPc() {
  return useMediaQuery('(min-width:600px)');
}
