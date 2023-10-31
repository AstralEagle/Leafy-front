import { Inbox, Mail } from "@mui/icons-material";
import HangarSideBackground from "../../../assets/images/hangarBlue.svg";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import * as React from "react";
import { COLORS } from "../../../style/colors";

interface MenuProps {
  content: JSX.Element;
}

const Menu = ({ content }: MenuProps) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpened((prev) => open);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      variant="permanent"
      open={isOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        sx={{
          background: COLORS.pastelPink,
          backgroundSize: "cover",
          position: "relative",
          height: "100vh",
          zIndex: -1,
          padding: "2rem",
          minWidth: "350px",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            background: `url(${HangarSideBackground})bottom`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "100%",
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            position: "absolute",
          }}
        />
        {content}
      </Box>
    </SwipeableDrawer>
  );
};

export default Menu;
