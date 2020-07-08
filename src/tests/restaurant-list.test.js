import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantList from '../component/restaurant-list/restaurant-list';
import store from '../redux/store';
import { Provider } from 'react-redux';

test('Should render Restaurant list component', () => {
    const result = render(<React.StrictMode>
        <Provider store={store}>
          <RestaurantList />
        </Provider>
      </React.StrictMode>);
    expect(result).toBeTruthy();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

});
