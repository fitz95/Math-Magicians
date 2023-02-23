import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
// import Link from '../Link';
import App from './App';

// Using React Testing Library
describe('Checking for the different pages information', () => {
  it('renders App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    // fails
    expect(screen.getByText('Home')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Quote')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });
});

// Checking If content is present for the Quote page
describe('Checking for route for Quote page ', () => {
  it('renders Quote Page', () => {
    render(
      <MemoryRouter initialEntries={['/Quote']}>
        <App />
      </MemoryRouter>,
    );
    // Getting quote author to show we effectively in quote page
    screen.getByText(/William Paul Thurson/);
    expect(screen.getByText(/William Paul Thurson/)).toBeInTheDocument();
  });
});
// Checking If content is present for the Calculator page
describe('Checking for route for Calculator page ', () => {
  it('renders Calculator Page', () => {
    render(
      <MemoryRouter initialEntries={['/Calculator']}>
        <App />
      </MemoryRouter>,
    );
    // Getting quote author to show we effectively in quote page
    screen.getByText(/Let's do Some Math!/);
    expect(screen.getByText(/Let's do Some Math!/)).toBeInTheDocument();
  });
});

describe('Checking for route for Calculator page ', () => {
  it('renders Calculator Page', () => {
    render(
      <MemoryRouter initialEntries={['/Calculator']}>
        <App />
      </MemoryRouter>,
    );
    // test to show that we were previously in the Calculator page before the user
    // clicks and goes to the Home
    screen.getByText('AC');
    expect(screen.getByText(/Let's do Some Math!/)).toBeInTheDocument();
    act(() => {
      // Find the link (perhaps using the text content)
      const goHomeLink = document.querySelector('#homepage');
      // Click it
      goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    // Check correct page content showed up and that we in the home page
    expect(screen.getByText(/Welcome To OUr Page/)).toBeInTheDocument();
    expect(screen.queryByText(/Let's do Some Math!/)).toBeNull();
  });
});
