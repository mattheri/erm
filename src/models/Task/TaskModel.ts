import { observable, action } from "mobx";
import BaseModel from "models/BaseModel";
import ErrorModel from "models/Error/ErrorModel";
import LoadingModel from "models/Loading/LoadingModel";
import { nanoid } from "nanoid";
import { createContext } from "react";
import { Task } from "./Task";

class TaskModel extends BaseModel {
	static displayName = "TaskModel";
	private loadingModel:LoadingModel;

	static instance:TaskModel;

	private constructor(
		errorModel:ErrorModel,
		loadingModel:LoadingModel,
	) {
		super(errorModel);
		this.loadingModel = loadingModel;
	}

	static init() {
		if (!TaskModel.instance) {
			TaskModel.instance = new TaskModel(
				new ErrorModel(this.displayName),
				new LoadingModel(),
			);
		}

		return TaskModel.instance;
	}

	@observable task:Task = {
		id: nanoid(),
	};

	async fetchTasks() {
		try {
			this.loadingModel.isLoading();
		}
		catch (e) {
			const error = e as Error;

			this.createError(
				"fetchTasks",
				error.message
			);

			this.loadingModel.isError();
		} finally {
			this.loadingModel.isDoneNotLoadingOrSaving();
		}
	}

	private createError(method:string, message:string) {
		this.errorModel.generateError(
			method,
			message
		);
	}
}

const taskModel = TaskModel.init();

export default taskModel;

export const TaskModelContext = createContext(taskModel);