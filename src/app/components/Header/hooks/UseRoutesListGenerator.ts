import { useMemo } from "react";
import routes from "routes/routes";
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

const routesIcons:Record<string, OverridableComponent<SvgIconTypeMap<{}, "svg">>> = {
	"home": HomeIcon,
	"task": AssignmentIcon
}

const useRoutesListGenerator = () => {
	return useMemo(() => Object.fromEntries(
		Object.entries(routes)
							.map(([key, route]) => [key, {  route, icon: routesIcons[key] }])
	), []);
};

export default useRoutesListGenerator;