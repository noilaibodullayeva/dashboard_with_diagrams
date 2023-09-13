import { Circle } from "@mui/icons-material"
import { Box, Card, CardContent, Divider, Typography } from "@mui/material"
import ColorText from "../../components/ColorText"
import { Bar } from "react-chartjs-2"
import { realTimeChartData, realtimeChartOptions } from "./ChartConfig"

function RealTimeChart() {
    return (
        <Card sx={styles.realtimeStatsCard}>
            <CardContent>
                <Box>
                    <Typography variant="cardTitle">Real Time</Typography>
                    <Box sx={styles.updateLiveRow}>
                        <Circle sx={styles.dotIcon} />
                        <Typography variant="h7"><ColorText color='neutral.normal'>Updating Live</ColorText></Typography>
                    </Box>
                    <Divider sx={styles.divider} />
                    <Typography sx={styles.valuetext}>4.477</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>Subscribers</ColorText></Typography>
                    <Divider sx={styles.divider} />
                    <Typography sx={styles.valuetext}>1.789</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>Views last 48 hours</ColorText></Typography>
                    <Box sx={styles.realTimeChart}>
                        <Bar options={realtimeChartOptions} data={realTimeChartData } />
                    </Box>
                    <Typography variant="link">See more</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default RealTimeChart

/** @type {import('@mui/material').SxProps}* */

const styles = {
    realtimeStatsCard: {
        mb: 2,
        width: '350px'
    },
    updateLiveRow: {
        display: 'flex',
        alignItems: 'center'
    },
    dotIcon: {
        width: 10,
        color: 'primary.normal',
        mr: 1
    },
    divider: {
        my: 2
    },
    valuetext: {
        fontSize: '1.3rem',
        fontWeight: '400',

    },
    realTimeChart: {
        height: 70,
        mt: 4
    }
}