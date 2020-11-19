import React, { ReactNode, useState } from 'react';
import Menu from 'components/Menu/Menu';
import { useSearchVideosRequest } from 'containers/YoutubePage/actions/searchVideosAction';
import { useHistory } from 'react-router';
import { Endpoint } from 'types/endpoint';
import { useSelector } from 'react-redux';
import { videoSearchSelector } from 'containers/YoutubePage/selectors';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import { View } from 'wiloke-react-core';

export interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const getSearchedVideo = useSearchVideosRequest();
  const videoSearchList = useSelector(videoSearchSelector);
  const history = useHistory();

  const _handleCloseSideDrawer = () => {
    setDrawerOpen(drawerOpen => !drawerOpen);
  };

  const _handleOnSubmit = (params: string) => {
    getSearchedVideo({ endpoint: Endpoint.SEARCH, keyword: params });
    history.push(`/search?q=${params}`);
  };
  return (
    <>
      <SideDrawer open={drawerOpen} onClose={_handleCloseSideDrawer} />
      <Menu bgColor="dark" fixed onSubmit={_handleOnSubmit} isLoadding={videoSearchList.isLoading} onClick={_handleCloseSideDrawer} />
      {drawerOpen ? (
        <View style={{ marginLeft: 256 }}>{children}</View>
      ) : (
        <View style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>{children}</View>
      )}
    </>
  );
};

export default AppLayout;
