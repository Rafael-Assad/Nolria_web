import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLocation } from 'react-router-dom';
import { ilustrationMock } from './scripts';

type Props = {}

const IlustationGalery = (props: Props) => {
  const location = useLocation()

  const currentHash = location.hash

  const filteredIlustrations = ilustrationMock.filter((illustration) => {
    if (!currentHash || currentHash === "#all") return illustration
  
    return illustration.hash === currentHash
  })

  return (
    <ImageList
      sx={{ width: '80vw'}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {filteredIlustrations.map((ilustration) => (
        <ImageListItem key={ilustration.img} cols={ilustration.cols || 1} rows={ilustration.rows || 1}>
          <img
            src={ilustration.img}
            alt={ilustration.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default IlustationGalery