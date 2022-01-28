import styled from 'styled-components';

interface Props {
    id: string;
    comment: string;
    createdAt: string;
}

function EventComment({ id, comment, createdAt }: Props) {
    return (
        <Container>
            <p data-testid={`comment-${id}`}>
                <span>{createdAt}</span>: {comment}
            </p>
        </Container>
    );
}

export default EventComment;

const Container = styled.div`
    background: #f0eaea;
    border-radius: 4px;
`;
