import PropTypes from "prop-types";
import "./LabelButton.css";

LabelButton.propTypes = {
  labelText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};

function LabelButton({ labelText, buttonText, handleEvent }) {
  return (
    <div>
      <label>{labelText}</label>
      <button className="Buttons" onClick={handleEvent}>
        {buttonText}
      </button>
    </div>
  );
}

export default LabelButton;
