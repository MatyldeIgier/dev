import React, {Component} from 'react';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications'

class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount () {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is ${shift}`);
    }

    onAccept () {
        const { uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline () {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
            <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Change
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onDecline={this.onDecline.bind(this)}
                    onAccept={this.onAccept.bind(this)}
                >
                    Are you sure you want to fire this employee ?
                </Confirm>
            </Card>
        );

    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}



export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);