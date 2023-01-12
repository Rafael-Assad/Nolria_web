import { forwardRef, SyntheticEvent } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Grow, { GrowProps } from '@mui/material/Grow';
import { SnackBarContainer } from './styles';
import { SeverityOpts } from '../../types';


interface SnackProps {
  message: string;
  severity: SeverityOpts;
  openSnackBar: boolean;
  setOpenSnackBar: (bool: boolean) => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref,) {
  return <MuiAlert elevation={24} ref={ref} variant="filled" {...props} />;
});

const GrowTransition = (props: GrowProps) => <Grow {...props}/>

const SnackBarAlert = ({message, severity, openSnackBar, setOpenSnackBar}: SnackProps) => {
  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;

    setOpenSnackBar(false);
  };

  return (
    <SnackBarContainer open={openSnackBar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={GrowTransition}
    >
      <Alert onClose={handleClose} 
        severity={severity} 
        sx={{ width: '30vw' }}
      >
        {message}
      </Alert>
    </SnackBarContainer>
  )
}

export default SnackBarAlert