import logo from './logo.svg';
import './App.css';
import {
  Avatar, AppBar, Box, Button, Container, Card, CardActions, CardContent, Menu, MenuItem, Toolbar, Tooltip, Typography, IconButton, Paper, Grid, Rating, styled, Stack
} from '@mui/material';
import { purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { color, style } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { BsFillCaretDownFill } from "react-icons/bs";
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BootstrapButton = styled(Button)({

  '&:hover': {
    backgroundColor: 'black',
    borderColor: 'black',
    boxShadow: 'none',
    color: 'white'
  },
});

const pages = ['Home', 'About'];
const settings = ['All Products', 'Popular items', 'New Arrivals'];

function App() {
  const [value, setValue] = React.useState(2);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const [order, setOrder] = useState(0);
  const handleIncreament = () => {
    setOrder(order + 1);
  }
  const handleDecreament = () => {
    setOrder(order - 1);
  }

  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  }

  const [render2, setRender2] = useState(true)

  const handleToggle2i = (Bool) => {
    handleIncreament();
    scrollTop();
    setRender2(!Bool)
  }
  const handleToggle2d = (Bool) => {
    handleDecreament();
    scrollTop();
    setRender2(!Bool)
  }
  const [render3, setRender3] = useState(true)
  const handleToggle3i = (Bool) => {
    handleIncreament();
    scrollTop();
    setRender3(!Bool)
  }
  const handleToggle3d = (Bool) => {
    handleDecreament();
    scrollTop();
    setRender3(!Bool)
  }
  const [render4, setRender4] = useState(true)
  const handleToggle4i = (Bool) => {
    handleIncreament();
    scrollTop();
    setRender4(!Bool)
  }
  const handleToggle4d = (Bool) => {
    handleDecreament();
    scrollTop();
    setRender4(!Bool)
  }
  const [render5, setRender5] = useState(true)
  const handleToggle5i = (Bool) => {
    handleIncreament();
    scrollTop();
    setRender5(!Bool)
  }
  const handleToggle5d = (Bool) => {
    handleDecreament();
    scrollTop();
    setRender5(!Bool)
  }
  const [render7, setRender7] = useState(true)
  const handleToggle7i = (Bool) => {
    handleIncreament();
    scrollTop();
    setRender7(!Bool)
  }
  const handleToggle7d = (Bool) => {
    handleDecreament();
    scrollTop();
    setRender7(!Bool)
  }
  const [render8, setRender8] = useState(true)
  const handleToggle8i = (Bool) => {
    handleIncreament();
    scrollTop();
    setRender8(!Bool)
  }
  const handleToggle8d = (Bool) => {
    handleDecreament();
    scrollTop();
    setRender8(!Bool)
  }

  return (
    <div>

      <AppBar position="static" style={{ backgroundColor: 'white', color: 'Black' }}>
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              style={{ padding: '30px' }}
            >Start Bootstrap
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                marginLeft="50px"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" >{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 350 }} style={{ paddingLeft: '10px', marginLeft: '10px', textAlign: 'left' }}>
              <Tooltip title="Open Items">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography noWrap component="div" style={{ color: 'black' }}
                  // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  > Shop  <BsFillCaretDownFill /> </Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={10}>
              </Grid>
              <Grid item xs={2}>
                <Badge color="secondary" badgeContent={order} style={{ border: ' solid 1px black', padding: '5px' }} >
                  <ShoppingCartIcon /> Cart
                </Badge>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <Box style={{ width: '100%vw', height: '100px', backgroundColor: 'rgba(0, 0, 0, 0.74)', textAlign: 'center', padding: '75px' }}>
        <Typography variant="h3" component="div" style={{ color: 'white', fontWeight: 'bolder', padding: '10px' }}>
          Shop in style
        </Typography>
        <Typography component="div" style={{ color: 'gray', fontWeight: 'lighter', }}>
          With this shop homepage template
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ padding: '25px', backgroundColor: 'Black' }}>
        <Grid container spacing={2}>
          <Grid item xs={2}> </Grid>

          <Grid item xs={2} >
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Fancy Products
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                  $40.00 - $80.00
                </Typography>
              </CardContent>
              <CardActions style={{ paddingBottom: '5px' }}>
                <Box className='select'>
                  <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none', marginBottom: '100px' }} onClick={scrollTop}> View options
                  </BootstrapButton></Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Special item
                </Typography>
                <Box sx={{ '& > legend': { mt: 2 }, }} style={{ textAlign: 'center' }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Typography color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                  <span style={{ textDecorationLine: 'line-through' }}>$20.00 </span> $18.00
                </Typography>
              </CardContent>
              <CardActions>
                <Box className='selectstar'>

                  {render2 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle2i(render2)} >Add to carts </BootstrapButton>
                    :
                    <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle2d(render2)} >Remove from cart </BootstrapButton>
                  }
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Grid item xs={2} >
              <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <div className='header'> 450 x 300  </div>
                  </Typography>
                  <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                    Sale item
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                    <span style={{ textDecorationLine: 'line-through' }}>$50.00 </span> $25.00
                  </Typography>
                </CardContent>
                <CardActions style={{ paddingBottom: '5px' }}>
                  <Box className='select'>
                    {render3 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle3i(render3)}>Add to carts </BootstrapButton>
                      :
                      <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle3d(render3)}>Remove from cart </BootstrapButton>
                    }
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Popular item
                </Typography>
                <Box sx={{ '& > legend': { mt: 2 }, }} style={{ textAlign: 'center' }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Typography color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center', }}> $40.00  </Typography>
              </CardContent>
              <CardActions>
                <Box className='selectstar'>
                  {render4 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle4i(render4)}>Add to carts </BootstrapButton>
                    :
                    <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle4d(render4)}>Remove from cart </BootstrapButton>
                  }
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={2}> </Grid>
          <Grid item xs={2}  >
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Sale Item
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                  <span style={{ textDecorationLine: 'line-through' }}>$50.00</span>  $25.00
                </Typography>
              </CardContent>
              <CardActions style={{ paddingBottom: '5px' }}>
                <Box className='select'>
                  {render5 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle5i(render5)}>Add to carts </BootstrapButton>
                    :
                    <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle5d(render5)}>Remove from cart </BootstrapButton>
                  }

                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}  >
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Fancy Products
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                  $120.00 - $280.00
                </Typography>
              </CardContent>
              <CardActions style={{ paddingBottom: '5px' }}>
                <Box className='select'>
                  <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none', marginBottom: '100px' }} onClick={scrollTop}> View options
                  </BootstrapButton></Box>
              </CardActions>
            </Card>
          </Grid>


          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Special item
                </Typography>
                <Box sx={{ '& > legend': { mt: 2 }, }} style={{ textAlign: 'center' }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Typography color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                  <span style={{ textDecorationLine: 'line-through' }}>$20.00 </span> $18.00
                </Typography>
              </CardContent>
              <CardActions>
                <Box className='selectstar'>
                  {render7 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle7i(render7)}>Add to carts </BootstrapButton>
                    :
                    <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle7d(render7)}>Remove from cart </BootstrapButton>
                  }
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }} style={{ margin: '20px', height: '300px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div className='header'> 450 x 300  </div>
                </Typography>
                <Typography variant="h5" component="div" style={{ paddingTop: '20px', textAlign: 'center' }}>
                  Popular item
                </Typography>
                <Box sx={{ '& > legend': { mt: 2 }, }} style={{ textAlign: 'center' }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Typography color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center', }}> $40.00 </Typography>
              </CardContent>
              <CardActions>
                <Box className='selectstar'>
                  {render8 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle8i(render8)}>Add to carts </BootstrapButton>
                    :
                    <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle8d(render8)}>Remove from cart </BootstrapButton>
                  }
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ width: '100%vw', height: '100px', backgroundColor: 'rgba(0, 0, 0, 0.74)', textAlign: 'center' }}>

        <Typography component="div" style={{ color: 'white', padding: '40px' }}>
          Copyright © Your Website 2021
        </Typography>
      </Box>

    </div>

  );
}

export default App;
