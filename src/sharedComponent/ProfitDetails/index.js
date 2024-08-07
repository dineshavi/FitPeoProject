
import React from "react";
import { Grid, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './profitDetails.module.css'
import _ from "lodash";
import { ProgressChat } from './ProgressChart'

const ProfitDetails = (props) => {
    const { ProfitDetailsList } = props
    return (
        <Grid container xs={12}>
       <Grid item xs={6}  className={style.mainCardContainer}>
       <Typography variant="body1" style={{
                    fontSize: 12,
                    fontFamily: 'Poppins',
                }} >{ProfitDetailsList?.heading}</Typography>

                <Typography variant="body1" style={{
                    fontSize: 22,
                    fontFamily: 'Poppins',
                    fontWeight: 600
                }} >${ProfitDetailsList?.income}</Typography>

                <span style={{ display: 'flex', alignItems: 'center' }}> {_.isEqual(ProfitDetailsList?.increase, true) ? <ArrowDropUpIcon style={{ color: "#4ec94b" }} /> : <ArrowDropDownIcon style={{ color: "#d3652e" }} />} <Typography variant="body1" style={{
                    fontSize: 12,
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    color: ProfitDetailsList?.increase === true ? "#4ec94b" : '#d3652e'
                }}>{ProfitDetailsList?.increasevalue}%</Typography></span>
        </Grid>
        <Grid item xs={6}>
          <ProgressChat />
        </Grid>
          
        </Grid>


    )
}

export { ProfitDetails }