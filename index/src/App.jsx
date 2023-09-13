import React from 'react'
import './App.css'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import { ProSidebarProvider } from 'react-pro-sidebar'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';

function App() {

  return (
    <>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
            <CssBaseline />
            <AppHeader />
            <Box sx={styles.container}>
              <BrowserRouter>
                <SideNav />
                <Box component={'main'} sx={styles.mainSection}>
                  <AppRoutes />
                </Box>
              </BrowserRouter>
            </Box>
          </ProSidebarProvider>
        </ThemeProvider>
      </React.Fragment>
    </>
  )
}


/** @type {import('@mui/material').SxProps}* */
const styles = {
  container: {
    bgcolor: 'neutral.light',
    display: 'flex',
    height: '100%'
  },
  mainSection: {
    pl: 4,
    mt: '90px',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },

}

export default App
