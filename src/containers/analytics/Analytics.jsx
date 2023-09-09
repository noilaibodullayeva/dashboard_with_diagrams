import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import OverviewChart from "./overviewChart";
import TopvideosList from "./TopvideosList";
import RealTimeChart from "./RealtimeChart";
import LatestVideoCard from "../../components/LatestVideoCard"


function Analytics() {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Typography sx={styles.pagetitle} variant='h5'>
                Analytics
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Overview' id='tab-0' />
                    <Tab label='Content' id='tab-1' />
                    <Tab label='Audience' id='tab-2' />
                    <Tab label='Revenuev' id='tab-3' />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={styles.overviewContainer}>
                    <Box sx={styles.statsContainer}>
                        <Typography variant="h5">
                            Your channel got 28,098 subscribers in the last 28 days
                        </Typography>
                        <OverviewChart />
                        <Divider sx={styles.divider} />
                        <TopvideosList />
                    </Box>
                    <Box>
                        <RealTimeChart/>
                        <LatestVideoCard/>
                    </Box>

                    </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography>Test 2</Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography>Test 3</Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Typography>Test 4</Typography>
            </TabPanel>
        </Box>

    )
}

export default Analytics;


/** @type {import('@mui/material').SxProps}* */

const styles = {
    pagetitle: {
        mb: 2
    },
    videoColumn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoDesc: {
        fontSize: '0.7rem',
        color: 'neutral.normal',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    videoDetails: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        ml: 2
    },
    videoThumbnail: {
        width: 120
    },
    videoTitle: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        },
    },
    iconColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem'
    }

}