import { Stack, TextField , InputAdornment} from "@mui/material";
import { useState } from "react";


const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with everyone"
          }
        />
        <TextField
          label="password"
          type="password"
          helperText="Do not share your password with everyone"
          disabled
        />
        <TextField label='Read only' InputProps={{readOnly: true}} />
      </Stack>
      <Stack direction='row' spacing={2}>
         <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
         <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
