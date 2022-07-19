import styled from "styled-components";

export const ThemeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ThemeButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;