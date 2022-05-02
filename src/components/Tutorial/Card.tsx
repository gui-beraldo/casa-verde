import { Subtitle, Title2 } from 'components/Typography';
import styled from 'styled-components';
import  { device } from 'styles/sizes';

const Wrapper = styled.section`
	min-width: 100%;
	padding: 2rem;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	@media (min-width: 410px) {
		min-width: 410px;
	}
`;

const ListaItem = styled.ul`
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Item = styled.li`
	display: flex;
	align-items: center;

	margin-bottom: 1rem;

	p {
		font-size: 1.1rem;
		color: ${({ theme }) => {
			return theme.colors.secondary;
		}};

		@media(${device.mobileS}) {
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
				<Title2>
					<Subtitle>Como conseguir</Subtitle>minha planta
				</Title2>
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
