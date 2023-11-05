import * as React from "react";
import Menu from "./Menu";
import ProfileForm from "../../../components/signup/ProfileForm";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { COLORS } from "../../../style/colors";
import { AccountCircleOutlined, ExitToAppOutlined, ReceiptLong } from "@mui/icons-material";
import Invoices from "../../../components/settings/Invoices";
import { logout } from "../../../Config/Auth";

enum TabEnum {
  Profile,
  OrderHistory,
}

const Settings = () => {
  const [selectedTab, setSelectedTab] = React.useState<TabEnum>(TabEnum.Profile);
  const items = [
    {
      tab: TabEnum.Profile,
      icon: <AccountCircleOutlined fontSize="large" />,
      label: "Profile",
    },
    {
      tab: TabEnum.OrderHistory,
      icon: <ReceiptLong fontSize="large" />,
      label: "Order history",
    },
  ];

  return (
    <Box sx={{ background: COLORS.basicGrey, height: "100vh" }}>
      <Menu
        content={
          <Box>
            <Typography
              sx={{
                color: COLORS.deepBlue,
                fontSize: "1.8rem",
                fontWeight: 500,
                mb: 4,
              }}
            >
              Settings
            </Typography>
            <Box
              sx={{
                height: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.5rem",
              }}
            >
              <List>
                {items.map((item) => (
                  <ListItem key={item.label}>
                    <ListItemButton
                      selected={selectedTab === item.tab}
                      onClick={() => setSelectedTab(item.tab)}
                      sx={{
                        padding: "1rem 1.5rem",
                        borderRadius: "1rem",
                        "&.Mui-selected, &:hover": {
                          background: selectedTab === item.tab ? "#F4E9DE" : "transparent",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: COLORS.deepBlue }}>{item.icon}</ListItemIcon>
                      <ListItemText
                        sx={{
                          color: COLORS.deepBlue,
                          ".MuiTypography-root": {
                            fontSize: "1.2rem",
                            fontWeight: selectedTab === item.tab ? 600 : 400,
                          },
                        }}
                      >
                        {item.label}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem sx={{ mb: "2rem" }}>
                  <ListItemButton
                    onClick={logout}
                    sx={{
                      padding: "1rem 1.5rem",
                      mb: "2rem",
                      "&:hover, &:focus": { background: "transparent" },
                    }}
                  >
                    <ListItemIcon sx={{ color: COLORS.deepBlue }}>
                      <ExitToAppOutlined fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: COLORS.deepBlue,
                        ".MuiTypography-root": { fontSize: "1.2rem", fontWeight: 500 },
                      }}
                    >
                      Log out
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>
        }
      />
      <Stack
        direction="row"
        justifyContent="center"
        marginLeft={{
          xs: 0,
          md: "350px",
        }}
      >
        <Stack direction="column" justifyContent="center" sx={{ py: "2rem" }} gap={"2rem"}>
          <Box
            component="h3"
            sx={{
              color: COLORS.royablBlue,
              fontSize: "2.5rem",
              fontWeight: 600,
            }}
          >
            {selectedTab === TabEnum.Profile ? "Edit your account" : "Order history"}
          </Box>
          {selectedTab === TabEnum.Profile && (
            <ProfileForm
              displayDeleteAccount
              submitButton={{
                onClick: () => {}, // TODO : update profile
                content: "Save",
              }}
            />
          )}
          {selectedTab === TabEnum.OrderHistory && <Invoices />}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Settings;
