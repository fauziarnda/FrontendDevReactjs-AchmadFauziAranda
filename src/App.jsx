import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainRestaurant from './pages/MainRestaurant';
import DetailRestaurant from './pages/DetailRestaurant';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRestaurant />} />
        <Route path="/restaurant/:id" element={<DetailRestaurant />} />
      </Routes>
    </BrowserRouter>
  );
}
