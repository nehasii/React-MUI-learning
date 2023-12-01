import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextField = () => {
  const [view, setView] = useState(false);
  const [value, setValue] = useState('')

  const handleVisibility = () => {
    setView((prev) => !prev);
  };
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField label="small secondary" color="secondary" size="small" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField 
            label="password validate" 
            type="password"
            required 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            error={!value}
            helperText = {!value? 'Required': 'Do not share your password'}
            />
        <TextField
          type="password"
          label="Password disabled"
          helperText="Do not share your password"
          disabled
        />
        <TextField label="Read only" inputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          type={view ? "text" : "password"}
          label="Password"
          helperText="Do not share your password"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleVisibility}
                style={{ cursor: "pointer" }}
              >
                {view ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
