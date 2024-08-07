import { Grid, Icon, Typography } from "@mui/material";
import React from "react";
import style from './menuItems.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const MenuItems=(props)=>{
    const{icon,menuName,background,color}=props
    return(
       <Grid item xs={12}className={style?.menuItemListContainer} >
        <Grid item xs={10} className={style?.menuItemContainer}>
            <Icon  style={{backgroundColor:background,color:color}}className={style?.iconMenuBorderContainer}s>{icon}</Icon>
            <Typography variant="body1">{menuName}</Typography>

        </Grid>
        <Grid item xs={2}  className={style?.iconConatiner}><Icon className={style?.arrowContainer} ><ArrowForwardIosIcon style={{    fontSize: 16,
    transform: 'translate(2px, -6px)'}}/></Icon></Grid>
        </Grid>
    )
}

export {MenuItems}