import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
`;

export default PageWrapper;
