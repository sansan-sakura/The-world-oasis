import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: red;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
`;

export const Header = () => {
  return <StyledHeader>header</StyledHeader>;
};
