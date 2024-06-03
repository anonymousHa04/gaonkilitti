import React, { useState } from 'react';

export default function DatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>
            <h3 style={{ marginBottom: '10px' }}>Date Picker</h3>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
        </div>
    );
}

