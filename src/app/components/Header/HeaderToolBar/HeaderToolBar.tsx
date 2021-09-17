import { IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { FC } from 'react';

interface Props {
	onOpenRequest:() => void;
	isDrawerOpen:boolean;
	currentLocation:string;
}

const useStyles = makeStyles({
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
});

const HeaderToolBar:FC<Props> = ({ onOpenRequest, isDrawerOpen, currentLocation }) => {
	const classes = useStyles();

	return(
		<Toolbar>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={onOpenRequest}
				edge="start"
				className={clsx(classes.menuButton, {
					[classes.hide]: isDrawerOpen,
				})}
			>
				<MenuIcon fontSize="large"/>
			</IconButton>
			<Typography variant="h4" noWrap>
				{currentLocation}
			</Typography>
		</Toolbar>
	);
}

export default HeaderToolBar;