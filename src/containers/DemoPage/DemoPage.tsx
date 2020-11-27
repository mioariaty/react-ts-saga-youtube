import Field from 'components/Field';
import Input from 'components/Input/Input';
import Section from 'components/Section/Section';
import Navigation from 'containers/Navigation/Navigation';
import React from 'react';
import { View } from 'wiloke-react-core';

const AboutPage = () => {
  return (
    <Section>
      <Navigation />

      <View style={{ maxWidth: 550, minHeight: 800, border: '1px solid gray', padding: 20, borderRadius: 20 }}>
        <Field color="danger" label={{ text: 'Alo', link: <a href="#">aaa</a> }} tachyons="mt3">
          <Input borderRadius={5} />
        </Field>
      </View>
    </Section>
  );
};

export default AboutPage;
