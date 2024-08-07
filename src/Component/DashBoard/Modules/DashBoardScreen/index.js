import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import style from './dashboardScreen.module.css'
import { OrderedDetails } from "../../../../sharedComponent/OrderedDetails";
import AdjustIcon from '@mui/icons-material/Adjust';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { useTheme } from "@emotion/react";
import TableContainer from '../../../../sharedComponent/TableContainer/';
import { ProfitDetails } from "../../../../sharedComponent/ProfitDetails";
import { MonthlyChat } from "../../../../sharedComponent/MonthyChart";
import { MenuItems } from "../../../../sharedComponent/MenuItems";
import LunchDiningSharpIcon from '@mui/icons-material/LunchDiningSharp';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import { FeedBackDetails } from "../../../../sharedComponent/FeedBackDetails";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
const OrderDetails = [{
    id: 1,
    color: '#000',
    heading: 'Total Orders',
    income: 75,
    increase: true,
    increasevalue: 3,
    color: '#006994',
    background:'#00699420',
    icon: <WorkHistorySharpIcon />
}, {
    id: 2,
    color: '#00ff00',
    background:'#00ff0020',
    heading: 'Total Delivered',

    income: 70,
    increase: false,
    increasevalue: 3,
    icon: <AddModeratorIcon />

}, {
    id: 3,
    color: '#Ffa500',
    background:'#Ffa50020',
    heading: 'Total Cancelled',
    income: `${'05'}`,
    increase: true,
    increasevalue: 3,
    icon: <AdjustIcon />

}, {
    id: 4,
    color: '#FF007F',
    background:'#FF007F20',
    heading: 'Total Revenue',
    income: `${'$12k'}`,
    increase: false,
    increasevalue: 3,
    icon: <MoneyOffIcon />

}]

const ProfitDetailsList = {
    heading: 'Net Profit',
    income: '6759.25',
    increase: true,
    increasevalue: 3,
    completedGoal: '70%',
    valueText: '*The value has neen rounded off'
}

const MenuItemsList = [{
    id: 1,
    icon: <AdjustIcon />,
    menuName: 'Goals',
    color:'#Ffa500',
    background:'#Ffa50020'
}, {
    id: 2,
    icon: <LunchDiningSharpIcon />,
    menuName: 'Popular Dishes',
    color:'#0000FF',
    background:'#0000FF20'
}, {
    id: 3,
    icon: <WorkHistorySharpIcon />,
    menuName: 'Menus',
    color:'#006994',
    background:'#00699420'
}]
const FeedBackDetailsItemsList = [{
    id: 1,
    reviewerName: 'Jiffy J',
    icon: <AdjustIcon />,
    ratingCount:4,
    menuName: 'I and my friend had dinner here one of the nights we were in Kalpetta. The ambiance was good and the food recommendations were great. We had a traditional Arabian rice and chicken preparation, Kuzhi Manthi. It was our first experience having this dish, and although a bit dry, it tasted great. Would recommend this place that easily noticed from a vehicle and has ample parking.',
}, {
    id: 2,
    reviewerName: 'keru2507',
    ratingCount:3,
    icon: <LunchDiningSharpIcon />,
    menuName: 'The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel.',
}, {
    id: 3,
    reviewerName: 'prince070968',
    ratingCount:4.5,
    icon: <WorkHistorySharpIcon />,
    menuName: 'Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders.',
}]
const DashboardScreen = () => {
    const theme = useTheme();

    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ height:onlySmallScreen? '90vh':'94vh', overflowY: 'scroll',backgroundColor:'#eceff1' }}>
            <Grid container xs={12} p={1.5}>
                <Grid item xs={12} p={1.5} >
                    <Typography variant="body1" style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 600
                    }}>DashBoard</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={8} className={onlySmallScreen ? style.cardContainerColumn : style.cardContainer}>
                    {OrderDetails.map((item, index) => {
                        return (
                            <OrderedDetails
                                key={index}
                                id={item?.id}
                                color={item?.color}
                                background={item?.background}
                                heading={item?.heading}
                                income={item?.income}
                                icon={item?.icon}
                                increase={item?.increase}
                                increasevalue={item?.increasevalue}

                            />
                        )
                    })}
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={onlySmallScreen ? style.ProfileCardContainer : style?.ProfileCardContainerNonMobile}>
                    <ProfitDetails ProfitDetailsList={ProfitDetailsList} />
                </Grid>

            </Grid>
            <Grid container xs={12}gap={1.5}  p={1.5} spacing={1}>
                <Grid item xs={11.8} sm={11.8} md={7.8}><MonthlyChat /></Grid>
                <Grid item xs={12} sm={12} md={4} className={style?.menuListContainer}>{MenuItemsList?.map((item, index) => (<MenuItems key={item?.id} icon={item?.icon} menuName={item?.menuName}background={item?.background}color={item?.color} />))}</Grid>
            </Grid>
            <Grid container xs={12} gap={1.5} p={1.5}>
                <Grid item xs={11.8} sm={11.8} md={7.8}><TableContainer /></Grid>
                <Grid item xs={12} sm={12} md={4} className={style?.feedBackListContainer}>

                    <Typography variant="body1"className={style?.headingContainer}>Customer FeedBack</Typography>
                    {FeedBackDetailsItemsList?.map((item, index) => (<FeedBackDetails key={item?.id}ratingCount={item?.ratingCount} icon={item?.icon} reviewerName={item?.reviewerName}menuName={item?.menuName} />))}</Grid>
            </Grid>
        </div>


    )
}

export { DashboardScreen }