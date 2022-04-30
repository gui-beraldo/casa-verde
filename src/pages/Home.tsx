import { Newsletter } from 'components/Newsletter';
import styled from 'styled-components';

const Div = styled.section`
	max-width: ${({ theme }) => {
		return theme.spacing.large;
	}};
	margin: 0 auto;
`;

export function Home() {
	return (
		<main>
			<Div>
				<Newsletter />
			</Div>
		</main>
	);
}
