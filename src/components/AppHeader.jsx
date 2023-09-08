import {
    Logout,
    MenuTwoTone,
    Notifications,
    Settings
} from "@mui/icons-material";
import {
    AppBar,
    Badge, 
    Box, 
    IconButton, 
    Toolbar
} from "@mui/material";
import {useProSidebar} from 'react-pro-sidebar'

function AppHeader() {
    const {collapseSidebar, toggleSidebar, broken} = useProSidebar()
    return (
        <AppBar pocition='sticky' sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color='secondary'>
                    <MenuTwoTone />
                </IconButton>
                <Box
                    component='img'
                    sx={styles.appLogo}
                    src='/src/assets/avatars/kisspng-logo-font-flame-logo-5b4b2d7c7630f8.6261563915316535004841.png'
                />
                <Box sx={{flexGrow: 1}}/>
                <IconButton title='notifications' color="secondary">
                    <Badge badgeContent={20} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <IconButton title="setting" color="secondary">
                    <Settings />
                </IconButton>
                <IconButton title="sign out" color="secondary">
                    <Logout />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

/** @type {import('@mui/material').SxProps}* */
const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        width: '60px',
        height: '80px',
        ml: 2,
        cursor: 'pointer'
    }
}
export default AppHeader;