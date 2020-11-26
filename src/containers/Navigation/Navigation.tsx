import Menu from 'components/Menu/Menu';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import { useNightModeAction } from 'containers/AppLayout/actions/toggleNightModeAction';
import { useSearchVideosRequest } from 'containers/YoutubePage/actions/searchVideosAction';
import { nightModeSelector } from 'containers/YoutubePage/selectors';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Endpoint } from 'types/endpoint';
import { View } from 'wiloke-react-core';

export interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const nightModeReducer = useSelector(nightModeSelector);
  const { isNightMode } = nightModeReducer;
  const history = useHistory();
  const getNightMode = useNightModeAction();
  const getSearchedVideo = useSearchVideosRequest();

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

  return (
    <View>
      <SideDrawer open={drawerOpen} onClose={_handleCloseSideDrawer} />
      <Menu
        bgColor="dark"
        fixed
        onSubmit={_handleOnSubmit}
        onClick={_handleCloseSideDrawer}
        isNightMode={isNightMode}
        onChangeNightMode={_handleToggleNightMode}
      />
    </View>
  );
};

export default Navigation;
