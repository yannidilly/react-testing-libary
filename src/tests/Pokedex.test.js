import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Realiza testes na página Home', () => {
  test('Testa se possui o título /Encountered pokémons/i', () => {
    renderWithRouter(<App />);
    const tittle = screen.queryByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(tittle).toBeInTheDocument();
  });
  test('Testa se apenas um Pokémon está aparecendo na tela de cada vez', () => {
    renderWithRouter(<App />);
    const pokemonImage = screen.queryAllByRole('img');
    expect(pokemonImage.length).toBe(1);
    const pokemonMoreDatailsLink = screen.queryAllByRole('link', { name: 'More details' });
    expect(pokemonMoreDatailsLink.length).toBe(1);
  });
  test('Testa se o próximo Pokémon da lista aparece quando o botão é clicado', () => {
    renderWithRouter(<App />);
    const nextPokemonButton = screen.queryByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(nextPokemonButton);
    const pokemonName1 = screen.queryByText('Charmander');
    expect(pokemonName1).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName2 = screen.queryByText('Caterpie');
    expect(pokemonName2).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName3 = screen.queryByText('Ekans');
    expect(pokemonName3).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName4 = screen.queryByText('Alakazam');
    expect(pokemonName4).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName5 = screen.queryByText('Mew');
    expect(pokemonName5).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName6 = screen.queryByText('Rapidash');
    expect(pokemonName6).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName7 = screen.queryByText('Snorlax');
    expect(pokemonName7).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName8 = screen.queryByText('Dragonair');
    expect(pokemonName8).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const pokemonName9 = screen.queryByText('Pikachu');
    expect(pokemonName9).toBeInTheDocument();
  });
  test('Teste se existem botões de filtros', () => {
    renderWithRouter(<App />);
    // como capturar vários botões com o mesmo data-testid ?
    // const typeButton = screen.getByTestId('pokemon-type-button');
  });
});
