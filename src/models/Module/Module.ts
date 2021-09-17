export interface Module {
	name:string;
	description:string;
}

export interface EnabledModule extends Module {
	clientId:string;
	from:Date;
	to:Date | null;
}

