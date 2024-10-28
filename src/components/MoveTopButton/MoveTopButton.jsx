import { IconButton } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material";
import styles from "./MoveTopButton.js";

const MoveTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton onClick={handleScrollTop} sx={styles.buttonContainer}>
      <ArrowCircleUp sx={styles.button}></ArrowCircleUp>
    </IconButton>
  );
};

export default MoveTopButton;
