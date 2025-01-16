import { ReactNode } from 'react';
import { useAppDispatch } from '../../redux/features/hooks';
import { useCurrentToken } from '../../redux/features/auth/authSlice';
import { Navigate, replace } from 'react-router-dom';
const ProtectedRoute=({children}:{children:ReactNode})=>{
    const token=useAppDispatch(useCurrentToken)
    if(!token){
        return <Navigate to="/login" replace={true}/>
    }
    return children;
}
export default ProtectedRoute;