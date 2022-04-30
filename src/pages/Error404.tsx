import styled from 'styled-components';

const Div = styled.div`
	height: calc(100vh - 90px);
	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 30rem;
	}
`

export function Error404() {
	return (
		<Div>
			<h1>404</h1>
		</Div>
	);
}
