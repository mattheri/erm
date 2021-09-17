import { observable } from "mobx";
import BaseModel from "models/BaseModel";
import ErrorModel from "models/Error/ErrorModel";
import { createContext } from "react";
import { EnabledModule } from "./Module";

class ModuleModel extends BaseModel {
	static displayName = "ModuleModel";
	static instance:ModuleModel;

	private constructor(
		errorModel:ErrorModel,
	) {
		super(errorModel);
	}

	static init():ModuleModel {
		if (!ModuleModel.instance) {
			ModuleModel.instance = new ModuleModel(
				new ErrorModel(this.displayName),
			);
		}
		return ModuleModel.instance;
	}

	@observable enabledModules:EnabledModule[] = [
		{
			clientId: "",
			from: new Date(Date.now()),
			name: "task",
			description: "Manages single tasks",
			to: null,
		}
	];

	public isModuleEnabled(module:string):boolean {
		const currentModule = module;

		if (currentModule) {
			const module = this.findModule(currentModule);
			
			if (module) {
				const currentDate = new Date(Date.now());

				const from = module.from;
				const to = module.to;

				if (from.getTime() <= currentDate.getTime()) {
					if (to && to.getTime() > currentDate.getTime()) return true;
					else if (!to) return true;

					this.entryIsNotAllowed("isModuleEnabled");

					return false;
				}
			}
		}

		this.entryIsNotAllowed("isModuleEnabled");

		return false;
	}

	private entryIsNotAllowed(method:string) {
		this.errorModel.generateError(method, "Uh oh. Seems like you don't have access to this module");
	}

	private removeModule(module:EnabledModule):void {}

	private addModule(module:EnabledModule):void {}

	private updateModule(module:EnabledModule):void {}

	private findModule(module:EnabledModule | string):EnabledModule | null {
		if (typeof module === "string") return this.enabledModules.find(mod => mod.name === module) || null;

		return this.enabledModules.find(mod => mod.name === module.name) || null;
	}
}

export const moduleModel = ModuleModel.init();

const ModuleModelContext = createContext(moduleModel);

export default ModuleModelContext;