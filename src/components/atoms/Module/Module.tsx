import ModuleModelContext, { moduleModel } from 'models/Module/ModuleModel';
import { FC, useContext } from 'react';

interface Props {
	module:string;
}

const ModuleConsumer:FC<Props> = ({ module, children}) => {
	const ModuleModel = useContext(ModuleModelContext);

	return ModuleModel.isModuleEnabled(module) ? <>{children}</> : null;
}

const Module:FC<Props> = ({module, children}) => {
	return (
		<ModuleModelContext.Provider value={moduleModel}>
			<ModuleConsumer module={module}>
				{children}
			</ModuleConsumer>
		</ModuleModelContext.Provider>
	);
}

export default Module;