import TaskModule from "app/components/Tasks/TaskModule";
import { FC } from "react";

export const moduleRoutes = {
	'task': TaskModule
};

type ModuleRoutes<T> = {
	[K in keyof T]: string
}

const constructedModuleRoutes = Object.fromEntries(
	Object.keys(moduleRoutes).map(key => [key, `/${key}`])
)

const routes = {
	home: '/',
	...constructedModuleRoutes as ModuleRoutes<typeof moduleRoutes>,
}

export default routes;