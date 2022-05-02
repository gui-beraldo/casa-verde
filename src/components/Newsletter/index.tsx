import { Button, Input } from 'components/Forms';
import { Subtitle, Text, Title } from 'components/Typography';
import styled from 'styled-components';
import { device } from 'styles/sizes';

const NewsletterSection = styled.section`
	margin-bottom: 40px;

	display: flex;
	align-items: center;

	background: url('./images/hero-image.png');
	background-repeat: no-repeat;
	background-position: right -20px bottom 155px;
	background-size: clamp(180px, 75%, 280px);

	@media ${device.mobileS} {
		background-size: clamp(200px, 80vh, calc(100vh - 145px));
		background-position: right -20px bottom 0px;
		justify-content: flex-start;

		min-height: calc(100vh - 90px);
		display: flex;
		align-items: center;
		justify-content: flex-start;

		margin-bottom:0px;
	}
`;

const Div = styled.div`
	width: 100%;
	max-width: 585px;
`;

const TextNewsletter = styled(Text)`
	width: 65%;
	min-width: 200px;
	line-height: 1.625rem;
	padding-top: 1rem;

	@media ${device.mobileS} {
		width: 85%;
	}
`;

const FormNewsletter = styled.form`
	width: 100%;
	display: flex-box;
	margin-top: 3rem;

	button {
		box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
		width: 100%;
		margin-top: 1rem;
	}

	@media ${device.mobileS} {
		display: flex;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

		button {
			width: auto;
			margin: 0
		}
	}
`;

export function Newsletter() {
	return (
		<NewsletterSection>
			<Div>
				<Title>
					<Subtitle>Suas casa com as</Subtitle> melhores plantas
				</Title>
				<TextNewsletter>
					Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
					torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
					e assine nossa newsletter para saber das novidades da marca.
				</TextNewsletter>
				<FormNewsletter>
					<Input type='email' placeholder='Insira seu e-mail' />
					<Button>Assinar Newsletter</Button>
				</FormNewsletter>
			</Div>
		</NewsletterSection>
	);
}
