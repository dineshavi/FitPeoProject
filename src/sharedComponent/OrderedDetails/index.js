
import React from "react";
import {  Grid, Icon, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './orderDetails.module.css'
import _ from "lodash";

const OrderedDetails = (props) => {
    const { id, icon, income, color, heading, increase, increasevalue, background } = props
    return (
        <Grid container xs={12} sm={12} md={3} gap={1} key={id} className={style.mainCardContainer}>
            <Grid item xs={12} className={style.cardpadding}>
                <Icon style={{
                    color: color, background: background,
                    borderRadius: 12,
                    padding: 8
                }}>{icon}</Icon>
                <Typography variant="body1" style={{
                    fontSize: 14,
                    fontFamily: 'Poppins',
                }} >{heading}</Typography>
            </Grid>
            <Grid item xs={12} className={style.increaseValueContainer}>
                <Typography variant="body1" style={{
                    fontFamily: 'Poppins',
                    fontWeight: 600
                }}>{income}</Typography>
                <span style={{ display: 'flex', alignItems: 'center' }}> {_.isEqual(increase, true) ? <ArrowDropUpIcon style={{ color: "#4ec94b" }} /> : <ArrowDropDownIcon style={{ color: "#d3652e" }} />} <Typography variant="body1" style={{
                    fontSize: 12,
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    color: increase === true ? "#4ec94b" : '#d3652e'
                }}>{increasevalue}%</Typography></span>
            </Grid>
        </Grid>
    )
}

export { OrderedDetails }