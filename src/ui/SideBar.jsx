import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: blue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-gray-100);
  grid-row: 1/-1;
`;
export const SideBar = () => {
  return <StyledSideBar>test</StyledSideBar>;
};
