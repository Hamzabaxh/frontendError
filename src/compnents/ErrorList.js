// src/components/ErrorList.js
import React, { useEffect, useState } from 'react';
import { getErrors } from '../api';

function ErrorList() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetchErrors();
  }, []);

  async function fetchErrors() {
    try {
      const data = await getErrors();
      setErrors(data);
    } catch (error) {
      console.error('Error fetching errors:', error);
    }
  }

  return (
    <div>
      <h1>Error List</h1>
      {errors.map((error) => (
        <div key={error.id}>
          <h2>{error.title}</h2>
          <p>{error.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ErrorList;
