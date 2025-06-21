import { TextField } from '@mui/material';
import { useField } from 'formik';

const CustomTextField = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      {...field}
      {...props}
    sx={{
     ...props?.sx, 
     '& .MuiOutlinedInput-root':{
     borderRadius:'10px'}
    }}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default CustomTextField;