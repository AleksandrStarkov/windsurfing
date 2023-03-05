import React from 'react';
import i18n from '../../i18';
import english from '../../assets/icons/1.svg';
import ukrainian from '../../assets/icons/1.svg';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem, Typography } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <LanguageIcon style={{ color: 'purple' }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button
            style={{
              display: 'flex',
            }}
            type="button"
            onClick={() => changeLanguage('en')}
          >
            <img src={english} alt="UK flag" width="30" height="20" />
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#35033b',
                fontWeight: '500',
              }}
            >
              English
            </Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button type="button" onClick={() => changeLanguage('ua')}>
            <img src={ukrainian} alt=" UA flag" width="30" height="20" />
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#35033b',
                fontWeight: '500',
              }}
            >
              Ukrainian
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
