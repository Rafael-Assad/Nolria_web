import styled from 'styled-components';
import Snackbar from '@mui/material/Snackbar';

export const SnackBarContainer = styled(Snackbar)`
  [role='alert'] {
    display: flex;
    align-items: center;

    .MuiAlert-message{
      font-size: 1.4rem;
    }
  }
`;