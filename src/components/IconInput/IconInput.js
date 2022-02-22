import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "stroke": 1,
    "fontSize": 14,
    "gap": 4,
  },
  large: {
    "stroke": 2,
    "fontSize": 18,
    "gap": 8,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeStyle = SIZES[size] || SIZES.small
  
  return <Wrapper style={{ width: `${width}px`, fontSize: `${sizeStyle.fontSize}px`}} stroke={sizeStyle.stroke}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <MarginIcon id={icon} gap={sizeStyle.gap} size={sizeStyle.fontSize} strokeWidth={sizeStyle.stroke} />
    <Input placeholder={placeholder}></Input>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  outline-offset: 2px;
  padding-bottom: 1px;

  border-radius: 2px;
  border-bottom: ${({ stroke }) => stroke}px solid black;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary}
  }
`

const MarginIcon = styled(Icon)`
  margin-right: ${({ gap }) => gap}px;
`

const Input = styled.input`
  border: none;
  outline: none;
  color: inherit;
  font-size: inherit;
  font-weight: bold;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`

export default IconInput;
