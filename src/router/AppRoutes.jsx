import Analytics from "../containers/analytics/Analytics";
import Content from "../containers/content/Content";
import Customization from "../containers/custimization/Customization";
import Dashboard from "../containers/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
return(
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/content" element={<Content/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/Customization" element={<Customization/>} />
    </Routes>
)
}

export default AppRoutes;