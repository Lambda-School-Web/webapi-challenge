import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Project = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/project/`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  console.log(data);

  const renderProject = () => {
    return (
      <>
        {data.map(project => {
          return (
            <>
              <h2>
                <Link to={`/${project.id}`}>Project</Link>
              </h2>
              <p>Name: {project.name}</p>
              <p>Description: {project.description}</p>
            </>
          );
        })}
      </>
    );
  };

  return <div>{data ? renderProject() : <p>No Projects available</p>}</div>;
};

export default Project;
