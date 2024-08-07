import React, { useEffect, useState } from "react";
import styles from './navBarMobile.module.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { InputAdornment, TextField } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
const NavBarMobile = () => {

    const [hambugerOpen, setHamburgerOpen] = useState(false)
    const handleClickOpen = () => {
        setHamburgerOpen(true)
      
    }
    const handleClickClose = () => {
        setHamburgerOpen(false)
 
    }
    useEffect(() => {
        setHamburgerOpen(false)
        window.scrollTo(0,0)
    }, [])
    return (
        <div className={styles.mobileContainer}>
            <DashboardIcon className={styles.iconMainContainer} />
            <div>

                <TextField
                    id="outlined-start-adornment"
                    size="small"
                    sx={{ m: 1 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{<SearchIcon />}</InputAdornment>,
                    }}
                    placeholder="Search"
                />
            </div>
            <div className={styles?.hamburgerMenu} onClick={() => handleClickOpen()} >{ <MenuOutlinedIcon />}  </div >
            {hambugerOpen && 
            <header className={styles?.header}>
                <nav aria-label="main mailbox folders">
                <div className={styles?.hamburgerMenu} onClick={() => handleClickClose() } >{ <CloseOutlinedIcon style={{padding:'12px'}} />}  </div >

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EmailOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mail" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <NotificationsNoneRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Notification" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </header>}
        </div>

    )
}

export { NavBarMobile }