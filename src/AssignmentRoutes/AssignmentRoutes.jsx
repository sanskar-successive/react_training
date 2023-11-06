import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImportAssignmentOne from '../AssignmentImports/ImportAssignmentOne';
import LandingPage from '../LandingPage';

const AssignmentRoutes = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/assignment-1' element={<ImportAssignmentOne/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AssignmentRoutes;