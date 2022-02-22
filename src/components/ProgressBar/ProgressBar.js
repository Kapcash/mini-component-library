/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0",
    "--borderRadius": "4px"
  },
  medium: {
    "--height": "12px",
    "--padding": "0",
    "--borderRadius": "4px"
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--borderRadius": "8px"
  }
};

const ProgressBackground = styled.div`
  background: #80808026;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--borderRadius);
  height: var(--height);
`

const ProgressLineRadius = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const ProgressLine = styled.div`
  background-color: ${COLORS.primary};
  width: ${({ value }) => value}%;
  height: 100%;
`

const ProgressBar = ({ value, size }) => {
  const percent = Math.min(100, Math.max(0, value))
  const sizeStyles = SIZES[size]

  return <ProgressBackground style={sizeStyles} role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
    <ProgressLineRadius>
      <ProgressLine value={percent}></ProgressLine>
    </ProgressLineRadius>
    <VisuallyHidden>{percent}%</VisuallyHidden>
  </ProgressBackground>
};

export default ProgressBar;
