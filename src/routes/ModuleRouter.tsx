import Module from 'components/atoms/Module/Module';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { moduleRoutes } from './routes';

const ModuleRouter:FC = () => {
	const module = useParams().module;

	const ModuleComponent = (moduleRoutes as Record<string, FC<{}>>)[`${module}`];

	return(
		<Module module={`${module}`}>
			<ModuleComponent />
		</Module>
	);
}

export default ModuleRouter;