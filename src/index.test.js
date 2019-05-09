import React from 'react';

import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from 'react-testing-library';

import 'jest-dom/extend-expect';

import DevelopmentWarnings from '.';

afterEach(cleanup);

it('renders without crashing', async () => {
  const { queryByText } = render(
    <DevelopmentWarnings>SomeApp</DevelopmentWarnings>,
  );
  fireEvent.mouseMove(queryByText(/someapp/i));

  const textNode = queryByText(/please(\s)note/i);

  expect(textNode).not.toBeInTheDocument();
});

it('renders without crashing', async () => {
  const { getByText, getAllByText } = render(
    <DevelopmentWarnings>SomeApp</DevelopmentWarnings>,
  );
  fireEvent.mouseLeave(getByText(/someapp/i));

  const textNode = await waitForElement(() => getAllByText(/please(\s)note/i));

  expect(textNode).toHaveLength(2);
});
