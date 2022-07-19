import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import LangContext from "./langContext";
import { FormattedMessage } from "react-intl";

export default function Header() {
  const langContext = useContext(LangContext);
  const { currentLanguage, updateCurrentLanguage } = langContext || {};
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Multi Lingual
        </Typography>
        {currentLanguage === "en" && (
          <Button
            variant="outlined"
            style={{ color: "white" }}
            onClick={() => {
              updateCurrentLanguage("ar");
            }}
          >
            Arabic(عربى)
          </Button>
        )}

        {currentLanguage === "ar" && (
          <Button
            variant="outlined"
            style={{ color: "white" }}
            onClick={() => {
              updateCurrentLanguage("en");
            }}
          >
            English
          </Button>
        )}

        <Button color="inherit">
          <FormattedMessage id="hi" defaultMessage="Hi" />, Pradip Vadher
        </Button>
      </Toolbar>
    </AppBar>
  );
}
