import Main from 'components/atoms/Main/Main';
import { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import ModuleRouter from './ModuleRouter';

const Router:FC = () => {
	return(
		<Main>
			<Switch>
				<Route path='/'>
					<Route path=':module'>
						<ModuleRouter />
					</Route>
				</Route>
				<Route path='admin'>

				</Route>
			</Switch>
		</Main>
	);
}

export default Router;