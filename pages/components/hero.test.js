import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import Hero from './Hero';

afterEach(cleanup);

test('renders a hero component with title, subtitle, and image carousel', async () => {
    const title = 'Welcome to Our Website';
    const subtitle = 'We believe in quality';
    const images = ['image1.png', 'image2.png', 'image3.png'];

    render(<Hero title={title} subtitle={subtitle} images={images} />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Slide 0/ })).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /Next/ });
    const prevButton = screen.getByRole('button', { name: /Previous/ });

    fireEvent.click(nextButton);

    await waitFor(() => screen.getByRole('img', { name: /Slide 1/ }));

    fireEvent.click(prevButton);

    await waitFor(() => screen.getByRole('img', { name: /Slide 0/ }));

});
