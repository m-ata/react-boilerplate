import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} >
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
