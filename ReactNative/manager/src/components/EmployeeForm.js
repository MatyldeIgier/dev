import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {Input, CardSection} from './common';
import {employeeUpdate} from '../actions';
import {connect} from 'react-redux';


class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        placeholder="Jane"
                        label="Name"
                        value={this.props.name}
                        onChangeText={
                            text => this.props.employeeUpdate({prop: 'name', value: text})
                        }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="+ 41 555 55 55"
                        label="Phone"
                        value={this.props.phone}
                        onChangeText={
                            text => this.props.employeeUpdate({prop: 'phone', value: text})
                        }
                    />
                </CardSection>

                <CardSection
                    style={{flexDirection: 'column'}}
                >
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        // style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        paddingLeft: 20,
        fontSize: 18,
    }
};

const mapStateToProps = (state) => {
   const {name, phone, shift} = state.employeeForm;
   return {name, phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);