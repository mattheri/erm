import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { FC } from 'react';
import appTheme from "theme/theme";

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      paddingLeft: theme.spacing(13)
    },
  }),
);

const Main:FC = ({ children }) => {
	const classes = useStyles();

	return(
		<main className={classes.content}>
			<div className={classes.toolbar} />
      {children}
		</main>
	);
}

export default Main;