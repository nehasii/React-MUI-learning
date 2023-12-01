import { Typography } from '@mui/material' 

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component={'h1'} gutterBottom>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>


        <Typography variant='subtitle1'>Subtitle1 Heading</Typography>
        <Typography variant='subtitle2'>Subtitle2 Heading</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem, molestiae quas possimus consequatur quia dolorem? Adipisci quas magni a modi sapiente harum in, voluptas repellat nemo nobis. Quibusdam, iste.</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam consectetur iure ipsa eos quae, officiis, iste alias perspiciatis dolore maxime earum a corrupti, iusto nostrum temporibus fugit? Quo, laboriosam.</Typography>

    </div>
  )
}

export default MuiTypography