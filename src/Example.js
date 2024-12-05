import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <strong>Example:</strong> <em>{props.example}</em>
        <br />
        <br />
      </div>
    );
  } else {
    return null;
  }
}
