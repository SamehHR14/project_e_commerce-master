import { Snackbar, Alert, Slide } from "@mui/material"; 

/** 
* @author Helmi Ben Eroi
* @date 2024-09-01
*/
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

/*********************************************************************************
 * Snackbar component for displaying alerts.
 * ********************************************************************************
 * @param {object} props - Props for the Snackbar component
 * @param {boolean} open - Determines if the Snackbar is open
 * @param {string} severity - Severity level of the message
 * @param {string} msg - Message to be displayed
 * @param {function} setOpen - Function to set the state of the Snackbar
 * @returns {JSX.Element} - Snackbar component
 *********************************************************************************/
export default function AlertSnackbar({ open = false, severity = "info", msg = "", setOpen }) {
 

  /**
   * Handles the close event of the Snackbar
   * 
   * @param {object} event - The event object
   * @param {string} reason - The reason for closing the Snackbar
   */
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
 

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }} 
    >
      <Alert variant="filled" sx={{
        "& .MuiAlert-message":{
          minWidth:'auto'
        },
        "& .MuiIconButton-root": {
          color: 'white'
        }
      }} severity={severity} onClose={handleClose}>
        {msg}
      </Alert>
    </Snackbar>
  );
}