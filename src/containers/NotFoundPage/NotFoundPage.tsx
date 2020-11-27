import Navigation from 'containers/Navigation/Navigation';
import React from 'react';
import { Text } from 'wiloke-react-core';

const NotFoundPage = () => {
  return (
    <div>
      <Navigation />
      <Text tagName="h1" color="dark" tachyons="mt7">
        NotFoundPage
      </Text>
    </div>
  );
};

export default NotFoundPage;
