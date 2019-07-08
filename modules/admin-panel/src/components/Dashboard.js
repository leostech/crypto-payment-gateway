import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import NavDrawer from './partial/NavDrawer';

import withAuth from './partial/withAuth';


const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		height: '100vh'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	},
	tips: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: theme.spacing(4)
	},
	tip: {
		padding: theme.spacing(4, 8, 4, 8),
		margin: theme.spacing(1),
		border: '3px solid ' + theme.palette.text.secondary,
		borderRadius: 13,
		cursor: 'pointer',
		color: theme.palette.text.secondary
	}
}));

function Dashboard({ user, history })
{
	const classes = useStyles();

	return (

		<div className={ classes.root }>
			<NavDrawer />
			<Container className={ classes.container } fixed>
				<Typography variant="h1" color="textSecondary">
					Welcome,<br/>
					{ user.username }!
				</Typography>
				<div className={ classes.tips }>
					<Button type="button" onClick={ () => history.push('/merchants') } className={ classes.tip }>
						Manage<br />
						Merchants
					</Button>
					<Button type="button" onClick={ () => history.push('/coins') } className={ classes.tip }>
						Manage<br />
						Crypto-currencies
					</Button>
					<Button type="button" onClick={ () => history.push('/admins') } className={ classes.tip }>
						Manage<br />
						Administrators
					</Button>
				</div>
			</Container>
		</div>

	);
}

Dashboard.propTypes = {
	user: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default withAuth(Dashboard);