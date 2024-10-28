import theme from "../../shared/theme.js";

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 5,
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    p: 4,
  },
  button: {
    float: "right",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.darkHover,
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export default styles;
