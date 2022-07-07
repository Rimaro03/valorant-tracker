import { Backdrop, Button, CircularProgress, IconButton, Slide, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../../../styles/themes/theme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../../../context/ui/ui";
import { useState } from "react";
import { playerRequest } from "../../../../API/request";
import { useNavigate } from "react-router-dom";

const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: Colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 0.9,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.secondary,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));

export default function Search() {
  const { showSearchBox, setShowSearchBox } = useUIContext();
  const { loadingOpen, setLoadingOpen } = useUIContext();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    const nick = text.split("#")[0];
    const tag = text.split("#")[1];
    playerRequest(`v1/account/${nick}/${tag}`).then((res) => {
      if (res) {
        window.localStorage.setItem("playerStats", JSON.stringify(res.data));
        navigate("/player")
      } else {
        alert("errore");
      }
    });
  };

  return (
    <Backdrop direction="down" open={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="nickname#tag"
          onChange={handleChange}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Backdrop>
  );
}
