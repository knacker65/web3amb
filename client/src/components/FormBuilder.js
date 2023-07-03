import React, { useState } from 'react';
import axios from 'axios';
import Field from './Field';
import { useRouter } from 'next/router';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PreviewForm from './PreviewForm';

import { 
  Box, Button, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Grid, Typography, makeStyles 
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f5f5',
  },
  field: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    marginBottom: '20px',
    padding: '20px',
  },
  button: {
    backgroundColor: '#757575',
    color: '#ffffff',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#616161',
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
  previewButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
});

const FormBuilder = () => {
  const classes = useStyles();
  const router = useRouter();

  const [fields, setFields] = useState([]);

  const [openPreview, setOpenPreview] = useState(false);

  const addField = () => {
    const newField = {
      id: new Date().getTime(),
      question: "",
      type: "text",
      options: [],
    };
    setFields([...fields, newField]);
  };

  const updateField = (id, updatedField) => {
    setFields(
      fields.map((field) => (field.id === id ? updatedField : field))
    );
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const handleSaveForm = () => {
    const form = { title: 'Interview Form', fields };
    axios.post('http://localhost:5000/forms/add', form)
      .then((res) => {
        // res.data now includes the newly created form, with its _id field
        const formId = res.data._id;
        router.push(`/formPreview/${formId}`);  // pass the formId to the formPreview route
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box mt={4} className={classes.root}>
      <Typography variant="h4" align="center" className={classes.text}>
        Interview Maker
      </Typography>
      <Typography variant="subtitle1" align="center" className={classes.subTitle}>
        Create your custom interview form by adding fields
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Box mt={3}>
            {fields.map((field, index) => (
              <Field
                key={field.id}
                field={field}
                index={index}
                removeField={removeField}
                updateField={updateField}
              />
            ))}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={addField}
              className={classes.button}
            >
              Add Field
            </Button>
          </Box>
        </Grid>
      </Grid>
      <div className={classes.previewButton}>
        <Button
          variant="contained"
          startIcon={<VisibilityIcon />}
          onClick={handleOpenPreview}
          className={classes.button}
        >
          Preview Form
        </Button>
      </div>
      <div className={classes.previewButton}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSaveForm}
          className={classes.button}
        >
          Save Form
        </Button>
      </div>
      <Dialog
        open={openPreview}
        onClose={handleClosePreview}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Preview Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is how your form will look like.
          </DialogContentText>
          <PreviewForm fields={fields} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FormBuilder;
