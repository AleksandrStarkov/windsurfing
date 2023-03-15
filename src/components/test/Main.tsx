import { Box, Container, Typography, styled } from '@mui/material';

import BackImg1 from '../../assets/icons/18.jpeg';
import BackImg2 from '../../assets/icons/12.jpeg';
import BackImg3 from '../../assets/icons/16.jpeg';
import BackImg4 from '../../assets/icons/14.jpeg';
import { useTranslation } from 'react-i18next';

const Post = () => {
  const { t } = useTranslation();
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BackImg4})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',

          height: '2300px',
          width: '100%',
          minHeight: '80vh',
        }}
      >
        <Container>
          <Typography
            variant="body2"
            sx={{
              fontSize: '70px',
              color: '#c74258',
              fontWeight: '500',
            }}
          >
            {t('navbar.about')}
          </Typography>
          <CustomBox
            style={{
              margin: '0',
              padding: '40px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                margin: '0',
                display: 'flex',

                alignItems: 'center',
                border: '2px solid rgba(14, 1, 1, 0.5)',
                borderRadius: '5px',
                background: '#9324e746',
                padding: '2px',
                backdropFilter: 'blur(20px)',
                width: '500px',
                boxShadow: '0 0 15px rgb(191, 2, 248)',
              }}
            >
              <Title variant="h2">{t('home.title2')}</Title>
            </Box>

            <Box sx={{}}>
              <img
                src={BackImg2}
                alt="heroImg"
                style={{
                  maxWidth: '100%',
                  marginBottom: '2rem',
                  borderRadius: '20px',
                  width: '330px',
                  boxShadow: '0 0 15px rgb(191, 2, 248)',
                }}
              />
            </Box>
          </CustomBox>
        </Container>
        <Container>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'end',
              fontSize: '70px',
              color: '#60026a',
              fontWeight: '500',
            }}
          >
            {t('navbar.training')}
          </Typography>
          <CustomBox>
            <Box sx={{ flex: '1.25' }}>
              <img
                src={BackImg3}
                alt="heroImg"
                style={{
                  maxWidth: '100%',
                  marginBottom: '2rem',
                  borderRadius: '20px',
                  width: '330px',
                  boxShadow: '0 0 15px rgb(191, 2, 248)',
                }}
              />
            </Box>
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '2px solid rgba(14, 1, 1, 0.5)',
                borderRadius: '5px',
                background: '#9324e746',
                padding: '2px',
                backdropFilter: 'blur(20px)',
                width: '500px',
                height: '250px',
                boxShadow: '0 0 15px rgb(191, 2, 248)',
              }}
            >
              <Title variant="h1">{t('home.title3')}</Title>
            </Box>
          </CustomBox>
        </Container>
        <Container>
          <Typography
            variant="body2"
            sx={{
              fontSize: '70px',
              color: '#195fe2',
              fontWeight: '500',
              mt: 10,
              mb: 4,
            }}
          >
            {t('navbar.store')}
          </Typography>
          <CustomBox>
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '2px solid rgba(14, 1, 1, 0.5)',
                borderRadius: '5px',
                background: '#9324e746',
                padding: '2px',
                backdropFilter: 'blur(20px)',
                width: '500px',
                height: '300px',
                boxShadow: '0 0 15px rgb(191, 2, 248)',
              }}
            >
              <Title variant="h1">{t('home.title4')}</Title>
            </Box>

            <Box sx={{}}>
              <img
                src={BackImg1}
                alt="heroImg"
                style={{
                  maxWidth: '100%',
                  marginBottom: '2rem',
                  borderRadius: '20px',
                  width: '300px',
                  height: '500px',
                  boxShadow: '0 0 15px rgb(191, 2, 248)',
                }}
              />
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
};

export default Post;
