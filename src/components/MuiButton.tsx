import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
    const [formats, setformats]= useState<string[] | null>([])

    const handleFormatChange=(_event:React.MouseEvent<HTMLElement>, updatedFormats:string[] | null) => {
        setformats(updatedFormats)
    }

  return (
   <Stack spacing={4}>
     <Stack spacing={2} direction={'row'} className="btn">
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>

    <Stack spacing={2} direction={'row'}>
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="warning">Warning</Button>
        <Button variant="text" color="error">Error</Button>
        <Button variant="text" color="info">Info</Button>
        <Button variant="text" color="success">Success</Button>
    </Stack>

    <Stack spacing={2} direction={'row'}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
    </Stack>

    <Stack spacing={2} direction={'row'}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
    </Stack>

    <Stack spacing={2} direction={'row'}>
        <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>

        <IconButton aria-aria-label="send" color="success" size="medium">
            <SendIcon/>
        </IconButton>
    </Stack>

    <Stack direction={'row'}>
        <ButtonGroup
        variant="contained"
        orientation='vertical'
        size="small"
        color="error"
        aria-label="alignment button group"
        >
            <Button onClick={()=>{alert('left clicked')}}>Top</Button>
            <Button>Middle</Button>
            <Button>Bottom</Button>
        </ButtonGroup>
    </Stack>

    <Stack   direction={'row'} spacing={4}>
    <ToggleButtonGroup aria-label="Text formatting" value={formats} onChange={handleFormatChange} color="success" exclusive>
        <ToggleButton value={'bold'} aria-label="bold"><FormatBoldIcon /></ToggleButton>
        <ToggleButton value={'italic'} aria-label="italic"><FormatItalicIcon/></ToggleButton>
        <ToggleButton value={'underline'} aria-label="underline"><FormatUnderlinedIcon/></ToggleButton>
    </ToggleButtonGroup>
    </Stack>
    
   </Stack>
  )
}

export default MuiButton