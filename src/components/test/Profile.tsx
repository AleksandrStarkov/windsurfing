import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackImg5 from '../../assets/icons/myphoto.jpeg';
import BackImg from '../../assets/icons/15.jpeg';
const Profile = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        // minHeight: '80vh',
      }}
    >
      <Card
        sx={{
          margin: 'auto',
          padding: '80px 20px',
          width: '500px',
          // height: '600px',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="ALEKSANDR STARKOV"
          subheader=" JUNIOR FrontEnd DEVELOPER"
        />
        <img
          src={BackImg5}
          alt="heroImg"
          style={{ maxWidth: '100%', marginBottom: '2rem' }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {t('home.title9')}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Profile;
