import { Routes, Route } from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import Workout from './screens/Workout';
import SignUp from './screens/SignUp';

const Pages = () => {
  return (
    <>
      <Routes>
				<Route path="/" element={<Dashboard />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Pages;