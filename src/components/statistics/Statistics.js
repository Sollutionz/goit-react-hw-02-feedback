import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percent,
}) => {
  return (
    <div>
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Percent: {percent}%</li>
        </ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
}