import styled from 'styled-components';

export const ListItemComponent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const Task = styled.div`
    padding-top: 7px;
`;

export const TaskName = styled.span`
    font-size: 25px;
`;

export const Separator = styled.span`
    margin-right: 10px;
    font-size: 25px;
`;

export const buttonStyles = { border: 'none', backgroundColor: 'transparent', fontSize: '25px' };

export const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
