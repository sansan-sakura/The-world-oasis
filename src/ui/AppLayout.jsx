import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import styled from "styled-components";

const StyledApplayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  background-color: var(--color-gray-50);
  padding: 4rem 4.8rem 6.4rem;
`;

export const AppLayout = () => {
  return (
    <StyledApplayout>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayout>
  );
};
