import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const FormPreview = () => {
  const classes = useStyles();
  const router = useRouter();
  const { formId } = router.query;

  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (formId) { 
      axios.get(`http://localhost:5000/forms/${formId}`)
        .then((res) => {
          setFields(res.data.fields);
          setLoading(false); 
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formId]);

  if (loading) {
    return <p>Loading...</p>; // return some placeholder content or a spinner
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Form Preview
        </Typography>
        <form className={classes.form} noValidate>
          {fields.map((field) => (
            <TextField
              key={field.id}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={field.question}
              name={field.id}
              autoFocus
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default FormPreview;
