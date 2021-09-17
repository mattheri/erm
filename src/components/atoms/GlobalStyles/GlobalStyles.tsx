import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	
	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
		padding: 0;
	}
`;

export default GlobalStyles;