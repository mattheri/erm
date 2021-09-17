export type Newable = { new(...args: any[]): any; };

export type UndoExecuteFunction = () => void;

export interface Command extends Newable {
	execute:() => UndoExecuteFunction;
	undo?:() => void;
}

export abstract class CommandBase {
	abstract execute():() => void;
	abstract undo():void;
}