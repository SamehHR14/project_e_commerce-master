import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { useField } from 'formik';

const CustomSelect = ({ name, label, options, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        {...field}
        {...props}
           sx={{ minWidth: 100, borderRadius:'10px', textAlign: 'left' }}
        value={field.value || ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
      >
        {options.map((option) => (
          <MenuItem key={option.value || option.id} value={option.value || option.id} >
            {option.label || option.name}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;
 