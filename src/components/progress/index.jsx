import { Backdrop, CircularProgress } from "@mui/material";

export const LoadingFullback = () => {
  return (
    <Backdrop
      sx={{
        color: "#744e20",  
        zIndex: (theme) => theme.zIndex.modal + 10,
        backgroundColor: "rgba(85, 85, 85, 0.1)",
      }}
      open
    >
      <CircularProgress color="inherit" size={48} thickness={4} />
    </Backdrop>
  );
};
