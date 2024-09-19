import { Route, Routes } from "react-router";
import LoginScreen from "./component/Login/loginScreen";
import ForgotPassword from "./component/Login/forgotPassword";
import OtpVerification from "./component/OTPVerfication/otpverify";
import Signup from "./component/SignUp/signup";
import PersonalDetail from "./component/Information/Personaldetails/personalDetail";
import ActivityLevel from "./component/Information/Activitylevels/activityLevel";
import Goals from "./component/Information/Goalss/goals";
import ReadySetGo from "./component/Information/ReadySet/readySet";
import Home from "./component/CommonComponent/home";
import Diet from "./component/CommonComponent/diet";
import Report from "./component/CommonComponent/report";

export default function Navigate() {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/otpverify" element={<OtpVerification />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/personalDetail" element={<PersonalDetail />} />
            <Route path="/activityLevel" element={<ActivityLevel />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/readySet" element={<ReadySetGo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/diet" element={< Diet />} />
            <Route path="/report" element={< Report />} />
        </Routes>
    )
}