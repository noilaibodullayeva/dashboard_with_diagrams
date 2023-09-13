import { Box, Tab, Tabs } from "@mui/material";
import { forwardRef, useState } from "react"
import AlayticsTabHead from "./AnalyticsTabHead";
import { Line } from 'react-chartjs-2'
import { ArrowDropDownCircleSharp, CheckCircle } from "@mui/icons-material";
import TabPanel from "../../components/TabPanel";
import { getMainChartData, mainChartOptions } from './ChartConfig';

const ViewsTabHead = forwardRef((props, ref) => <AlayticsTabHead  {...props}
    title='Views'
    icon={<ArrowDropDownCircleSharp />}
    value='21.4k'
    subtitle={'700 less than usual'}
/>);

const WatchTimeTabHead = forwardRef((props, ref) => <AlayticsTabHead  {...props}
    title='Watch time'
    icon={<ArrowDropDownCircleSharp color='green' sx={{ transform: 'rotate(180deg)' }} />}
    value='400'
    subtitle={'27 less than usual'}
/>);

const SubscribersTabHead = forwardRef((props, ref) => <AlayticsTabHead  {...props}
    title='Subscribers'
    icon={<CheckCircle color='green' />}
    value='2.4k'
    subtitle={'425 more than usual'}
/>);

const RevenueTabHead = forwardRef((props, ref) => <AlayticsTabHead  {...props}
    title='Revenue'
    icon={<ArrowDropDownCircleSharp color='green' sx={{ transform: 'rotate(180deg)' }} />}
    value='$240.6'
    subtitle={'$24 more than usual'}
/>);

function OverviewChart() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={styles.container}>
            <Tabs value={value} onChange={handleChange}>
                <Tab component={ViewsTabHead} id='tab-0' />
                <Tab component={WatchTimeTabHead} id='tab-1' />
                <Tab component={SubscribersTabHead} id='tab-2' />
                <Tab component={RevenueTabHead} id='tab-3' />
            </Tabs>
            <TabPanel value={value} index={0} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
        </Box>
    )
}
export default OverviewChart

/** @type {import('@mui/material').SxProps}* */

const styles = {
    container: {
        mt: 4,
        width: '100%'
    },
    mainChart: {
        height: 250,
        border: 1,
        borderColor: 'neutral.medium',
        pt: 4,
        borderTop: 'none',
        borderRadius: 1
    }
}