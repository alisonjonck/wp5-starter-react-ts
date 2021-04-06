import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  background-color: #60acd2;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #4187a9;
  }
`

interface PrimaryButtonProps {
    children: String
}

const PrimaryButton = (props: PrimaryButtonProps) => (
    <StyledButton>{props.children}</StyledButton>
)

export default PrimaryButton
