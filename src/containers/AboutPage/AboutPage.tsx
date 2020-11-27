import Button from 'components/Button/Button';
import Field from 'components/Field';
import Input from 'components/Input/Input';
import Tabs from 'components/Tabs';
import TabContent from 'components/Tabs/TabContent';
import Navigation from 'containers/Navigation/Navigation';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <h1>AboutPage</h1>
      <Button borderRaius={20}>asdas</Button>
      <Tabs>
        <TabContent title="Lemon">Lemon is yellow</TabContent>
        <TabContent title="Strawberry">Strawberry is red</TabContent>
        <TabContent title="Pear">Pear is green</TabContent>
      </Tabs>

      <Field label="hahahah" tachyons="mt3">
        <Input />
      </Field>
    </div>
  );
};

export default AboutPage;
