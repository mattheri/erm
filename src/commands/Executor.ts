import { Command, Newable, UndoExecuteFunction } from "./Command";

class Executor {
	private instance:Command;
	private executeStack:UndoExecuteFunction[];

	constructor(instance:Newable) {
		this.instance = new instance();
		this.executeStack = [];
		this.execute();
	}

	private execute():void {
		this.executeStack.push(this.instance.execute());
	}

	public undo():void {
		this.executeStack[this.executeStack.length - 1]();
		this.executeStack.pop();
	}
}

export default Executor;