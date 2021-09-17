export interface Task {
	id:string;
	[key:string]:string | number | boolean | Task[];
}

export interface Status {
	loading:boolean;
	error:boolean;
	saving:boolean;
	done:boolean;
}