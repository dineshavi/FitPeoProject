import { Avatar, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import style from './feedBack.module.css'
const FeedBackDetails=(props)=>{
    const {reviewerName,ratingCount,menuName}=props
return(
    <Grid item xs={12}className={style?.menuItemListContainer} >
    <Grid item xs={12} className={style?.menuItemContainer}>
    <Avatar sx={{ bgcolor: '#FF007F2' }}>{reviewerName?.charAt(0)}</Avatar>
        <Typography variant="body1">{reviewerName}</Typography>
    </Grid>
    <Grid item xs={12}>
    <Rating name="size-medium"  readOnly defaultValue={ratingCount} />

    </Grid>
    <Grid item xs={12}>
    <Typography variant="body1" style={{fontSize:'12px',fontFamily:'Poppins'}}>{menuName}</Typography>

    </Grid>
    </Grid>
)
}

export {FeedBackDetails}