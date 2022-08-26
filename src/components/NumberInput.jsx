import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/NumberInput.scss";

function NumberInput({ num = 1, handleMinusBtn, handlePlusBtn }) {
  return (
    <div className="number-input">
      <button
        type="button"
        title="remove"
        className="number-input__btn"
        onClick={handleMinusBtn}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        value={num}
        type="number"
        className="number-input__input"
        readOnly
      />
      <button
        type="button"
        title="add"
        className="number-input__btn"
        onClick={handlePlusBtn}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export { NumberInput };
