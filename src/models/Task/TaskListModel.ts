import { action, observable } from "mobx";
import BaseModel from "models/BaseModel";
import ErrorModel from "models/Error/ErrorModel";
import LoadingModel from "models/Loading/LoadingModel";
import { createContext } from "react";
import { Task } from "./Task";

class TaskListModel extends BaseModel {
	static displayName:string = "TaskListModel";
	private loadingModel:LoadingModel;

	static instance:TaskListModel;

	private constructor(
		errorModel:ErrorModel,
		loadingModel:LoadingModel,
	) {
		super(errorModel);
		this.loadingModel = loadingModel;
	}

	static init():TaskListModel {
		if (!TaskListModel.instance) {
			TaskListModel.instance = new TaskListModel(
				new ErrorModel(this.displayName),
				new LoadingModel(),
			);
		}
		return TaskListModel.instance;
	}

	@observable tasks:Task[] = [];

	@action
	addTaskToTaskList(task:Task):void {
		this.injectTaskInTaskList(task);
	}

	@action
	removeTaskFromTaskList(task:Task):void {
		this.tasks = this.tasks.filter(
			(t) => t.id !== task.id
		);
	}

	@action
	updateTask(task:Task):(updatedTask:Omit<Task, "id">) => void {
		const foundTask = this.findTaskInTaskList(task);

		return (updatedTask:Omit<Task, "id">) => {
			if (foundTask) {
				const newTask:Task = {
					...foundTask,
					...updatedTask,
				}

				this.injectTaskInTaskList(newTask);
			}
		}
	}

	public async fetchTasks() {
		try {
			this.loadingModel.isLoading().isNotDone();
		}
		
		catch (error) {
			const e = error as Error;

			this.errorModel.generateError(
				"fetchTasks",
				e.message
			);
		}

		finally {
			this.loadingModel.isNotLoadingOrSaving().isDone();
		}
	}

	private injectTaskInTaskList(task:Task):Task {
		for (let i = 0; i < this.tasks.length; i++) {
			if (this.tasks[i].id === task.id) {
				return this.tasks[i] = task;
			}
		}

		this.tasks.push(task);

		return task;
	}

	private findTaskInTaskList(task:Task):Task | null {
		return this.tasks.find(
			(t) => t.id === task.id
		) || null;
	}

	private createError(method:string, message:string):void {
		this.errorModel.generateError(
			method,
			message
		);
	}
}

const taskListModel = TaskListModel.init();

export default taskListModel;

export const TaskListModelContext = createContext(taskListModel);