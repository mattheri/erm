import { Component, PropsWithChildren } from 'react';
import ErrorPage from './ErrorPage';

interface Props extends PropsWithChildren<{}> {}

class ErrorBoundary extends Component {
	state:{ 
		hasError:boolean,
		error:Error | null
	};

	constructor(props:Props) {
		super(props);
		this.state = { 
			hasError: false,
			error: null
		};
	}

	static getDerivedStateFromError(error:Error) {
		return { hasError: true, error };
	}

	componentDidCatch(error:Error, info:any) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasError) {
			return <ErrorPage error={this.state.error?.message} />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;