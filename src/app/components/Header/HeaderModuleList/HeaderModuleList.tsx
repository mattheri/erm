import { FC } from 'react';
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { List, ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from "@material-ui/core";
import Link from 'components/molecules/Link/Link';
import NavLink from 'components/molecules/NavLink/NavLink';
import styled from 'styled-components';

interface RouteIcon {
	route:string;
	icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface Props {
	routes:Record<string, RouteIcon>;
}

const ItemText = styled(ListItemText)`
	text-transform: uppercase;
	text-decoration: none;
	color: inherit;
	font-size: 1.8rem;
`;

const ItemIcon = styled(ListItemIcon)`
	display: flex;
`;

const HeaderModuleList:FC<Props> = ({ routes }) => {
	return(
		<List>
			{Object.entries(routes).map(([key, { route, icon: Icon }]) => (
				<NavLink to={route} key={key}>
					<ItemIcon>
						<Icon fontSize="large" />
					</ItemIcon>
					<ListItem>
						<ItemText primary={key} />
					</ListItem>
				</NavLink>
			))}
		</List>
	);
}

export default HeaderModuleList;