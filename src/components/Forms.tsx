import styled from 'styled-components';

export const Button = styled.button`
	padding: 1.75rem 1.125rem;
	box-sizing: border-box;
	font-family: ${({ theme }) => {
		return theme.fonts.body;
	}};
	color: ${({ theme }) => {
		return theme.colors.tertiary;
	}};
	font-weight: bold;
	font-size: 1rem;
	line-height: 1.25rem;
	white-space: nowrap;

	background-color: ${({ theme }) => {
		return theme.colors.highlight;
	}};
	border: none;
`;

export const Input = styled.input`
	width: 100%;
	box-sizing: border-box;
	padding: 1.75rem 1.125rem;

	font-family: ${({ theme }) => {
		return theme.fonts.body;
	}};
	color: ${({ theme }) => {
		return theme.colors.primary;
	}};
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.25rem;
	background-color: ${({ theme }) => {
		return theme.colors.tertiary;
	}};
	border: none;

	&::placeholder {
		color: ${({ theme }) => {
		return theme.colors.secondary;
	}};
	}
`;
