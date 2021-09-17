import Container from 'components/atoms/Container/Container';
import { FC } from 'react';
import errorBg from 'assets/images/error-bg.jpg';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Link from 'components/molecules/Link/Link';

interface Props {
	error?:string;
}

const BackgroundImage = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${errorBg});
	background-size: cover;
	background-position: center;
	height: 100vh;
	width: 100%;
	background-repeat: no-repeat;
	z-index: -1;
`;

const ErrorMessage = styled(Typography)`
	color: white;
	font-size: 5rem !important;
`;

const ErrorPage:FC<Props> = ({ error }) => {
	const rawErrorMessage = error?.match(/(?=>\s).+/);
	const errorMessage = rawErrorMessage?.length ? rawErrorMessage[0].replace('>', '') : 'Something went wrong';

	const reloadOnClick = () => window.location.reload();

	return(
		<Container
			flex
			fluid
			noGutters
			fullHeight
			align="center"
			justify="center"
			direction="column"
		>
			<ErrorMessage>{errorMessage}</ErrorMessage>
			<Link
				to='/'
				variant="contained"
				size="large"
				color="primary"
				onClick={reloadOnClick}
			>Go back home</Link>
			<BackgroundImage />
		</Container>
	);
}

export default ErrorPage;