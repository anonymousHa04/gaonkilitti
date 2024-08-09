import React, { useState } from 'react';
import { useSelector } from "react-redux";


const Table = () => {
    const dropdown =  useSelector((state) => state.dropdown);
    const [rows, setRows] = useState([]);

    const addRow = () => {
        setRows([...rows, {}]);
    };

    const deleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    return (
        <div>
            <h4>Table for {dropdown.dropdownValue}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>Row {index + 1}</td>
                            <td>Row {index + 1}</td>
                            <td>
                                <button onClick={() => deleteRow(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addRow}>Add Row</button>
        </div>
    );
};

export default Table;