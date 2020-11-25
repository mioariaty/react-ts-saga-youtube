import Menu from 'components/Menu/Menu';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import { useSearchVideosRequest } from 'containers/YoutubePage/actions/searchVideosAction';
import { nightModeSelector } from 'containers/YoutubePage/selectors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Routes from 'routes';
import { Endpoint } from 'types/endpoint';
import { ThemeOverrides, ThemeProvider } from 'wiloke-react-core';
import { useNightModeAction } from './actions/toggleNightModeAction';

export const themeOverrides: ThemeOverrides = {
  colors: {
    primary: '#6f9dff',
    secondary: '#2DDE98',
    tertiary: '#fd5678',
    quaternary: '#FFC20E',
    dark1: '#27262B',
    dark2: '#343238',
    dark3: '#75737C',
    dark4: '#929099',
    dark5: '#b6b4b9',
    gray1: '#DBDADE',
    gray2: '#ECEBEE',
    gray3: '#F0F0F2',
    gray4: '#F7F6F9',
  },
  nightModeColors: {
    dark: '#F7F6F9',
    light: '#0f0f0f',
    gray1: '#212121',
    gray2: '#343238',
    gray3: '#75737C',
    gray4: '#929099',
    gray5: '#b6b4b9',
    dark1: '#F7F6F9',
    dark2: '#F0F0F2',
    dark3: '#ECEBEE',
    dark4: '#DBDADE',
    dark5: '#DBDADE',
  },
};

const AppLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const nightModeReducer = useSelector(nightModeSelector);
  const { isNightMode } = nightModeReducer;
  const getNightMode = useNightModeAction();

  const getSearchedVideo = useSearchVideosRequest();
  const history = useHistory();

  const _handleCloseSideDrawer = () => {
    setDrawerOpen(drawerOpen => !drawerOpen);
  };

  const _handleOnSubmit = (params: string) => {
    getSearchedVideo({ endpoint: Endpoint.SEARCH, keyword: params });
    history.push(`/search?q=${params}`);
  };

  const _handleToggleNightMode = () => {
    getNightMode(isNightMode);
  };

  const customTheme = { ...themeOverrides, nightMode: isNightMode };
  return (
    <ThemeProvider themeOverrides={customTheme}>
      <Routes>
        <SideDrawer open={drawerOpen} onClose={_handleCloseSideDrawer} />
        <Menu
          bgColor="dark"
          fixed
          onSubmit={_handleOnSubmit}
          onClick={_handleCloseSideDrawer}
          isNightMode={isNightMode}
          onChangeNightMode={_handleToggleNightMode}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default AppLayout;
