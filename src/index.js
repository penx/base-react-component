import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import { useEventListener } from './useEventListener';

// transform is supposedly more performant
const createKeyframe = startPosition => keyframes`
from {
  transform: translate(0px,${startPosition}px);
}

to {
  transform: translate(0px,0px);
}
`;

const fadeInTop = createKeyframe(-50);

const fadeInBottom = createKeyframe(50);

const common = '0.5s linear';

const animationTop = css`
  ${fadeInTop} ${common}
`;

const animationBottom = css`
  ${fadeInBottom} ${common}
`;

const Warning = styled.div`
  position: fixed;
  top: ${({ bottom }) => (bottom ? 'auto' : 0)};
  left: 20%;
  right: 20%;
  text-align: center;
  padding: 5px;
  z-index: 100000;
  background: ${({ dev }) => (dev ? '#B80003' : '#E8E029')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: ${({ bottom }) => (bottom ? animationBottom : animationTop)};
  bottom: ${({ bottom }) => bottom && 0};
  color: ${({ dev }) => dev && '#fff'};
`;

const DevelopmentWarnings = ({ children, dev, message, waitTime }) => {
  const [show, setShow] = useState(false);

  const timer = setTimeout(() => setShow(true), waitTime);

  useEventListener('mouseleave', timer);

  const hide = () => {
    clearTimeout(timer);
    setShow(false);
  };

  useEventListener('mousemove', hide);

  return (
    <>
      {show && (
        <>
          <Warning dev={dev}>{message}</Warning>
          <Warning dev={dev} bottom>
            {message}
          </Warning>
        </>
      )}
      {children}
    </>
  );
};

DevelopmentWarnings.defaultProps = {
  children: null,
  dev: false,
  message: (
    <>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      Please Note: You are currently on <strong>Localhost</strong>
    </>
  ),
  waitTime: 2000,
};

DevelopmentWarnings.propTypes = {
  children: PropTypes.node,
  dev: PropTypes.bool,
  message: PropTypes.node,
  waitTime: PropTypes.number,
};

export default DevelopmentWarnings;
