import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid2,
  Rating,
  Typography,
  TextField
} from "@mui/material";

function PopupDialog() {
  // Popup Mechanism
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Rating
  const [value, setValue] = React.useState<number | null>(0);
  return (
    <React.Fragment>
      <div className="static">
        <Button className="absolute bottom-0 left-0" variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">
          {"Popup Rating"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            Sesi anda telah berakhir. Harap berikan penilaian untuk video call. Terima Kasih
          </DialogContentText>

          <Grid2 container spacing={1}>
            <Grid2 size="grow"></Grid2>
            <Grid2 sx={{px:10}}size={10}>
              <Rating
                
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                precision={0.5}
                size="large"
              />
            </Grid2>
            <Grid2 size="grow"></Grid2>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 size="grow"></Grid2>
            <Grid2 size={10}>
              <TextField
                id="outlined-multiline-static"
                label="Komentar"
                multiline
                rows={4}
                defaultValue="Masukkan komentar anda disini..."
                sx={{
                  width: 330
                  }}
              />
            </Grid2>
            <Grid2 size="grow"></Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batalkan</Button>
          <Button onClick={handleClose} autoFocus>
            Lanjutkan
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default PopupDialog; 