import { CommandBase } from "commands/Command";
import Executor from "commands/Executor";

class CreateTaskCommand implements CommandBase {
	constructor() {}

	execute():() => void {
		return () => {}
	}

	undo():void {}
}

export default new Executor(CreateTaskCommand).undo;