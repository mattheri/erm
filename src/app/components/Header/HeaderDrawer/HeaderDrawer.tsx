import { createStyles, makeStyles, Theme, Drawer, IconButton, Divider } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { FC } from 'react';
import clsx from 'clsx';
import appTheme from "theme/theme";

interface Props {
	onCloseRequest:() => void;
	isDrawerOpen:boolean;
}

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    drawer: {
      width: appTheme.layout.sidebarWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: appTheme.layout.sidebarWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: appTheme.layout.closedSidebarWidth,
      [theme.breakpoints.up('sm')]: {
        width: appTheme.layout.closedSidebarWidth,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
);

const HeaderDrawer:FC<Props> = ({ onCloseRequest, isDrawerOpen, children }) => {
	const classes = useStyles();

	return(
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: isDrawerOpen,
				[classes.drawerClose]: !isDrawerOpen,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: isDrawerOpen,
					[classes.drawerClose]: !isDrawerOpen,
				}),
			}}
		>
			<div className={classes.toolbar}>
				<IconButton onClick={onCloseRequest}>
					<ChevronLeft fontSize="large" />
				</IconButton>
			</div>
			<Divider />
			{children}
		</Drawer>
	);
}

export default HeaderDrawer;