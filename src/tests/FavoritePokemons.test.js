import { render, screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

const favoritePokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
    summary: 'This intelligent Pokémon roasts hard berries with electricity',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Alola Route 3',
        map: 'https://cdn2.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 3',
        map: 'https://cdn2.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 4',
        map: 'https://cdn2.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
      },
      {
        location: 'Kanto Rock Tunnel',
        map: 'https://cdn2.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
      },
    ],
    summary: 'The flame on its tail shows the strength of its life force.',
  },
];

describe('Realiza testes na página de Pokémons Favoritos', () => {
  test('Testa se a página está vazia quando não tem nenhum pokémon na lista de favoritos', async () => {
    render(<FavoritePokemons pokemons={ [] } />);
    const noFavoritePokemonText = screen.queryByText('No favorite pokemon found');
    expect(noFavoritePokemonText).toBeInTheDocument();
  });
  test('Testa se a página não está vazia quando tem pokémons na lista de favoritos', () => {
    renderWithRouter(<FavoritePokemons pokemons={ favoritePokemons } />);
    const noFavoritePokemonText = screen.queryByText('No favorite pokemon found');
    expect(noFavoritePokemonText).not.toBeInTheDocument();

    const pikachuName = screen.queryByText('Pikachu');
    const pikachuType = screen.queryByText('Electric');
    const pikachuWeight = screen.queryByText('Average weight: 6.0 kg');
    expect(pikachuName).toBeInTheDocument();
    expect(pikachuType).toBeInTheDocument();
    expect(pikachuWeight).toBeInTheDocument();

    const charmanderName = screen.queryByText('Charmander');
    const charmanderType = screen.queryByText('Fire');
    const charmanderWeight = screen.queryByText('Average weight: 8.5 kg');
    expect(charmanderName).toBeInTheDocument();
    expect(charmanderType).toBeInTheDocument();
    expect(charmanderWeight).toBeInTheDocument();
  });
});
