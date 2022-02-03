import React, { useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const AddPatient = () => {
    const [patientName, setpatientName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handlePatientName = e => {
        setpatientName(e.target.value);



    }
    // /^[a-zA-Z]*$/

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // name validation
        if (!/^[a-zA-Z]*$/.test(patientName)) {
            setError('name is not a string')
            return
        }
        setError('');
        setSuccess('Successfully Added');
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
                            onBlur={handlePatientName}
                            className="form-control"
                            name='name'
                            placeholder="Patient Name"
                            required />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email"
                            name='email'
                            class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            required />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Age</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="age"
                            required />
                    </div>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
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