import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ListItem from '../components/Details/ListItem';

describe('Test for List of each Country', () => {
  test('Country List Item Renders correctly: ', () => {
    const totalConfirmed = '10000';
    const ListCountry = renderer.create(
      <MemoryRouter>
        <ListItem countries="Ethiopia" TotalConfirmed={totalConfirmed} />
      </MemoryRouter>,
    ).toJSON();
    expect(ListCountry).toMatchSnapshot();
  });
});
