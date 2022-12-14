import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsWrapper, StatisticsItem } from './Statistics.styled';

const Statistics = ({
  ongood,
  onneutral,
  onbad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <StatisticsWrapper>
    <StatisticsItem>Good: {ongood}</StatisticsItem>
    <StatisticsItem>Neutral: {onneutral}</StatisticsItem>
    <StatisticsItem>Bad: {onbad}</StatisticsItem>
    <StatisticsItem>Total: {onCountTotalFeedback}</StatisticsItem>
    <StatisticsItem>
      Positive feedback: {onCountPositiveFeedbackPercentage}%
    </StatisticsItem>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  ongood: PropTypes.number.isRequired,
  onneutral: PropTypes.number.isRequired,
  onbad: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
}

export default Statistics;
