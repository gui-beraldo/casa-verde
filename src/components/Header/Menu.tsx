import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'styles/sizes';

const NavMenu = styled.nav`
	display: none;

	@media ${device.tabletM} {
    display: block;
    
		ul {
			display: flex;
			margin: 0;

			li {
				list-style: none;
				font-size: 1rem;
				font-weight: 600;
				color: ${({ theme }) => {
					return theme.colors.primary;
				}};

				+ li:before {
					content: '/';
					padding: 0 1rem;
				}
			}
		}
	}
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;

	&:hover,
	&.active {
		color: ${({ theme }) => {
			return theme.colors.secondary;
		}};
	}
`;

export function Menu() {
	const rotas = [
		{
			label: 'Como fazer',
			to: '/como-fazer',
		},
		{
			label: 'Ofertas',
			to: '/ofertas',
		},
		{
			label: 'Depoimentos',
			to: '/depoimentos',
		},
		{
			label: 'Vídeos',
			to: '/videos',
		},
		{
			label: 'Meu carrinho',
			to: '/meu-carrinho',
		},
	];

	return (
		<NavMenu>
			<ul>
				{rotas.map((rota, index) => (
					<li key={index}>
						<StyledNavLink to={rota.to}>{rota.label}</StyledNavLink>
					</li>
				))}
			</ul>
		</NavMenu>
	);
}
