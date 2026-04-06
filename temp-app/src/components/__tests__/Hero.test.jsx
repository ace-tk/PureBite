import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';
import { describe, it, expect, vi } from 'vitest';

// Mock useNavigate
const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe('Hero Component', () => {
  const renderHero = (isLoggedIn = false) => {
    return render(
      <BrowserRouter>
        <Hero isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    );
  };

  it('renders correctly with headline and subheadline', () => {
    renderHero();
    expect(screen.getByText(/Fresh Grocery/i)).toBeInTheDocument();
    expect(screen.getByText(/Delivered/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience the taste of nature/i)).toBeInTheDocument();
  });

  it('shows Shop Now and Login buttons when not logged in', () => {
    renderHero(false);
    expect(screen.getByRole('button', { name: /Shop Now/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login to Start/i })).toBeInTheDocument();
  });

  it('shows View Process instead of Login when logged in', () => {
    renderHero(true);
    expect(screen.getByRole('button', { name: /Shop Now/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Login to Start/i })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View Process/i })).toBeInTheDocument();
  });

  it('navigates to /shop when Shop Now is clicked', () => {
    renderHero();
    fireEvent.click(screen.getByRole('button', { name: /Shop Now/i }));
    expect(mockedNavigate).toHaveBeenCalledWith('/shop');
  });
});
