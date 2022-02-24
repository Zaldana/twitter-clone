import React from "react";
import { Provider } from 'react-redux'
import store from "./reduxStore";
import HomePage from './components/pages/HomePage';
import ProtectedHomePage from "./components/pages/ProtectedHomePage";
import SignIn from "./components/pages/SignIn";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="protected-homepage" element={<ProtectedHomePage />} />
          </Routes>
        </BrowserRouter>
        </div>
    </Provider>
  );
}

export default App;
