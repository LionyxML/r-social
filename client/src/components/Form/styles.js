import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "20px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "auto",
    fontSize: "20px",
    margin: "15px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#A8C686",
    color: "white",
  },
  buttonClear: {
    backgroundColor: "#E4572E",
    color: "white",
  },
  title: {
    color: "#A8C686",
  },
}));
