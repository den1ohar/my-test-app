import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
  font-family: "Fira Sans", sans-serif;
`;

export default PageWrapper;
