import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { DashboardOutlined, StyleOutlined, SourceOutlined, AnalyticsOutlined } from "@mui/icons-material";
import {useProSidebar} from 'react-pro-sidebar'
import { Link, useLocation } from "react-router-dom";

function SideNav() {

    const theme = useTheme();

    const {collapsed} = useProSidebar()

    const location = useLocation()

    return (
        <Sidebar
            style={{
                height: '100% ',
                top: '80px'
            }}
            breakPoint="md"
            backgroundColor={theme.palette.neutral.light}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt='channel name' src="/src/assets/avatars/mine.jpg" />
                {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography> : null}
                {!collapsed ? <Typography variant="overline">noila's ...</Typography> : null}
            </Box>
            <Menu
            menuItemStyles={{
                button: ({active}) => {
                    return{
                        backgroundColor: active ? theme.palette.neutral.medium  : undefined
                    }
                }
            }}
            >
                <MenuItem component={<Link to="/"/>} active={location.pathname === '/'} icon={<DashboardOutlined />}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem  component={<Link to="/Content"/>} active={location.pathname === '/Content'} icon={<SourceOutlined />}>
                    <Typography variant="body2">Content</Typography>
                </MenuItem>
                <MenuItem component={<Link to="/Analytics"/>} active={location.pathname === '/Analytics'} icon={<AnalyticsOutlined />}>
                    <Typography variant="body2">Analytics</Typography>
                </MenuItem>
                <MenuItem component={<Link to="/Customization"/>} active={location.pathname === '/Customization'} icon={<StyleOutlined />}>
                    <Typography variant="body2">Customization</Typography>
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

/** @type {import('@mui/material').SxProps}* */
const styles = {
    avatarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }
}

export default SideNav;