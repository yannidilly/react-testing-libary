import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Realiza os testes do componente App', () => {
  test('Testa se o link Home encaminha para a página Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.queryByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testa se o link About encaminha para a página About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.queryByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testa se o link Favorite Pokémons encaminha para a página Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);
    const favoritePokemonsLink = screen.queryByRole('link', { name: 'Favorite Pokémons' });
    expect(favoritePokemonsLink).toBeInTheDocument();
    userEvent.click(favoritePokemonsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testa se renderiza a página Not Found quando está em uma rota desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pagina-desconhecida');
    });
    const notFoundTitle = screen.queryByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
