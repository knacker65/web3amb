// src/actions/jobAction.js

export const addJob = (job) => {
    return {
      type: 'ADD_JOB',
      payload: job,
    };
  };
  