  
import translations from './translation';

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

export const getTranslation = (language, key) => {
  const langData = translations[language?.toUpperCase()] || translations.FRENCH;
  const value = langData[key];
  return typeof value === 'function' ? value() : value;
};
