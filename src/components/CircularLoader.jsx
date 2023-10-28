import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './CircularLoader.css';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function CircularLoader() {
  const { showFrame } = useContext(AppContext);

  return (
    <div className='loader-container' style={{ top: showFrame ? '65dvh' : '44dvh' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
}