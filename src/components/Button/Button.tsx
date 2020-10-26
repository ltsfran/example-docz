import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styled';

interface Props {
  /**
   * This is a pretty good description for this prop.
   */
  variant?: 'primary' | 'secondary';
  children: any;
}

export const Button: React.FC<Props> = ({
  variant,
  children
}) => (
  <ButtonStyled
    variant={variant}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.any.isRequired
};
