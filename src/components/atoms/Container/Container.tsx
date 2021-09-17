import { CSSProperties, FC } from 'react';
import styled, {  } from 'styled-components';
import { createFlexLayout } from 'utils/css/Layout';

export type AsProp = keyof HTMLElementTagNameMap;

export interface ContainerProps {
	fluid?:boolean;
	noGutters?:boolean;
	flex?:boolean;
	fullHeight?:boolean;
	justify?:CSSProperties['justifyContent'];
	align?:CSSProperties['alignItems'];
	wrap?:CSSProperties['flexWrap'];
	direction?:CSSProperties['flexDirection'];
	as?:AsProp;
}

const BaseContainer = styled.div<Required<ContainerProps>>`
	width: 100%;
	min-height: 0.1rem;
	margin: 0 auto;
	position: relative;
	max-width: ${({ fluid }) => (fluid ? '100%' : '110rem')};
	padding: 0 ${({  noGutters }) => (noGutters ? '0' : '1.5rem')};
	${({ fullHeight }) => fullHeight && 'height: 100vh;'}
	${({
		flex,
		justify,
		align,
		wrap,
		direction,
	}) => (
		flex && createFlexLayout(
			justify,
			align,
			wrap,
			direction,
		)
	)}
`;

const Container:FC<ContainerProps> = ({
	fluid = false,
	noGutters = false,
	fullHeight = false,
	flex = false,
	justify = 'flex-start',
	align = 'flex-start',
	wrap = 'wrap',
	direction = 'row',
	as = "div",
	children,
}) => {
	return (
		<BaseContainer
			fluid={fluid}
			noGutters={noGutters}
			fullHeight={fullHeight}
			flex={flex}
			justify={justify}
			align={align}
			wrap={wrap}
			direction={direction}
			as={as}
		>
			{children}
		</BaseContainer>
	);
}

export default Container;