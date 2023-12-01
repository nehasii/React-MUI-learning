import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

function MuiSelect() {
    // const [country, setCountry] = useState('') //! to select single values
    const [countries, setCountries] = useState<string[]>([]) //^ to select multiple values

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        setCountries(typeof value === 'string' ? value.split(','): value) //^ to select multiple values
        // setCountry(e.target.value as string) //! to select single values
    }
  return (
    <Box width={'250px'}>
        <TextField
            label='Select Country'
            select
            fullWidth
            value={countries}
            onChange={handleChange}
            SelectProps={{
                multiple: true,
            }}
        >
            <MenuItem value={'IN'}>India</MenuItem>
            <MenuItem value={'US'}>USA</MenuItem>
            <MenuItem value={'AU'}>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect