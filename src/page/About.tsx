import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button, 
  Typography
} from "@mui/material";


function About() {
  const [name, setName] = useState("Heraldo");
  
  const reverse = () => {
    var result = "";
    for (var i=name.length-1; i>=0 ; i--){
      result += name[i]
    }
    setName(result)
  }

  return (
    <Box>
      <Box sx={{ p: 3 }}>
        <h1 className="text-4x1 text-blue-500">Test Tailwind</h1>
        <Typography>
          This is About Page with { name }
        </Typography>
        <Button onClick={reverse}>Reverse</Button>
      </Box>
    </Box>  
  )
}

export default About;