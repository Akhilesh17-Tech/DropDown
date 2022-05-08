import { useState } from "react";

export default function Dropdown(props) {
  const options = props.options; // Dropdown option from props
  const selected = props.selected; // state which is selected
  const setSelected = props.setSelected; // setState whichever we want to select from dropdown
  const [isActive, setIsActive] = useState(false); //useState hook is used to store the state of the component. Default value is false here
  return (
    <div className="dropdown">
      <h4 className="heading">Should you use a dropdown? </h4>
      {/* on hovering choose button options will be visible */}
      <div
        className="dropdown-btn"
        onMouseEnter={(e) => setIsActive(!isActive)}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span className="fa fa-caret-down"></span>
      </div>
      {/* conditional rendering */}
      {isActive && (
        <div className="dropdown-content">
          {/*  the options array is traversed and the dropdown list is generated. 
          the index is used as key to. When clicked the state will be change*/}
          {options.map((option, index) => {
            return (
              <div
                className="dropdown-item"
                key={index}
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
