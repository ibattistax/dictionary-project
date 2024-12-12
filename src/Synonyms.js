import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {/* <strong>Synonyms</strong> */}
        <ul className="synonym-list">
          {props.synonyms.slice(0, 5).map((synonym, index) => (
            <li className="d-none d-md-inline" key={index}>
              {synonym}
            </li>
          ))}
        </ul>
      </div>
    );
    // return (
    //   <div className="Synonyms">
    //     <strong>Synonyms</strong>
    //     {props.synonyms.slice(0, 5).map(function (synonym, index) {
    //       return (
    //         <div>
    //           <ul className="synonym-list">
    //             <li className="" key={index}>
    //               {synonym}
    //             </li>
    //           </ul>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
  } else {
    return null;
  }
}
