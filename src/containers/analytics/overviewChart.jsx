import { Box, Tab, Tabs } from "@mui/material";
import { forwardRef, useState } from "react"

const ViewsTabHead = forwardRef((props, ref))=>

function OverviewChart() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue)=> {
        setValue(newValue)
    }

    return(
        <Box sx={StyleSheet.container}>
            <Tabs value={value} onChange={handleChange}>
                    <Tab component='' id='tab-0' />
                    <Tab component='' id='tab-1' />
                    <Tab component='' id='tab-2' />
                    <Tab component='' id='tab-3' />
                </Tabs>
        </Box>
    )
}
export default OverviewChart