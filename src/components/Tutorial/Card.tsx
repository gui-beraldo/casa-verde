import { Subtitle, Title2 } from 'components/Typography';
import styled from 'styled-components';
import { device } from 'styles/sizes';

const Wrapper = styled.section`
	min-width: 100%;
	padding: 2rem 1rem;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	@media (min-width: 410px) {
		min-width: 410px;
	}

	@media ${device.mobileS} {
		padding: 2rem 2rem;
	}

	div {
		width: 100%;
	}
`;

const Title = styled(Title2)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		display: inherit;
		flex-direction: inherit;
		align-items: inherit;
	}

	@media ${device.mobileS} {
		display: block;
	}
`;

const ListaItem = styled.ul`
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Item = styled.li`
	display: flex;
	align-items: center;

	margin-top: 1rem;

	p {
		font-size: 1rem;
		color: ${({ theme }) => {
			return theme.colors.secondary;
		}};

		@media ${device.mobileS} {
			font-size: 1.375rem;
		}
	}
`;

const ItemIcone = styled.span`
	display: block;

	margin-right: 1rem;

	width: 3.25rem;
	height: 3.25rem;

	border-radius: 50%;

	background-image: url(./images/icons/mouse.svg);
	background-color: ${({ theme }) => {
		return theme.colors.highlight;
	}};
	background-size: 1.375rem;
	background-repeat: no-repeat;
	background-position: center;
`;

const IconeCarrinho = styled(ItemIcone)`
	background-image: url(./images/icons/cart.svg);
`;

const IconeCaminhao = styled(ItemIcone)`
	background-image: url(./images/icons/truck.svg);
`;

export function Card() {
	return (
		<Wrapper>
			<div>
				<Title>
					<Subtitle>Como conseguir</Subtitle>minha planta
				</Title>
				<ListaItem>
					<Item>
						<ItemIcone></ItemIcone>
						<p>Escolha suas plantas</p>
					</Item>
					<Item>
						<IconeCarrinho></IconeCarrinho>
						<p>Faça seu pedido</p>
					</Item>
					<Item>
						<IconeCaminhao></IconeCaminhao>
						<p>Aguarde na sua casa</p>
					</Item>
				</ListaItem>
			</div>
		</Wrapper>
	);
}
