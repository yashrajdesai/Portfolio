import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 900px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
