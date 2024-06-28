import ApplyforLeave from "./auth/ApplyforLeave"
import ApplyforLoan from "./auth/ApplyforLoan"
import AttandanceList from "./auth/AttandanceList"
import Attendance from "./auth/Attendance"
import Home from "./auth/Home"
import Leaves from "./auth/Leaves"
import Loan from "./auth/Loan"
import Notification from "./auth/Notification"
import PaySlip from "./auth/PaySlip"
import Profile from "./auth/Profile"
import TeamMember from "./auth/TeamMember"
import Login from "./nonAuth/Login"

const nonAuthScreen = {
    Login
}

const authScreen = {
    Home, Leaves, PaySlip, ApplyforLeave, Attendance, Profile,
    Notification, TeamMember, AttandanceList, ApplyforLoan,
    Loan
}

export {
    nonAuthScreen, authScreen
}