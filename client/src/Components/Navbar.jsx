import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src="./src/Components/img/wepik-export-20230914195259Hv6V.png"
            alt="Logo"
            style={{ width: "80px", height: "80px" }}
            onClick={() => {
              window.location.href = "http://localhost:5173/";
            }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href = "http://localhost:5173/";
              }}
            >
              The Dog Spot
              <PetsRoundedIcon />
            </Button>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              window.location.href = "http://localhost:5173/pets";
            }}
          >
            Pets
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              window.location.href = "http://localhost:5173/goforwalk";
            }}
          >
            Go for a walk
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              window.location.href = "http://localhost:5173/adopt";
            }}
          >
            Adoption
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              window.location.href = "http://localhost:5173/donate";
            }}
          >
            Donate
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              window.location.href = "http://localhost:5173/lostpage";
            }}
          >
            Lost & Found
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
