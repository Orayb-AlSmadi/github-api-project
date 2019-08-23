import React from "react";

function Btn(props) {
  console.log(props.link);
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => window.open(props.link, "_blank")}
      >
        Delete
      </button>
    </div>
  );
}

export default Btn;
