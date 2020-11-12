import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { useGetVideosRequest } from './actions/getVideosAction';
import watchGetVideos from './sagas/watchGetVideos';
// import { videoSelector } from './selectors';

const mapState = (state: AppState) => ({
  videolist: state.videoReducer,
});
const mapDispatch = {
  getAllVideos: watchGetVideos(),
};
const connector = connect(mapState, mapDispatch);

// interface YoutubePageProps extends ConnectedProps<typeof connector> {}

class YoutubePage extends Component<{}, {}> {
  componentDidMount() {}
  render() {
    return (
      <>
        <div>Youtube Page</div>
      </>
    );
  }
}

export default connector(YoutubePage);
