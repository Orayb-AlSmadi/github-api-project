import React from "react";

function Btn(props) {
  console.log(props.link);
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => window.open(props.link, "_blank")}
      >
        See Repo
      </button>
    </div>
  );
}

export default Btn;
