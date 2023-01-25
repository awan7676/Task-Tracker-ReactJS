import React, { useState } from 'react'

function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add a task!');
            return;
        }

        onAdd({ text, date, reminder });

        setText('');
        setDate('');
        setReminder(false);
    }



    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" value={text} placeholder='Add task...' onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type="text" value={date} placeholder='Add date & time...' onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control-check'>
                <label>Reminder</label>
                <input type="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div>
                <input className='btn-submit' type="submit" value="Save Task" />
            </div>
        </form>
    )
}

export default AddTask