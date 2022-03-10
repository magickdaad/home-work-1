import React from 'react';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { FullArticle } from './components/FullArticle';

function App() {
  const pathname = window.location.pathname;
  const articleId = pathname.split('/')[2];

  return (
    <>
      <Header />
      {pathname === '/' && <Home />}
      {pathname === '/about' && <About />}
      {pathname === '/login' && <h1>Логин</h1>}
      {pathname.includes('/post/') && <FullArticle id={articleId} />}
      <Footer />
    </>
  );
}

export default App;
