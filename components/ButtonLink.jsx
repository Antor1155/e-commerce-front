import Link from "next/link"
import { styled } from "styled-components"
import { ButtonStyle } from "./Button"


const StyledLink = styled(Link)`
    ${ButtonStyle}
    text-decoration: none;
`;

const ButtonLink = ({...rest}) => {
  return (
    <StyledLink {...rest} />
  )
}

export default ButtonLink