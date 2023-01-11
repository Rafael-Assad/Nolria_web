import ImageList from '@mui/material/ImageList';
import { useLocation } from 'react-router-dom';

import Illustration from '../Ilustration';

import { useIllustrations } from '../../services/hooks';
import { ilustrationMock} from './scripts';
import { IllustrationInfo } from '../../types';

type Props = {}

const IlustationGalery = (props: Props) => {
  const location = useLocation()

  const currentHash = location.hash

  const illustrationsToDisplay = useIllustrations()

  const newIllustrationMock = [
    ...ilustrationMock,
    ...illustrationsToDisplay
  ]

  const filteredIlustrations = newIllustrationMock.filter((illustration) => {
    if (!currentHash || currentHash === "#all") return illustration
  
    return illustration.hash === currentHash
  })

  return (
    <ImageList variant="quilted"
      sx={{ width: '80vw'}}
      cols={4} rowHeight={121}
    >
      {filteredIlustrations.map((illustr: IllustrationInfo) => {
        return (
          <Illustration key={illustr.id} 
            imgSrc={illustr.illustration}
            details={illustr} 
            cols={illustr.cols || 1} 
            rows={illustr.rows || 1}
          />
        )
      })}
    </ImageList>
  );
}

export default IlustationGalery