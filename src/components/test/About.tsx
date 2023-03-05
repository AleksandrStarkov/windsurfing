import { Box, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useTranslation } from 'react-i18next';

import BackImg5 from '../../assets/icons/15.jpeg';

const About = () => {
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
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  return (
    <Container>
      <CustomBox
        style={{
          padding: '70px 20px',
          margin: '0',
        }}
      >
        <Box sx={{ flex: '1.25' }}>
          <img
            src={BackImg5}
            alt="heroImg"
            style={{ maxWidth: '100%', marginBottom: '2rem' }}
          />
        </Box>
        <Box sx={{ flex: '1' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '32px',
              color: '#2b6de6',
              fontWeight: '500',
            }}
          >
            {t('navbar.aloha')}
          </Typography>
          <Title variant="h2" style={{ fontSize: '50px' }}>
            {t('home.title5')}
          </Title>
          <Typography
            variant="body2"
            sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
          >
            {t('home.title6')}
          </Typography>
        </Box>
      </CustomBox>
      <Typography variant="body2" sx={{ fontSize: '18px', color: '#5A6473' }}>
        Windsurfing club provides services: windsurfing equipment rental
        sailboarding instruction windsurfing equipment sales storage of personal
        windsurfing equipment equipment repair We will be glad to see you in
        Kiev windsurfing club Windsurf!
      </Typography>
    </Container>
  );
};

export default About;
