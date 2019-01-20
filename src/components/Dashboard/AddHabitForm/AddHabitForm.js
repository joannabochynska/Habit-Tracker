import React, { Component } from 'react';

class AddHabitForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.dateRef = React.createRef();
        this.durationRef = React.createRef();
        this.createHabit = this.createHabit.bind(this);
    }

    createHabit(e) {
        e.preventDefault();

        const habit = {
            name: this.nameRef.current.value,
            startingDate: this.dateRef.current.value,
            duration: this.durationRef.current.value
        }

        this.props.addHabit(habit);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form onSubmit={this.createHabit}>
                <h3>Add new habit</h3>
                <input name="name" ref={this.nameRef} type="text" placeholder="Habit name"/>
                <input name="date" ref={this.dateRef} type="date" placeholder="Start date"/>
                <input name="duration" ref={this.durationRef} type="number" placeholder="Number of days"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddHabitForm;