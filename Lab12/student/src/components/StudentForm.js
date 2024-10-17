import React, { useState } from 'react';

const StudentForm = ({ onStudentAdded }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [program, setProgram] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStudent = { id, name, program };
        console.log(newStudent)
        try {
            onStudentAdded();
            setId('');
            setName('');
            setProgram('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.heading}>Create a Student</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>id:</label>
                <input 
                    type="text" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    placeholder="Enter student id" 
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter student name" 
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>program:</label>
                <input
                    type="text"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)} 
                    placeholder="Enter student program" 
                    style={styles.input}
                />
            </div>
            <div style={styles.buttonGroup}>
                <button type="button" onClick={() => { setId(''); setName(''); setProgram(''); }} style={styles.resetButton}>Reset</button>
                <button type="submit" style={styles.submitButton}>Register</button>
            </div>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '0px 50px 50px'
    },
    heading: {
        textAlign: 'left',
        marginBottom: '20px',
        color: '#333',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        color: '#555',
    },
    input: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    submitButton: {
        backgroundColor: '#ff5722',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '14px',
        cursor: 'pointer',
        width: '160px'
    },
    resetButton: {
        backgroundColor: '#ccc',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '14px',
        cursor: 'pointer',
        marginRight: '15px',
        width: '160px'
    }
};

export default StudentForm;