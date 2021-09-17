import { Button, ButtonProps } from '@material-ui/core';
import { FC } from 'react';
import { Link as NavigationLink, LinkProps } from 'react-router-dom';

type Props = ButtonProps & LinkProps;

const Link:FC<Props> = ({
	to,
	children,
	...props
}) => {
	return(
		<Button {...props}>
			<NavigationLink to={to}>
				{children}
			</NavigationLink>
		</Button>
	);
}

export default Link;