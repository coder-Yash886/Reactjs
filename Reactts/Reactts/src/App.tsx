//import User from "./components/User"

import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"

//import Button from "./components/Button"


const App = () => {
  return (
    <div>
      {/* <User name="Yash Kumar" age={20} isStudent={true}/> */}

    {/* <Button label="Click" 
    onClick={() => console.log("Clicked")} 
    disabled={false}/> */}

    <UserInfo name="Yash Kumar" city="Bijnor" age={30} gender="Male"/>
    <AdminInfo name="Admin Dashboard" city="Bijnor" age={40} gender="Male"/>

    </div>
  )
}

export default App
