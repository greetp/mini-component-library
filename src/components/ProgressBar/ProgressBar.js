/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error('unknown size passed');
  }
  return (
    <Wrapper 
    style={{
      '--padding': styles.padding+ 'px',
      '--borderRadius': styles.borderRadius+ 'px',    
    }}
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100">
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ 
          '--width': value + '%',
          '--height': styles.height + 'px',
        }} />
      </BarWrapper>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  padding: var(--padding);
`;
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`
const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
