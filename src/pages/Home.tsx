import { Newsletter } from 'components/Newsletter';
import { Tutorial } from 'components/Tutorial';
import styled from 'styled-components';
import { size } from 'styles/sizes';

const Div = styled.section`
	box-sizing: border-box;
	max-width: ${size.laptopL};
	margin: 0 auto;
	padding: 1rem;
`;

export function Home() {
	return (
		<main>
			<Div>
				<Newsletter />
				<Tutorial />
			</Div>
		</main>
	);
}
