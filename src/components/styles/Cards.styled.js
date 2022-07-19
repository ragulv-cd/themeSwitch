import styled from "styled-components";

export const CardsContainer = styled.section`
  margin: 50px;
`;
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.quoteTitle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.quoteBody};
`;
