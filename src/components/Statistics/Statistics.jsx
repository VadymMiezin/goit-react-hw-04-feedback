import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => (
  <ul className={css.feedbackList}>
    <li className={css.feddbackListItem}>Good: {good}</li>
    <li className={css.feddbackListItem}>Neutral: {neutral}</li>
    <li className={css.feddbackListItem}>Bad: {bad}</li>
    <li className={css.feddbackListItem}>Total: {total}</li>
    <li className={css.feddbackListItem}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
