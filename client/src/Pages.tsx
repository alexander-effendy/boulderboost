import { Routes, Route } from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import Workout from './screens/Workout';

const Pages = () => {
  return (
    <>
      <Routes>
				<Route path="/" element={<Dashboard />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </>
  );
};

export default Pages;