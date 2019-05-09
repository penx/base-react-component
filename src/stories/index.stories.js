import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// import { Welcome } from '@storybook/react/demo';

import DevelopmentWarnings from '..';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

const stories = storiesOf('DevelopmentWarnings', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <DevelopmentWarnings
    dev={boolean('dev', false)}
    message={text('message', undefined)}
  >
    <h1>Some App</h1>
  </DevelopmentWarnings>
));
