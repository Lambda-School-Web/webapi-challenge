import React, { useState, useEffect } from "react";
import axios from "axios";

const Project = props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/project/${props.match.params.id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  console.log(data);

  const renderProject = () => {
    return (
      <>
        <h1>Project</h1>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
        {data.actions.length > 0 ? <h2>Actions</h2> : null}
        {data.actions.map(action => {
          return (
            <>
              <p>Description: {action.description}</p>
              <p>Notes: {action.notes}</p>
            </>
          );
        })}
      </>
    );
  };

  return <div>{data ? renderProject() : <p>Nothing to display</p>}</div>;
};

export default Project;
