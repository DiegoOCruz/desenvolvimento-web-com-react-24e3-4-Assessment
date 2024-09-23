import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const pages = ["Questão 1", "Questão 2", "Questão 3"];
const questao_1 = [
  { name: "Questão 1.1", path: "/questao1_1" },
  { name: "Questão 1.2", path: "/questao1_2" },
  { name: "Questão 1.3", path: "/questao1_3" },
  { name: "Questão 1.4", path: "/questao1_4" },
];
const questao_2 = [
  { name: "Questão 2.1", path: "/questao2_1" },
  { name: "Questão 2.2", path: "/questao2_2" },
  { name: "Questão 2.3", path: "/questao2_3" },
  { name: "Questão 2.4", path: "/questao2_4" },
];
const questao_3 = [
  { name: "Questão 3.1", path: "/questao3_1" },
  { name: "Questão 3.2", path: "/questao3_2" },
  { name: "Questão 3.3", path: "/questao3_3" },
  { name: "Questão 3.4", path: "/questao3_4" },
];

function ResponsiveAppBar() {
  const [anchorElArray, setAnchorElArray] = useState(
    new Array(pages.length).fill(null)
  );

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Assessment
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page, index) => (
              <React.Fragment key={page}>
                <Button
                  aria-controls={
                    Boolean(anchorElArray[index]) ? "basic-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={
                    Boolean(anchorElArray[index]) ? "true" : undefined
                  }
                  onClick={(event) => handleClick(event, index)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElArray[index]}
                  open={Boolean(anchorElArray[index])}
                  onClose={() => handleClose(index)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => handleClose(index)}>
                    Profile
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
