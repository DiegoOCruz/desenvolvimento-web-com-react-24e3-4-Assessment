import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
// /questao2_2/Brazil"
const pages = ["Questão 1", "Questão 2", "Questão 3"];
const questao_1 = [
  { name: "Questão 1.1", path: "/questao1_1" },
  { name: "Questão 1.2", path: "/questao1_2" },
  { name: "Questão 1.3", path: "/questao1_3" },
  { name: "Questão 1.4", path: "/questao1_4" },
];
const questao_2 = [
  {
    name: "Questão 2.1 - Admin Ligado",
    path: "/questao2_1/administrador_ligado",
  },
  {
    name: "Questão 2.1 - Admin Desligado",
    path: "/questao2_1/administrador_desligado",
  },
  { name: "Questão 2.1", path: "/questao2_1" },
  { name: "Questão 2.2 - Brazil", path: "/questao2_2/Brazil" },
  { name: "Questão 2.2", path: "/questao2_2" },
  { name: "Questão 2.3", path: "/questao2_3" },
  { name: "Questão 2.4", path: "/questao2_4" },
];
const questao_3 = [
  { name: "Questão 3.1 - Dados", path: "/questao3_1/dados" },
  { name: "Questão 3.1", path: "/questao3_1" },
  { name: "Questão 3.2", path: "/questao3_2" },
  { name: "Questão 3.3", path: "/questao3_3" },
  { name: "Questão 3.4", path: "/questao3_4" },
];
//
function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  const handleClick = (event, page) => {
    setAnchorEl(event.currentTarget);
    setCurrentPage(page);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPage(null);
  };

  const ItensMenu = {
    "Questão 1": questao_1,
    "Questão 2": questao_2,
    "Questão 3": questao_3,
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
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
                    Boolean(anchorEl) && currentPage === page
                      ? "basic-menu"
                      : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={
                    Boolean(anchorEl) && currentPage === page
                      ? "true"
                      : undefined
                  }
                  onClick={(event) => handleClick(event, page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && currentPage === page}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {ItensMenu[page]?.map((item) => (
                    <MenuItem
                      key={item.path}
                      onClick={handleClose}
                      component={Link}
                      to={item.path}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
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
