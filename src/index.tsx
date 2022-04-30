import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#202020',
		secondary: '#909090',
		tertiary: '#fff',
		highlight: '#FFCB47',
	},
	spacing: {
		large: '920px',
	},
	fonts: {
		title: "'Montserrat', sans-serif",
		body: "'Montserrat', sans-serif",
	},
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</ThemeProvider>
);
