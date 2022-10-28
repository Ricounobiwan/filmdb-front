import React from "react";
import Actors from "./Actors";
import { Fragment } from "react";

function ActorsList() {
  return (
    <Fragment style={{ margin: "10rem" }}>
      <hr />
      <table className="bg-slate-100 border-collapse border border-slate-500 border-spacing-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Actor</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {Actors && Actors.length > 0
            ? Actors.map((item) => {
                return (
                  <tr>
                    <td className="meta">{item.id}</td>
                    <td className="content">{item.Name}</td>
                    <td className="description">{item.Nationality}</td>
                  </tr>
                );
              })
            : "No Data Available"}
        </tbody>
      </table>
      <hr />
    </Fragment>
  );
}

export default ActorsList;
