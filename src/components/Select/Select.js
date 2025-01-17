import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {displayedValue}
      <MarginIcon id="chevron-down" size="18" />
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

const MarginIcon = styled(Icon)`
  margin-left: 12px;
`

const Wrapper = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-flex;

  position: relative;

  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`

const StyledSelect = styled.select`
  appearance: none;
  border: none;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
`

export default Select;
