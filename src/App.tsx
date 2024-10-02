import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Material UI
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import OptionsMenu from './component/OptionsMenu';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Page
import About from "./page/About.tsx";
import Login from "./page/Login.tsx";
import Register from "./page/Register.tsx";
import Schedule from "./page/Schedule.tsx";
import Room from "./page/Room.tsx";
import Popup from "./page/Popup.tsx";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                  {
                    marginRight: 5,
                  },
                  open && { display: 'none' },
                ]}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" className="text-black">
                Adira Finance
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <Typography variant="h6" noWrap component="div">
                User
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <Stack
              sx={{
                flexGrow: 1,
                p: 1,
                justifyContent: 'space-between',
              }}
            >
              <List dense>
                <Link to={'/'} color="inherit">
                  <ListItem key={"Specialization"} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                        },
                        open
                          ? {
                            justifyContent: 'initial',
                          }
                          : {
                            justifyContent: 'center',
                          },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: 'center',
                          },
                          open
                            ? {
                              mr: 3,
                            }
                            : {
                              mr: 'auto',
                            },
                        ]}
                      >
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={[
                          {
                            color: 'black'
                          },
                          open
                            ? {
                              opacity: 1,
                            }
                            : {
                              opacity: 0,
                            },
                        ]}
                      >Home</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to={'/schedule'} color="inherit">
                  <ListItem key={"Schedule"} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                        },
                        open
                          ? {
                            justifyContent: 'initial',
                          }
                          : {
                            justifyContent: 'center',
                          },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: 'center',
                          },
                          open
                            ? {
                              mr: 3,
                            }
                            : {
                              mr: 'auto',
                            },
                        ]}
                      >
                        <AccessTimeIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={[
                          {
                            color: 'black'
                          },
                          open
                            ? {
                              opacity: 1,
                            }
                            : {
                              opacity: 0,
                            },
                        ]}
                      >Schedule</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                
                <Divider />
              </List>

              <List dense>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                        },
                        open
                          ? {
                            justifyContent: 'initial',
                          }
                          : {
                            justifyContent: 'center',
                          },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: 'center',
                          },
                          open
                            ? {
                              mr: 3,
                            }
                            : {
                              mr: 'auto',
                            },
                        ]}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={[
                          open
                            ? {
                              opacity: 1,
                            }
                            : {
                              opacity: 0,
                            },
                        ]}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
            <Stack
              direction="row"
              sx={{
                p: 2,
                gap: 1,
                alignItems: 'center',
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Avatar
                sizes="small"
                alt="Riley Carter"
                src="/static/images/avatar/7.jpg"
                sx={{ width: 36, height: 36 }}
              />
              <Box
                sx={[
                  {
                    mr: 'auto'
                  },
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              >
                <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                  Riley Carter
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  riley@email.com
                </Typography>
              </Box>
              <OptionsMenu />
            </Stack>
          </Drawer>
          <Routes>
            <Route path={"/register"} element={<Register />}></Route>
            <Route path={"/login"} element={<Login />}></Route>
            <Route path={"/about"} element={<About />}></Route>
            <Route path={"/schedule"} element={<Schedule />}></Route>
            <Route path={"/room"} element={<Room />}></Route>
            <Route path={"/popup"} element={<Popup/>}></Route>
          </Routes>
        </Box>
      </Router>
    </>
  );
}

export default App;