import { CssBaseline } from '@material-ui/core';
import GlobalStyles from 'components/atoms/GlobalStyles/GlobalStyles';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import ErrorBoundary from '../Error/ErrorBoundary';

const Providers:FC = ({ children }) => {
	return(
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles />
				<ErrorBoundary>
					{children}
				</ErrorBoundary>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default Providers;