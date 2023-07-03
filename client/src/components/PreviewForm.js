import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup, TextField, LinearProgress, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  formWrapper: {
    width: '80%',
    margin: '0 auto',
    padding: '2rem 1rem',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 0px 15px -5px rgba(0,0,0,0.1)',
  },
  section: {
    marginBottom: '2.5rem',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subheader: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  field: {
    marginBottom: '1rem',
  },
  question: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  progress: {
    marginBottom: '2rem',
  },
});

const PreviewForm = ({ fields }) => {
  const classes = useStyles();
  const [completedFields, setCompletedFields] = useState(0);

  const handleInputChange = (event) => {
    if (event.target.value !== '') {
      setCompletedFields(completedFields + 1);
    }
  };

  const renderField = (field, index) => {
    switch (field.type) {
      case 'header':
        return <Typography className={classes.header}>{field.question}</Typography>;
      case 'subheader':
        return <Typography className={classes.subheader}>{field.question}</Typography>;
      case 'text':
      case 'email':
      case 'date':
      case 'wallet':
        return (
          <Box className={classes.field}>
            <Typography className={classes.question}>{field.question}</Typography>
            <TextField fullWidth onBlur={handleInputChange} type={field.type} />
          </Box>
        );
      case 'textarea':
        return (
          <Box className={classes.field}>
            <Typography className={classes.question}>{field.question}</Typography>
            <TextField fullWidth multiline rows={4} onBlur={handleInputChange} />
          </Box>
        );
      case 'checkbox':
        return (
          <Box className={classes.field}>
            <Typography className={classes.question}>{field.question}</Typography>
            {field.options.map((option, i) => (
              <FormControlLabel
                key={i}
                control={<Checkbox />}
                label={option}
                onBlur={handleInputChange}
              />
            ))}
          </Box>
        );
      case 'radio':
        return (
          <Box className={classes.field}>
            <Typography className={classes.question}>{field.question}</Typography>
            <FormControl component="fieldset">
              <RadioGroup onBlur={handleInputChange}>
                {field.options.map((option, i) => (
                  <FormControlLabel
                    key={i}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );
      default:
        return null;
    }
  };

  const totalInputFields = fields.reduce((total, field) => {
    if (field.type !== 'header' && field.type !== 'subheader') {
      total += 1;
    }
    return total;
  }, 0);

  const progress = Math.round((completedFields / totalInputFields) * 100);

  return (
    <Box className={classes.formWrapper}>
      <LinearProgress className={classes.progress} variant="determinate" value={progress} />
      {fields.map((field, i) => (
        <Box key={i} className={classes.section}>
          {renderField(field, i)}
        </Box>
      ))}
    </Box>
  );
};

export default PreviewForm;
