import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

// eslint-disable-next-line react/prop-types
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired
};
