// RouterComponent.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import NavigationLayout from './components/NavigationLayout';
import NoMatchingRoute from './components/NoMatchingRoute';

const DummyTable = React.lazy(() => import('./tabs/dummyTable'));
const DummyChart = React.lazy(() => import('./tabs/dummyChart'));
const DummyList = React.lazy(() => import('./tabs/dummyList'));

function RouterComponent() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dummyTable");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationLayout />}>

        <Route
          path="dummyTable"
          element={
            <React.Suspense fallback={<>...</>}>
              <DummyTable />
            </React.Suspense>
          }
        />

        <Route
          path="dummyChart"
          element={
            <React.Suspense fallback={<>...</>}>
              <DummyChart />
            </React.Suspense>
          }
        />

        <Route
          path="dummyList"
          element={
            <React.Suspense fallback={<>...</>}>
              <DummyList />
            </React.Suspense>
          }
        />

        <Route path="*" element={<NoMatchingRoute />} />
      </Route>
    </Routes>
  );
}

export default RouterComponent;
