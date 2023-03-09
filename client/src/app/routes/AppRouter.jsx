import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFoundPage/NotFoundPage';
import DynamicsPage from '../pages/DynamicsPage/DynamicsPage';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/dynamics' element={ <DynamicsPage /> }/>
                <Route path='*' element={ <NotFound /> } />
            </Routes>
        </>
    )
}

export default AppRouter;