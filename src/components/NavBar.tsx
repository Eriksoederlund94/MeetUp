import styled from 'styled-components';

interface Props {
    title: string;
}

function NavBar({ title }: Props) {
    return (
        <NavBarWrapper>
            <div className="logo">
                <h1>{title}</h1>
            </div>
        </NavBarWrapper>
    );
}

const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .logo {
        width: 8rem;
        height: 8rem;

        h1 {
            font-size: 1.5rem;
            border: 2px solid #ccc;
            text-align: center;
            font-family: 'Quicksand', sans-serif;
        }
    }
`;

export default NavBar;
