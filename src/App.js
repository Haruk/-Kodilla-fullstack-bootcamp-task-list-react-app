import { About } from './components/About/About.js';
import Container from './components/Container/Container.js';
import { Favourite } from './components/Favourite/Favourite.js';
import { Home } from './components/Home/Home.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound.js';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};