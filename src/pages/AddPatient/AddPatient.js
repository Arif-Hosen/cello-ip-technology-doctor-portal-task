import React, { useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const AddPatient = () => {
    const [patientName, setpatientName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const patientInitialInfo = { name: '', email: '', age: '', gender: '' };
    const [patientInfo, setPatientInfo] = useState(patientInitialInfo);

    // get patient info from input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...patientInfo };
        newInfo[field] = value;
        setPatientInfo(newInfo);
        // console.log(newInfo);

    }


    const handleOnSubmit = (e) => {

        e.preventDefault();
        // name validation
        if (!/^[a-zA-Z]*$/.test(patientInfo.name)) {
            setError('name is not a string')
            return
        }
        setError('');

        // post method to send patient data to db
        fetch('https://shielded-refuge-31732.herokuapp.com/patient', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(patientInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Successfully Added Patient!!')
                }
            })


    }


    return (
        <div>
            <Navigation></Navigation>
            <h3 className='mt-4 text-primary'>Add Patient</h3>
            <div style={{ backgroundColor: 'lightgray', width: '60%' }} className=' mx-auto p-5  rounded'>
                <form action="" onSubmit={handleOnSubmit}>
                    <div class="mb-3 text-start">
                        <label for="name" class="form-label ">Patient</label>
                        <input type="name"
                            onBlur={handleOnBlur}
                            className="form-control"
                            name='name'
                            placeholder="Patient Name"
                            required />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email"
                            name='email'
                            onBlur={handleOnBlur}
                            class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            required />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Age</label>
                        <input type="number"
                            name='age'
                            onBlur={handleOnBlur}
                            class="form-control" id="exampleFormControlInput1" placeholder="age"
                            required />
                    </div>
                    <select class="form-select" aria-label="Default select example"
                        required
                        name='gender'
                        onBlur={handleOnBlur}
                    >
                        <option selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select>

                    <p className='text-danger fs-5'>{error}</p>
                    <p className='text-success'>{success}</p>

                    <button className='btn btn-success' type="submit">Submit</button>
                    <button className='btn btn-warning ms-3' type="reset">Reset</button>
                </form>
            </div>
        </div>
    );
};

export default AddPatient;