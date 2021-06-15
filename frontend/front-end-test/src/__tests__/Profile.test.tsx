import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Profile from '../pages/Profile';

afterEach(() => {
    jest.clearAllMocks();
  });

describe('Profile', () => {
    test('render profile details', ()=>{
        render(<Profile />);
    });
});