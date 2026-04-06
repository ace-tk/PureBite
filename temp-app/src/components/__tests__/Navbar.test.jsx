import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import Navbar from '../Navbar';
import { describe, it, expect, vi } from 'vitest';

describe('Navbar Component', () => {
  const renderNavbar = (isLoggedIn = false) => {
    return render(
      <BrowserRouter>
        <CartProvider>
          <Navbar isLoggedIn={isLoggedIn} />
        </CartProvider>
      </BrowserRouter>
    );
  };

  it('renders PureBite logo', () => {
    renderNavbar();
    const logoElement = screen.getByText(/PureBite/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders Login button when not logged in', () => {
    renderNavbar(false);
    const loginButton = screen.getByRole('link', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('renders Dashboard and Logout when logged in', () => {
    renderNavbar(true);
    const dashboardLink = screen.getByRole('link', { name: /Dashboard/i });
    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    expect(dashboardLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('renders cart icon button', () => {
    renderNavbar();
    const cartButton = screen.getByRole('button', { name: /Cart/i });
    expect(cartButton).toBeInTheDocument();
  });
});
