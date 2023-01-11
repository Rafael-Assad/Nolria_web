import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLocation } from 'react-router-dom';
import { useIllustrations } from '../../services/hooks';
import { ilustrationMock} from './scripts';

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
      cols={4}
      rowHeight={121}
    >
      {filteredIlustrations.map((ilustration) => (
        <ImageListItem key={ilustration.illustration} 
          cols={ilustration.cols || 1} 
          rows={ilustration.rows || 1}
        >
          <img
            src={ilustration.illustration}
            alt={ilustration.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default IlustationGalery