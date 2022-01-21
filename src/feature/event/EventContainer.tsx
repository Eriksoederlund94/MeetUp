import styled from 'styled-components';

interface StyleProps {
    loggedIn: boolean;
}

function EventContainer() {
    const loggedIn = false;

    return <Container loggedIn={loggedIn}></Container>;
}

export default EventContainer;

const Container = styled.div<StyleProps>`
    background: ${(props) => (props.loggedIn ? '' : '')};
`;
