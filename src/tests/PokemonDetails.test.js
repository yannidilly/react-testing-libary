import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const moreDetailsLinkText = 'More details';

describe('Realiza testes da página de Detalhes de um Pokémon', () => {
  test('Testa se as informações detalhadas do pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    const moreDetailsLink = screen.queryByRole('link', { name: moreDetailsLinkText });
    userEvent.click(moreDetailsLink);
    expect(moreDetailsLink).not.toBeInTheDocument();
    const detailsTittle = screen.queryByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(detailsTittle).toBeInTheDocument();
    const summaryTittle = screen.queryByRole('heading', { level: 2, name: 'Summary' });
    expect(summaryTittle).toBeInTheDocument();
    const summaryText = screen.queryByText(/This intelligent Pokémon/i);
    expect(summaryText).toBeInTheDocument();
  });
  test('Testa se existe na página uma seção com os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const moreDetailsLink = screen.queryByRole('link', { name: moreDetailsLinkText });
    userEvent.click(moreDetailsLink);
    const altImageLocationText = 'Pikachu location';
    const locationTittle = screen.queryByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(locationTittle).toBeInTheDocument();
    const locationImages = screen.queryAllByAltText(altImageLocationText);
    expect(locationImages.length).toBe(2);
    const locationText1 = screen.queryByText('Kanto Viridian Forest');
    const locationText2 = screen.queryByText('Kanto Power Plant');
    expect(locationText1).toBeInTheDocument();
    expect(locationText2).toBeInTheDocument();
    expect(locationImages[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationImages[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(locationImages[0].alt).toBe(altImageLocationText);
    expect(locationImages[1].alt).toBe(altImageLocationText);
  });
  test('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const moreDetailsLink = screen.queryByRole('link', { name: moreDetailsLinkText });
    userEvent.click(moreDetailsLink);
    const favoriteCheckbox = screen.queryByRole('checkbox', { name: 'Pokémon favoritado?' });
    expect(favoriteCheckbox).toBeInTheDocument();
    // verificar se o checkbox adiciona e remove o pokemon da lista de favoritos
    const favoriteLabel = screen.getByLabelText('Pokémon favoritado?');
    expect(favoriteLabel).toBeInTheDocument();
  });
});
