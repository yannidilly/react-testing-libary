import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';

const pokemon = {
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
};

describe('Testa o card de um Pokémon', () => {
  test('Testa se o card é renderizado com as informações do Pokémon passado', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ false } />);
    const pikachuName = screen.queryByText('Pikachu');
    const pikachuType = screen.queryByText('Electric');
    const pikachuWeight = screen.queryByText('Average weight: 6.0 kg');
    const pikachuImage = screen.queryByRole('img', { name: 'Pikachu sprite' });

    expect(pikachuName).toBeInTheDocument();
    expect(pikachuType).toBeInTheDocument();
    expect(pikachuWeight).toBeInTheDocument();
    expect(pikachuImage).toBeInTheDocument();
    expect(pikachuImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pikachuImage.alt).toBe('Pikachu sprite');
  });
  test('Testa se o link do card Pokémon encaminha para a página de detalhes do Pokémon correto', () => {
    const { history } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite={ false }
    />);
    const moreDetailsLink = screen.queryByRole('link', { name: 'More details' });
    expect(moreDetailsLink).toBeInTheDocument();
    expect(moreDetailsLink.href).toContain('/pokemons/25');
    userEvent.click(moreDetailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });
  test('Testa se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);
    const starIcon = screen.queryByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(starIcon).toBeInTheDocument();
    expect(starIcon.src).toContain('/star-icon.svg');
    expect(starIcon.alt).toBe('Pikachu is marked as favorite');
  });
});
