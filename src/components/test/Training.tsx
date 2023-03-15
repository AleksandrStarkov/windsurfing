import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import axios from 'axios';
import BackImg from '../../assets/icons/14.jpeg';

interface PixabayImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  views: number;
  comments: number;
  downloads: number;
}

interface PixabayAPIResponse {
  hits: PixabayImage[];
  total: number;
  totalHits: number;
}

const WovenImageList = () => {
  const [images, setImages] = React.useState<PixabayImage[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getArticles(1, 'windsurfing'); // Параметры для запроса
        setImages(response.hits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        minHeight: '80vh',
      }}
    >
      <ImageList
        sx={{ width: '100%', height: '100%', padding: '80px 20px' }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {images.map(item => (
          <ImageListItem
            key={item.id}
            style={{
              border: '2px solid rgba(14, 1, 1, 0.5)',
              borderRadius: '5px',
              background: '#df00f8ec',
              boxShadow: '0 0 15px rgb(191, 2, 248)',
            }}
          >
            <img
              src={`${item.webformatURL}?w=161&fit=crop&auto=format`}
              srcSet={`${item.webformatURL}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.tags}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default WovenImageList;

export const getArticles = async (
  page: number,
  query: string,
): Promise<PixabayAPIResponse> => {
  const URL = 'https://pixabay.com/api/';
  const options = new URLSearchParams({
    key: '28584763-421dc035e00a550bd9f3576d4',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page.toString(),
    per_page: '21',
  });

  try {
    const response = await axios.get<PixabayAPIResponse>(`${URL}?${options}`);
    if (response.data.hits.length === 0) {
      throw new Error('No results found');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
