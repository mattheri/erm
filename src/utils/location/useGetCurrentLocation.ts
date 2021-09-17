import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import routes from "routes/routes";

const useGetCurrentLocation = () => {
	const [capitalizedCurrentLocation, setCapitalizedCurrentLocation] = useState("Home");
	const pathname = useLocation().pathname;
	const locations = Object.keys(routes);
	const currentLocation = locations.find(location => location.includes(pathname.split('/')[1])) || "home";

	const capitalizePathname = (pathname:string) => {
		return pathname.charAt(0).toUpperCase() + currentLocation.slice(1);
	}

	useEffect(
		() => {
			setCapitalizedCurrentLocation(capitalizePathname(currentLocation));
		},
		[pathname]
	);
	
	return capitalizedCurrentLocation;
};

export default useGetCurrentLocation;