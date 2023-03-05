import { Box, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';

import BackImg from '../../assets/icons/20.jpeg';

const Store = () => {
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
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    minHeight: '80vh',
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
      <CustomBox>
        <Box
          sx={{
            flex: '1',
          }}
        >
          <Title variant="h1">Hello</Title>
          <Typography
            variant="body2"
            sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
          >
            Winsurfing For Life
          </Typography>
        </Box>
        <Box sx={{ flex: '1.25' }}>
          <img
            // src={heroImg}
            alt="heroImg"
            style={{ maxWidth: '100%', marginBottom: '2rem' }}
          />
        </Box>
      </CustomBox>
    </Container>
  );
};

export default Store;
