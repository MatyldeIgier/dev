import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';
import {addReminder, deleteReminder, clearReminders} from '../actions';
import { bindActionCreators}  from 'redux';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate:''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text, this.state.dueDate);
        console.log('dueDate',this.state.dueDate);
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const { reminders } = this.props;
        return(
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key="reminder.id" className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>

                                <div
                                    className="list-item delete-button"
                                    onClick={()=> this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render () {
        return (
            <div className="App">
                <div className="title">
                    reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text : event.target.value})}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={event => this.setState({dueDate: event.target.value})}
                        >
                        </input>
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={()=> this.addReminder()}
                    >
                        App Reminder
                    </button>
                </div>
                {this.renderReminders()}
                <div className="btn btn-danger"
                    onClick={()=> this.props.clearReminders()}
                >
                Clear Reminders
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch);
}

function mapStateToProps(state) {
    console.log('state',state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);