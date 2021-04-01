import styled from "styled-components";

const Button = styled.button`
  width: 210px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-family: Fira Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
`;

export default Button;
