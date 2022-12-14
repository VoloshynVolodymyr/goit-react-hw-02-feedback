import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    ButtonWrapper,
  } from '../Statistics/Statistics.styled';

const FeedbackOptions = ({onBtnClick}) => (<ButtonWrapper>
    <Button type="button" name="good" onClick={onBtnClick}>
      Good
    </Button>
    <Button type="button" name="neutral" onClick={onBtnClick}>
      Neutral
    </Button>
    <Button type="button" name="bad" onClick={onBtnClick}>
      Bad
    </Button>
  </ButtonWrapper>);

  FeedbackOptions.propTypes = {
    onBtnClick: PropTypes.func.isRequired,
  }

export default FeedbackOptions;