import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: any;
}
interface AuthProps {
  isAuth: boolean;
  checkAuth(data: boolean): void;
}

function LinkTab(props: LinkTabProps) {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (props.href) {
      navigate(props.href);
    }
  };
  return <Tab component="a" onClick={handleClick} {...props} />;
}

export default function NavTabs(props: AuthProps) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(() => {
    const savedValue = localStorage.getItem('selectedTab');
    return savedValue ? parseInt(savedValue) : 0;
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    localStorage.setItem('selectedTab', value.toString());
  }, [value]);

  return (
    <Box sx={{ width: '100%', mr: '20px' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label={t('navbar.home')!} href="/" />
        <LinkTab label={t('navbar.about')!} href="/about" />
        <LinkTab label={t('navbar.training')!} href="/training" />
        <LinkTab label={t('navbar.news')!} href="/news" />
        <LinkTab label={t('navbar.store')!} href="/store" />
        <LinkTab label={t('navbar.post')!} href="/post" />
      </Tabs>
    </Box>
  );
}
