import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Icon, useMediaQuery } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import _ from "lodash";
import styles from './footer.module.css'
const Footer = () => {
    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [selctedItem, setSelectedItem] = useState('Home')
    const SidebarMenuList = [{ id: 1, icon: <HomeIcon />, iconName: 'Home' }, { id: 2, icon: <InsertChartIcon />, iconName: 'Chat' }, { id: 3, icon: <AssignmentTurnedInIcon />, iconName: 'Assignment' }, { id: 4, icon: <ShoppingBagIcon />, iconName: 'Shopping' }, { id: 5, icon: <AccountBalanceWalletIcon />, iconName: 'Wallet' }]
    const handleClick = (item) => {
        setSelectedItem(item?.iconName)
    }
    useEffect(()=>{
        setSelectedItem('Home')
    },[])
    return (
                <div className={styles?.sidebarMenuListIcon}>

{SidebarMenuList.map((item) => {
    return (
        <div key={item?.id} onClick={() => handleClick(item)}>

            <Icon className={_.isEqual(selctedItem,item?.iconName) ? styles?.selectedIconColor : styles.defaultIconColor}>{item.icon}</Icon>
        </div>
    )
})}
        </div>

    )
}

export { Footer }