import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f5f5',
  },
  field: {
    backgroundColor: '#fafafa',
    border: '1px solid #ddd',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    marginBottom: '20px',
    padding: '20px',
  },
  button: {
    backgroundColor: '#8f8f8f',
    color: '#ffffff',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#6f6f6f',
    },
    margin: '10px 0',
    padding: '10px 20px',
    textTransform: 'capitalize',
  },
  text: {
    color: '#333',
  },
  subTitle: {
    color: '#666',
  },
  fieldGrid: {
    marginTop: '1rem',
  },
  optionGrid: {
    marginTop: '10px',
  },
  input: {
    marginTop: '10px',
  },
  questionInput: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  select: {
    width: '150px',
    marginLeft: '20px',
  },
});

const Field = ({ field, index, removeField, updateField }) => {
  const classes = useStyles();

  const [question, setQuestion] = useState(field.question);
  const [type, setType] = useState(field.type);
  const [options, setOptions] = useState(field.options);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (e, optionIndex) => {
    const newOptions = [...options];
    newOptions[optionIndex] = e.target.value;
    setOptions(newOptions);
    updateField(field.id, { ...field, options: newOptions });
  };

  const handleRemoveOption = (optionIndex) => {
    const newOptions = [...options];
    newOptions.splice(optionIndex, 1);
    setOptions(newOptions);
    updateField(field.id, { ...field, options: newOptions });
  };

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
    updateField(field.id, { ...field, question: e.target.value });
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
    updateField(field.id, { ...field, type: e.target.value });
  };

  const handleRemoveField = () => {
    removeField(field.id);
  };

  return (
    <Box mb={2} className={classes.field}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h6" className={classes.text}>
            {type[0].toUpperCase() + type.slice(1)} Field {index + 1}
          </Typography>
        </Grid>
        <Grid item>
          <Select
            value={type}
            onChange={handleChangeType}
            className={classes.select}
          >
            <MenuItem value="header">Header</MenuItem>
            <MenuItem value="subheader">Subheader</MenuItem>
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="wallet">Wallet Address</MenuItem>
            <MenuItem value="textarea">Textarea</MenuItem>
            <MenuItem value="radio">Radio</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid container direction="column" className={classes.fieldGrid}>
        <TextField
          fullWidth
          value={question}
          onChange={handleChangeQuestion}
          className={classes.questionInput}
          placeholder={type === 'header' || type === 'subheader' ? 'Enter header text' : 'Enter your question here'}
          variant="outlined"
        />
        {(type === 'radio' || type === 'checkbox') && options.map((option, i) => (
          <Grid container direction="row" alignItems="center" spacing={2} key={i} className={classes.optionGrid}>
            <Grid item>
              <TextField
                value={option}
                onChange={(e) => handleOptionChange(e, i)}
                className={classes.input}
                placeholder={`Option ${i + 1}`}
              />
            </Grid>
            <Grid item>
              <IconButton onClick={() => handleRemoveOption(i)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        {(type === 'radio' || type === 'checkbox') && (
          <Button onClick={handleAddOption} className={classes.button}>
            Add option
          </Button>
        )}
        <IconButton onClick={handleRemoveField} style={{ alignSelf: 'flex-end' }}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default Field;
