import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Signup_Index from "./auth/signup/index";
import Signup_Step2 from "./auth/signup/step2";
import Signup_Step3 from "./auth/signup/step3";
import Landing from "./landing";

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/auth">
          <Route path="login" element={<Login/>}/>
          <Route path="signup">
            <Route index element={<Signup_Index/>}/>
            <Route path="step2" element={<Signup_Step2/>}/>
            <Route path="step3" element={<Signup_Step3/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;