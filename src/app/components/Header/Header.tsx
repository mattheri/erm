import { FC, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import HeaderAppBar from './HeaderAppBar/HeaderAppBar';
import useGetCurrentLocation from 'utils/location/useGetCurrentLocation';
import HeaderDrawer from './HeaderDrawer/HeaderDrawer';
import useRoutesListGenerator from './hooks/UseRoutesListGenerator';
import HeaderModuleList from './HeaderModuleList/HeaderModuleList';

const Header:FC = () => {

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const openDrawer = () => setIsDrawerOpen(true);
	const closeDrawer = () => setIsDrawerOpen(false);

	const currentLocation = useGetCurrentLocation();

	const routesList = useRoutesListGenerator();

	return(
		<HeaderContainer>
      <CssBaseline />
			<HeaderAppBar
				onOpenRequest={openDrawer}
				isDrawerOpen={isDrawerOpen}
				currentLocation={currentLocation}
			/>
      <HeaderDrawer
				isDrawerOpen={isDrawerOpen}
				onCloseRequest={closeDrawer}
			>
				<HeaderModuleList routes={routesList} />
			</HeaderDrawer>
		</HeaderContainer>
	);
}

export default Header;