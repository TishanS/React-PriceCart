import './product.css';
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
import { Route, Routes, useNavigate } from 'react-router-dom';
import data from './data';



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

const TestButton = styled(Button)({

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


    const navigate = useNavigate();
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);

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


    const handleToggle = async (e) => {
        let id = e.target.id;
        console.log(id)
        if (document.getElementById(`${id}`).innerText === "Add to carts") {
            handleIncreament()
            scrollTop();
            document.getElementById(`${id}`).innerText = "Remove from cart";
            const c = await productItems.filter(item => id === item.id)
            await setCartItems([...cartItems, c])
            console.log(cartItems);

        }
        else if (e.target.textContent === "Remove from cart") {
            handleDecreament();
            scrollTop();
            e.target.textContent = "Add to carts"
        }
        console.log(e.target.id, e.target.textContent)
    }

    return (
        <div>
            <header><Routes><Route productItems={productItems} cartItems={cartItems} /></Routes></header>

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


                            <div className="cart">
                                <button type="button" class="btn btn-outline-dark" onClick={() => navigate('/checkout', { state: { cartItems } })} >

                                    <Badge color="secondary" badgeContent={order} style={{ border: ' solid 1px black', padding: '5px' }} >
                                        <ShoppingCartIcon /> Cart
                                    </Badge>

                                </button></div>
                            <br />

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
                            <div className='select' >
                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='1' onClick={scrollTop} >View options </TestButton>
                            </div>

                            {/* <CardActions style={{ paddingBottom: '5px' }}>
                <Box className='select'>
                  <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none', marginBottom: '100px' }} onClick={scrollTop}> View options
                  </BootstrapButton></Box>
              </CardActions> */}

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

                            <div className='select' >
                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='2' onClick={(e) => handleToggle(e)} >Add to carts </TestButton>
                            </div>

                            {/* <CardActions>
                <Box className='selectstar'>

                  {render2 ? <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle2i(render2)} >Add to carts </BootstrapButton>
                    :
                    <BootstrapButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} onClick={() => handleToggle2d(render2)} >Remove from cart </BootstrapButton>
                  }
                </Box>
              </CardActions> */}
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
                                    <Typography sx={{ mb: 2 }} color="text.secondary" style={{ paddingTop: '5px', textAlign: 'center' }}>
                                        <span style={{ textDecorationLine: 'line-through' }}>$50.00 </span> $25.00
                                    </Typography>
                                </CardContent>
                                <div className='select' >

                                    <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='3' onClick={(e) => handleToggle(e)} >Add to carts </TestButton>
                                </div>

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

                            <div className='select' >
                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='4' onClick={(e) => handleToggle(e)} >Add to carts </TestButton>

                            </div>

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

                            <div className='select' >
                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='5' onClick={(e) => handleToggle(e)} >Add to carts </TestButton>
                            </div>

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
                            <div className='select' >

                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='6' onClick={scrollTop} >View options </TestButton>
                            </div>

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

                            <div className='select' >
                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='7' onClick={(e) => handleToggle(e)} >Add to carts </TestButton>
                            </div>

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
                            <div className='select' >
                                <TestButton variant="outlined" disableRipple size='small' style={{ textTransform: 'none' }} id='8' onClick={(e) => handleToggle(e)} >Add to carts </TestButton>
                            </div>

                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ width: '100%vw', height: '100px', backgroundColor: 'rgba(0, 0, 0, 0.74)', textAlign: 'center' }}>

                <Typography component="div" style={{ color: 'white', padding: '40px' }}>
                    Copyright © Your Website 2022
                </Typography>
            </Box>

        </div>

    );
}

export default App;
