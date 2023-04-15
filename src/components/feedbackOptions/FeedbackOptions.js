import PropTypes from 'prop-types';
export const FeedbackOptions = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
    <>
      <button name="Good" type="button" onClick={handleClickGood}>
        Good
      </button>
      <button name="Neutral" type="button" onClick={handleClickNeutral}>
        Neutral
      </button>
      <button name="Bad" type="button" onClick={handleClickBad}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};