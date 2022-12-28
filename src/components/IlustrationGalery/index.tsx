import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ilustrationMock } from './scripts';

type Props = {}

const IlustationGalery = (props: Props) => {
  return (
    <ImageList
      sx={{ width: '80vw', height: '80vh' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {ilustrationMock.map((ilustration) => (
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