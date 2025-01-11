import styled from 'styled-components';

export const CustomParagraph = styled.p<{ $positionTop: number}>`
    list-style-position: outside;
    text-align: left;
    list-style-type: circle;
    font-size: 20px;
    position: absolute;
    top: ${(props) => props.$positionTop}px;
    color: #2c3e50;
    width: 400px;

    @media (max-width: 768px) {
        right: 0;
        left: 0;
        margin: 0 10px 0 10px;
        font-size: 16px;
        width: 300px;
        top: ${(props) => props.$positionTop} /* Adjust top dynamically */
    }
`;
