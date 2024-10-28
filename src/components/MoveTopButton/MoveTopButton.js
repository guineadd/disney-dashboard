import theme from "../../shared/theme.js";

const styles = {
  buttonContainer: {
    position: "fixed",
    width: "4rem",
    height: "4rem",
    borderRadius: "2rem",
    cursor: "pointer",
    bottom: "2rem",
    right: "2rem",
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 3,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    "&:focus": {
      outline: "none",
    },
  },
  button: {
    fontSize: "3rem",
  },
};

export default styles;
