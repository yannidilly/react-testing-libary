import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';

describe('Realiza testes na página Not Found', () => {
  test('Testa se o conteúdo da página Not Found é igual ao esperado', () => {
    render(<NotFound />);
    const notFoundTitle = screen.queryByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(notFoundTitle).toBeInTheDocument();
    const notFoundImage = screen.queryByRole('img', { name: 'Pikachu crying because the page requested was not found' });
    expect(notFoundImage.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
