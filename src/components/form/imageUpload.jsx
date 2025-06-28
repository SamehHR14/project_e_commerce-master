import { Box, Button, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import DeleteIcon from '@mui/icons-material/Delete';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CustomImageUpload = ({ name, label,onlyOneImage=false ,onDelete}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [previews, setPreviews] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
const handleChange = (event) => {
  const files = Array.from(event.currentTarget.files);

  if (!files.length) return;

  if (onlyOneImage) {
     
    setFieldValue(name, files[0]);  
  } else {
 
    const existingFiles = Array.isArray(field.value) ? field.value : [];
    const copyFiles = [...existingFiles, ...files];
    setFieldValue(name, copyFiles);  
  }
};
/*
  const handleDelete = (indexToDelete) => {
      let updatedFiles =  null;
    if (!onlyOneImage)
       updatedFiles = field.value.filter((_, index) => index !== indexToDelete); 
    setFieldValue(name, updatedFiles);
  };*/


  const handleDelete = (indexToDelete) => {
    setDeleteIndex(indexToDelete);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDeleteIndex(null);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex,handleCloseDialog)
    }
  };

  useEffect(()=>{ 
if (!field.value) {
    setPreviews([]);
    return;
  } 
  let objectUrls = []; 
  if (onlyOneImage) { 
    const url = typeof field.value === 'object' ? URL.createObjectURL(field.value) : field.value;
    objectUrls.push(url);
  } else if (Array.isArray(field.value)) {
    objectUrls = field.value.map(file => file?.imageUrl || URL.createObjectURL(file));
  }

  setPreviews(objectUrls);
  },[field.value])


  return (
    <Box>
      {meta.touched && meta.error && (
        <Typography color="error" variant="body2" mb={2}>
          {meta.error}
        </Typography>
      )}

      {previews.length > 0 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ marginBottom: 16 }}
        >
          {previews.map((src, index) => (
            <SwiperSlide key={index}>
              <Box position="relative">
                <img
                  src={src}
                  alt={`preview-${index}`}
                  style={{
                    width: '100%',
                    height: 160,
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
                <IconButton
                  onClick={() => handleDelete(index)}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    zIndex: 10,
                    '&:hover': {
                      backgroundColor: 'rgba(255,0,0,0.7)',
                      color: '#fff',
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Button
        variant="outlined"
        component="label"
        fullWidth
        sx={{ mb: 2, textTransform: 'none' }}
      >
        Choisir des images
        <input
          hidden
          accept="image/*"
          multiple={!onlyOneImage}
          type="file"
          onChange={handleChange}
        />
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <Typography>Voulez-vous vraiment supprimer cette image ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Annuler
          </Button>
          <Button onClick={confirmDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomImageUpload;
