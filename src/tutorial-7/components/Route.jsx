import React from 'react';

const Route = ({ path, element, exact }) => {
  const pathname = window.location.pathname;
  if (exact) {
    if (pathname === path) {
      return element;
    }
  } else {
    if (pathname.includes(path)) {
      return element;
    }
  }
  return null;
};

export default Route;
