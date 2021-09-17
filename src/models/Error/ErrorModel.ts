export default class ErrorModel {
	module:string;
	
	constructor(module:string) {
		this.module = module;
	}

	public generateError(method:string, messsage:string) {
		throw new Error(`${this.module}:${method} => ${messsage}`);
	}
}