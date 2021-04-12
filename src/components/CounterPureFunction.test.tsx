import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import CounterPureFunction from './CounterPureFunction';

test('renders count', async() => {
    render(<CounterPureFunction />);
    const count = await screen.findByRole("counter");
    expect(count.textContent).toEqual("0");
});

test('increments by 1 when clicking increment button', async() => {
    render(<CounterPureFunction />);

    const button = await screen.findByRole("increment");
    const count = await screen.findByRole("counter");
    expect(count.textContent).toEqual("0");

    userEvent.click(button);

     expect(count.textContent).toEqual("1");
});

test('decrements by 1 when clicking increment button', async() => {
    render(<CounterPureFunction />);

    const button = await screen.findByRole("decrement");
    const count = await screen.findByRole("counter");
    expect(count.textContent).toEqual("0");

    userEvent.click(button);

     expect(count.textContent).toEqual("-1");
});
