import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AssignmentOne, AssignmentTwo} from '../MainAssignments';
import LandingPage from '../LandingPage';

const AssignmentRoutes = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/assignment-1' element={<AssignmentOne/>}/>
                    <Route path='/assignment-2' element={<AssignmentTwo/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AssignmentRoutes;