import React from "react";
import { SideBar } from "./SideBar";
import styles from './SideBar/sideBar.module.css'
import { useTheme } from "@emotion/react";
import {  useMediaQuery } from "@mui/material";
import { NavBar } from "./NavBar";
import {NavBarMobile} from '../MobileView/NavBarMobile'
import { Footer } from "../MobileView/Footer";
import { DashboardScreen } from "./Modules/DashBoardScreen";
const Dashboard = () => {
    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            {onlySmallScreen ? <div>
            <NavBarMobile/>
            <DashboardScreen/>
            <Footer/>
            </div> :

                <div className={styles.wapperContainer}>
                    <div className={styles.sidebar}>
                        <SideBar classes={styles} />
                    </div>
                    <div className={styles.navBarContainer}>
                        <NavBar />
<DashboardScreen/>
                    </div>
                </div>}
        </>


    )
}

export { Dashboard }