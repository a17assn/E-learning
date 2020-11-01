import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import Activate from "./containers/Activate";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";

import { Provider } from "react-redux";
import store from "./redux/store";

import CustomLayout from "./hocs/Layout";

const App = () => (
  <Provider store={store}>
    <Router>
      <CustomLayout>
        <Switch>
          <Route exact path="/" component={AssignmentList} />
          <Route exact path="/assignments/:id" component={AssignmentDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/reset_password' component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
          <Route exact path="/activate/:uid/:token" component={Activate} />

        </Switch>
      </CustomLayout>
    </Router>
  </Provider>
);

export default App;
