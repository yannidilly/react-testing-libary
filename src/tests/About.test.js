import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';

describe('Realiza os testes do componente About', () => {
  test('Testa se o conteúdo da página está correto', () => {
    render(<About />);
    const aboutTittle = screen.queryByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(aboutTittle).toBeInTheDocument();
    const paragrafo1 = screen.queryByText(/This application simulates a Pokédex/i);
    const paragrafo2 = screen.queryByText(/One can filter Pokémons by type/i);
    expect(paragrafo1).toBeInTheDocument();
    expect(paragrafo2).toBeInTheDocument();

    const pokedexImage = screen.queryByRole('img', { name: 'Pokédex' });
    expect(pokedexImage).toBeInTheDocument();
    expect(pokedexImage.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
