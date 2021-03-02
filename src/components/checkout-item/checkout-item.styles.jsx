import styled, { css } from "styled-components";

const quantityStyles = css`
	padding-left: 20px;
	display: flex;
`;

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const CheckoutItemProperties = styled.span`
	width: 23%;
	${({ quant }) => (quant ? quantityStyles : "")}
`;

export const CheckoutQuantityArrow = styled.div`
	cursor: pointer;
`;

export const CheckoutQuantityValue = styled.span`
	margin: 0 10px;
`;

export const CheckoutRemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
