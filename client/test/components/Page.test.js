import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, test } from '@jest/globals';
import { VALID_CONFIG_RESPONSE } from '../sharedMocks';
import Page from '../../src/components/Page';

describe('Page', () => {
	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockResponse(VALID_CONFIG_RESPONSE);
		render(<Page />);
	});

	test('base: Changes to close button on About page', async () => {
		const menuToggle = screen.getByTestId('menu-toggle');
		await waitFor(() => user.click(menuToggle));
		const aboutButton = screen.getByTestId('about-button');
		await waitFor(() => user.click(aboutButton));
		const closeAboutButton = screen.getByTestId('close-about-button');
		expect(closeAboutButton).toBeTruthy();
		await waitFor(() => user.click(closeAboutButton));
		expect(closeAboutButton.classList.contains('show')).toBe(false);
	});
});
