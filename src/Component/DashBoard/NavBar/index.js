import React from "react";
import styles from './navBar.module.css'
import { Avatar, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import profile from '../../../images/3.jpg';
const NavBar = () => {
   
    return (
        <>

             <div className={styles?.TopBarContainer}>
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
                <div className={styles.iconMainContainer}>
                    <EmailOutlinedIcon className={styles.iconContainer} />
                    <SettingsOutlinedIcon className={styles.iconContainer} />
                    <NotificationsNoneRoundedIcon className={styles.iconContainer} />
               
                    <Avatar alt="Cindy Baker" src={profile} sx={{ width: 32, height: 32 }} />
                </div>


            </div>
        </>


    )
}

export { NavBar }