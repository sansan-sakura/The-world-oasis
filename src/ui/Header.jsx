import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";
import UserAvater from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <UserAvater />
      <HeaderMenu />
    </StyledHeader>
  );
};
