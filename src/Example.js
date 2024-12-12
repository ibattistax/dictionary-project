import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <em className="text-muted">{props.example}</em>
        <br />
        <br />
      </div>
    );
  } else {
    return null;
  }
}
