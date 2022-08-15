import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/NumberInput.scss";

function NumberInput() {
  const [value, setValue] = useState(0);

  const handleIncrease = () => setValue((prevValue) => prevValue + 1);

  const handleDecrease = () =>
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));

  return (
    <div className="number-input">
      <button
        type="button"
        title="remove"
        className="number-input__btn"
        onClick={handleDecrease}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        value={value}
        type="number"
        className="number-input__input"
        readOnly
      />
      <button
        type="button"
        title="add"
        className="number-input__btn"
        onClick={handleIncrease}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export { NumberInput };
