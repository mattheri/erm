import { CSSProperties } from "react";
import { css } from "styled-components";

export const Flex = css`
	display: flex;
`;

export const CenterFlex = css`
	${Flex};
	justify-content: center;
	align-items: center;
`;

export const createFlexLayout = (
	justifyContent:CSSProperties["justifyContent"] = "center",
	alignItems:CSSProperties["alignItems"] = "center",
	flexWrap:CSSProperties["flexWrap"] = "wrap",
	flexDirection:CSSProperties["flexDirection"] = "column",
) => css`
	${Flex};
	justify-content: ${justifyContent};
	align-items: ${alignItems};
	flex-wrap: ${flexWrap};
	flex-direction: ${flexDirection};
`;