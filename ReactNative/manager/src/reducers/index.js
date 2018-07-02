import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeUpdate from './EmployeeUpdate';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers ({
    auth: AuthReducer,
    employeeForm: EmployeeUpdate,
    employees : EmployeeReducer
});