import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, CircularProgress, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getMoreNewsApi, getNewsApi } from '../api/api';
import CardItem from '../../components/test/Card';
import BackImg from '../../assets/icons/13.jpeg';

const News: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [newsLength, setNewsLength] = useState<number>(30);

  const { t } = useTranslation();

  const handleClick = (e: any) => {
    e.preventDefault();

    getMoreNewsApi(newsLength).then(response => {
      setNews([...news, ...response.data]);
      setNewsLength(newsLength + 30);
    });
  };

  const removeNews = (e: any) => {
    e.preventDefault();

    const { id } = e.target;
    const shoudRemove = window.confirm(`${t('news.confirm')}`);

    if (shoudRemove) {
      // eslint-disable-next-line
      setNews(news.filter(item => item.id != id));
    }
  };

  useEffect(() => {
    getNewsApi().then(response => setNews(response.data));
  }, []);

  return (
    <div
      style={{
        padding: '80px 20px',
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          {news.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                style={{
                  width: '345',
                  height: '550px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardItem title={item.title} text={item.body} />

                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  id={item.id}
                  onClick={removeNews}
                >
                  {t('news.delete')}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
        {news.length === 0 && <CircularProgress />}
        {newsLength < 100 && news.length !== 0 && (
          <Button
            variant="contained"
            size="small"
            onClick={handleClick}
            style={{ marginTop: '20px' }}
          >
            {t('news.loadMore')}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default News;
