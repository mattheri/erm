import { AppBar, createStyles, makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx'
import { FC } from 'react';
import AppTheme from "theme/theme";
import HeaderToolBar from '../HeaderToolBar/HeaderToolBar';

interface Props {
	onOpenRequest:() => void;
	isDrawerOpen:boolean;
	currentLocation:string;
}

const useStyles = makeStyles((theme:Theme)=> createStyles({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: AppTheme.layout.sidebarWidth,
		width: `calc(100% - ${AppTheme.layout.sidebarWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
}))

const HeaderAppBar:FC<Props> = ({ onOpenRequest, isDrawerOpen, currentLocation }) => {
	const classes = useStyles();

	return(
		<AppBar
			className={clsx(classes.appBar, {
				[classes.appBarShift]: isDrawerOpen,
			})}
		>
			<HeaderToolBar
				onOpenRequest={onOpenRequest}
				isDrawerOpen={isDrawerOpen}
				currentLocation={currentLocation}
			/>
		</AppBar>
	);
}

export default HeaderAppBar;