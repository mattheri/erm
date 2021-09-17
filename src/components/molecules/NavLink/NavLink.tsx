import { ListItem, ListItemProps } from '@material-ui/core';
import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = LinkProps & ListItemProps;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

const NavLink:FC<Props> = ({ to, children }) => {
	return(
		<StyledLink to={to}>
			<ListItem button>
				{children}
			</ListItem>
		</StyledLink>
	);
}

export default NavLink;