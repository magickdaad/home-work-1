import React from 'react';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';
import { FullArticle } from './components/FullArticle';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

function App() {
  // const pathname = window.location.pathname;
  // const articleId = window.location.pathname.split('/post/')[1];

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<FullArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
