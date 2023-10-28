// RouterComponent.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import NavigationLayout from './components/NavigationLayout';
import NoMatchingRoute from './components/NoMatchingRoute';
import CircularLoader from './components/CircularLoader';

const DummyTable = React.lazy(() => import('./tabs/DummyTable'));
const DummyChart = React.lazy(() => import('./tabs/DummyChart'));
const DummyList = React.lazy(() => import('./tabs/DummyList'));

function RouterComponent() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/backendless-tabs-jsx/dummyTable");
  }, []);

  return (
    <Routes>
      <Route path="/backendless-tabs-jsx/" element={<NavigationLayout />}>

        <Route
          path="/backendless-tabs-jsx/dummyTable"
          element={
            <React.Suspense fallback={<CircularLoader />}>
              <DummyTable />
            </React.Suspense>
          }
        />

        <Route
          path="/backendless-tabs-jsx/dummyChart"
          element={
            <React.Suspense fallback={<CircularLoader />}>
              <DummyChart />
            </React.Suspense>
          }
        />

        <Route
          path="/backendless-tabs-jsx/dummyList"
          element={
            <React.Suspense fallback={<CircularLoader />}>
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
