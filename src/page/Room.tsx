import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Outline
// - Create a simple video Publisher, Subscriber, and Archive
// - Implement Tailwindcss for a better UI

function Room() {


  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p:3 }}>
        <Typography sx={{ fontSize: 'h1.fontSize' }}>
          This is a Room Page
        </Typography>
        <div id="videos">
          <div id="subscriber"></div>
          <div id="publisher"></div>
        </div>

        <div id="buttoHholder">
          <div id="buttons">
            <button type="button" id="start">Start Archive</button>
            <button type="button" id="stop">Stop Archive</button>
            <span id="archiveLink"></span>
          </div>
        </div>
      </Box>  
    </Box>
  )
};

export default Room;