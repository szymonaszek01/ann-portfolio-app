import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components';
import { HomePage } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
