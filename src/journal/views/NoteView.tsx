import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, TextField } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid 
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>26 de febrero 2024</Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Titulo'
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió en el día de hoy?'
          minRows={ 5 }
        />
      </Grid>
      {/* Image Gallery*/}
      <ImageGallery />
    </Grid>
  )
}
