import logo from 'assets/logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Menu } from './Menu';
import { device, size } from 'styles/sizes';

const StyledHeader = styled.header`
	height: 90px;
	width: 100vw;
	display: flex;
	align-items: space-between;
	background: rgba(0, 0, 0, 0.05);

	@media ${device.tabletM} {
		justify-content: center;

		div {
			max-width: ${size.tabletM};	
		}

		button {
			display: none;
		}
	}

	button {
		width: 1.875rem;
		height: 1.875rem;
		background: url('images/icons/icon-cart.svg') no-repeat;
		background-size: contain;
		background-position: center;
		border: none;
		padding: 0;
	}

	div {
		width: 100vw;
		margin: 1.4rem 1rem;

		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		a {
			height: 45px;
		}
	}
`;

export function Header() {
	return (
		<StyledHeader>
			<div>
				<NavLink to='/'>
					<img src={logo} alt='' />
				</NavLink>
				<Menu />
				<button />
			</div>
		</StyledHeader>
	);
}
