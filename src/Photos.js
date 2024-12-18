import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.error) {
    return (
      <div className="Results">
        <p></p>
      </div>
    );
  } else if (props.photos) {
    return (
      <div>
        <section className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-sm-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
