import styled from 'styled-components';
import { Card } from './Card';

const Wrapper = styled.section`
	max-width: 995px;
	height: 440px;
	margin: 0 auto;
	background-color: ${({ theme }) => {
		return theme.colors.tertiary;
	}};

	display: flex;
`;

const Background = styled.div`
	width: 585px;

	background-image: url('images/image-tutorial.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`;

export function Tutorial() {
	return (
		<Wrapper>
			<Background />
			<Card />
		</Wrapper>
	);
}
