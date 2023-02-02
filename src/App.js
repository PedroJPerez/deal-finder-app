import './categories.styles.scss';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Login from './routes/login/login.component';
import Shop from './routes/shop/shop.component';
import Premium from './routes/premium/premium.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Navigation />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='shop' element={<Shop />} />
        <Route path='premium' element={<Premium />} />
      </Route>
    </Routes>
  );
}

export default App;
