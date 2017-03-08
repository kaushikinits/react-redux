import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ViewBooks from '../app-components/view-books';

const AppRouteSettings = (
    <Route path="/">
      <IndexRoute name="viewAll" component={ViewBooks} />
      <Route name="viewBook" path="view/:id" component={ViewBooks} />
    </Route>
)

export default AppRouteSettings;
