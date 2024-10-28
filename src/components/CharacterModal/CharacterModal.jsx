import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import styles from "./CharacterModal.js";

const CharacterModal = ({ open, onClose, character }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="character-modal-title" aria-describedby="character-modal-description">
      <Box sx={styles.modal}>
        <Typography id="character-modal-title" variant="h4" component="h2" gutterBottom>
          {character?.name}
        </Typography>

        <img src={character?.imageUrl} alt={character?.name} style={{ width: "100%", maxHeight: 800 }} />

        <Typography id="character-modal-description" variant="body1" gutterBottom>
          <strong>TV Shows:</strong> {character?.tvShows.join(", ") || "None"}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Video Games:</strong> {character?.videoGames.join(", ") || "None"}
        </Typography>

        <Button sx={styles.button} variant="contained" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CharacterModal;
