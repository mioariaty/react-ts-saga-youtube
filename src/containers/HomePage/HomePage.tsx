import GridGeneric from 'components/GridGeneric/GridGeneric';
import Aaa from 'components/test';
import Navigation from 'containers/Navigation/Navigation';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button, LineAwesome, Text, View } from 'wiloke-react-core';
import { useGetTodolistRequest } from './actions/actionTodolist';
import { todolistSelector } from './selectors';

const HomePage: FC = () => {
  const todolist = useSelector(todolistSelector);
  const getTodolistRequest = useGetTodolistRequest();
  const handleGetTodolist = () => {
    getTodolistRequest({ endpoint: 'todolist' });
  };

  const renderTodolist = () => {
    if (todolist.isLoading) {
      return <h2>Loading...</h2>;
    }

    if (!!todolist.errorMessage) {
      return <h2>{todolist.errorMessage}</h2>;
    }

    return <div>{JSON.stringify(todolist.data)}</div>;
  };

  return (
    <div>
      <Navigation />
      <h1>
        <Aaa />
      </h1>
      <button onClick={handleGetTodolist}>Get todolist</button>
      <h2>Grid generic type</h2>
      {renderTodolist()}
      <GridGeneric
        data={[
          { id: 'id1', name: 'foo' },
          { id: 'id2', name: 'bar' },
        ]}
        renderItem={item => {
          return <div>{item.name}</div>;
        }}
      />
      <View backgroundColor="gray1" tachyons={['flex', 'flex-row', 'justify-between', 'pa4', 'relative']}>
        <View>
          <Text tagName="h2" color="dark1">
            Day la title
          </Text>
          <Text color="dark3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, earum!</Text>
        </View>
        <Button backgroundColor="facebook" radius="pill" size="extra-small" color="light" nightModeBlacklist="all">
          <LineAwesome name="facebook" tachyons="mr1" />
          Facebook
        </Button>
      </View>
    </div>
  );
};

export default HomePage;
