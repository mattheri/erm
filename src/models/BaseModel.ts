import ErrorModel from "./Error/ErrorModel";

abstract class BaseModel {
	errorModel:ErrorModel;

	constructor(
		errorModel:ErrorModel
	) {
		this.errorModel = errorModel;
	}
}

export default BaseModel;