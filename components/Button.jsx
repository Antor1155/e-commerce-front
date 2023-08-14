import { css, styled } from "styled-components"
import { primary } from "@/utils/colors";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-weight: bold;

  svg{
    height: 16px;
    margin-right: 5px;
  }

  ${props => props.$white && !props.$outline && css`
    background-color: #fff;
    color: #000;
  `}

  ${props => props.$white && props.$outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}

  ${props => props.$primary && !props.$outline && css`
    background-color: ${primary};
    border: 1px solid ${primary};
    color: #fff;
  `}

  ${props => props.$primary && props.$outline && css`
    background-color: transparent;
    color: ${primary};
    border: 1px solid ${primary};
  `}

  ${props => props.size === "l" && css`
      font-size: 1.2rem;
      padding: 10px 20px;

      svg{
        height: 20px;
      }
  `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button