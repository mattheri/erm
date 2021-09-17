import { makeStyles } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles({
	root: {
		display: 'flex',
	}
});

const HeaderContainer:FC = ({ children }) => {
	const classes = useStyles();

	return(
		<div className={classes.root}>
			{children}
		</div>
	);
}

export default HeaderContainer;