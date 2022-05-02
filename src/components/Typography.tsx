import styled from 'styled-components';
import { device } from 'styles/sizes';

export const Title = styled.h1`
	font-size: 2rem;
	line-height: 2.25rem;

	span {
		display: block;
		width: 100%;
		margin-bottom: 0.5rem;
	}

	@media ${device.mobileS} {
		font-size: 5.125rem;
		line-height: 6rem;
		margin-bottom: 1.5rem;
	}
`;

export const Title2 = styled.h2`
	font-size: 2rem;
	line-height: 2.25rem;

	span {
		display: block;
		width: 100%;
		margin-bottom: 0.5rem;
	}
	
	@media ${device.mobileS} {
		font-size: 2.625rem;
		line-height: 2.625rem;
	}
`

export const Subtitle = styled.span`
	font-family: 'Montserrat', sans-serif;
	color: ${({ theme }) => {
		return theme.colors.secondary;
	}};
	font-weight: 400;
	font-size: 1.375rem;
	line-height: 1.625rem;
`;

export const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	color: ${({ theme }) => {
		return theme.colors.primary;
	}};
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.25rem;
`;
