import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        SelectProps={{multiple: true}}
        value={countries}
        onChange={handleChange}
        size='small'
        color="secondary"
        helperText='Please select your country'
        fullWidth
      >
        <MenuItem value="VI">Viet Nam</MenuItem>
        <MenuItem value="US">US</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
