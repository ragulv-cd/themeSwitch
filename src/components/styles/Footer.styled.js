import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.background};

  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;