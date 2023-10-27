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
    navigate("/dummyChart");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationLayout />}>

        <Route
          path="dummyTable"
          element={
            <React.Suspense fallback={<CircularLoader />}>
              <DummyTable />
            </React.Suspense>
          }
        />

        <Route
          path="dummyChart"
          element={
            <React.Suspense fallback={<CircularLoader />}>
              <DummyChart />
            </React.Suspense>
          }
        />

        <Route
          path="dummyList"
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
