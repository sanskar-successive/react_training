import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImportAssignmentOne from '../AssignmentImports/ImportAssignmentOne';
import LandingPage from '../LandingPage';
import ImportAssignmentTwo from '../AssignmentImports/ImportAssignmentTwo';

const AssignmentRoutes = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/assignment-1' element={<ImportAssignmentOne/>}/>
                    <Route path='/assignment-2' element={<ImportAssignmentTwo/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AssignmentRoutes;