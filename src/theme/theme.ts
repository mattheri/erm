export interface Breakpoints {
	[key:string]:number;
	sm:number;
	md:number;
	lg:number;
	xl:number;
}

export interface ResponsiveMediaQueries {
	[key:string]:string;
	xs:string;
	sm:string;
	md:string;
	lg:string;
	xl:string;
}

export interface Layout {
	sidebarWidth:number;
	closedSidebarWidth:number;
}

export interface Theme {
	breakpoints:Breakpoints;
	responsiveMq:ResponsiveMediaQueries;
	layout:Layout;
}

const theme:Theme = {
	breakpoints: {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	},
	get responsiveMq():ResponsiveMediaQueries {
		return Object.fromEntries(
			[
				['xs', `@media screen only and (max-width: ${this.breakpoints.sm - 1}px)`],
				...Object.keys(
					this.breakpoints
				).map(
					key => [key, `@media screen only and (min-width: ${key}px)`]
				)
			]
		)
	},
	layout: {
		sidebarWidth: 240,
		closedSidebarWidth: 64,
	}
};

export default theme;