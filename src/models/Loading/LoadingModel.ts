import { action, observable } from "mobx";
import { LoadingStatus } from "./Loading";


class LoadingModel {
	@observable loadingStatus:LoadingStatus = {
		loading: true,
		error: false,
		saving: false,
		done: false
	}

	@action
	private updateLoadingStatus(status:Partial<LoadingStatus>):LoadingModel {
		this.loadingStatus = {
			...this.loadingStatus,
			...status
		}

		return this;
	}

	isError():LoadingModel {
		return this.updateLoadingStatus({
			error: true
		});
	}

	isDone():LoadingModel {
		return this.updateLoadingStatus({
			done: true
		})
	}

	isLoading():LoadingModel {
		return this.updateLoadingStatus({
			loading: true,
			done: false
		})
	}

	isSaving():LoadingModel {
		return this.updateLoadingStatus({
			saving: true,
			done: false
		})
	}

	isNotLoading():LoadingModel {
		return this.updateLoadingStatus({
			loading: false
		})
	}

	isNotSaving():LoadingModel {
		return this.updateLoadingStatus({
			saving: false
		})
	}

	isNotDone():LoadingModel {
		return this.updateLoadingStatus({
			done: false
		})
	}

	isNotError():LoadingModel {
		return this.updateLoadingStatus({
			error: false
		})
	}

	isNotLoadingOrSaving():LoadingModel {
		return this.updateLoadingStatus({
			loading: false,
			saving: false
		})
	}

	isLoadingOrSaving():LoadingModel {
		return this.updateLoadingStatus({
			loading: true,
			saving: true,
			done: false
		})
	}

	isNotLoadingOrSavingOrDone():LoadingModel {
		return this.updateLoadingStatus({
			loading: false,
			saving: false,
			done: false
		})
	}

	isLoadingNotDone():LoadingModel {
		return this.updateLoadingStatus({
			loading: true,
			done: false
		})
	}

	isLoadingOrSavingNotDone():LoadingModel {
		return this.updateLoadingStatus({
			loading: true,
			saving: true,
			done: false
		})
	}

	isDoneNotLoadingOrSaving():LoadingModel {
		return this.updateLoadingStatus({
			loading: false,
			saving: false,
			done: true
		})
	}
}

export default LoadingModel;