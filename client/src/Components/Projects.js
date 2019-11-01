import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = props => {
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
        <h2>Project</h2>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
        {data.actions.map(action => {})}
      </>
    );
  };

  return <div></div>;
};

export default Projects;
