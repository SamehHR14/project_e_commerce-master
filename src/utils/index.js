  
export const objectToFormData = (data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value))
        value.forEach(file => {
          formData.append(key, file);
        });
      else
        formData.append(key, value);
    }
  });

  return formData;
};
