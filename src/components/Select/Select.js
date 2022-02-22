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
      <Icon id="chevron-down" size="16" />
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-flex;

  position: relative;

  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};
`

const StyledSelect = styled.select`
  appearance: none;
  border: none;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  visibility: hidden;
`

export default Select;
