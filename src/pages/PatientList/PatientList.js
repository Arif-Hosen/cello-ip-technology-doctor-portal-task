import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState('');
    const [getPatient, setGetPatient] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('https://shielded-refuge-31732.herokuapp.com/patientlist')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])


    const handleSearchBlur = e => {
        const searchPatient = e.target.value;
        setSearch(searchPatient);
    }

    const handleSearchClick = () => {
        const searchPatient = patients.find(patient => patient.name.toLowerCase() == search)
        setGetPatient(searchPatient);
        setSuccess(true);
    }

    const handleDelete = id => {
        fetch(`https://shielded-refuge-31732.herokuapp.com/patient/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount == 1) {
                    const remainingPatient = patients.filter(patient => patient._id != id)
                    setPatients(remainingPatient)
                }
            })

    }

    return (
        <div>
            <Navigation></Navigation>
            <h2 className='text-primary mt-5'>Patient List</h2>

            <div class="input-group mb-3 w-50 mx-auto">
                <input type="text" class="form-control"
                    onBlur={handleSearchBlur}
                    placeholder="search patient by name" aria-label="Search Patient" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary"
                    onClick={handleSearchClick}
                    type="button" id="button-addon2">Search</button>
                <br />
                {
                    (!getPatient?.name && success) && <p className='text-danger ms-5'>Not found</p>
                }
            </div>

            {

                getPatient?.name ? <table class="table caption-top table-responsive">
                    <caption>Patient List</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Details</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{getPatient?.name}</td>
                            <td>{getPatient?.gender}</td>
                            <td>{getPatient?.age}</td>
                            <td>{getPatient?.email}</td>
                            <td> <Link to={`/details/${getPatient?._id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link></td>
                            <td> <button className="btn btn-danger">Delete</button></td>
                        </tr>


                    </tbody>
                </table>
                    :
                    <table class="table caption-top table-responsive">
                        <caption>Patient List</caption>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Email</th>
                                <th scope="col">Details</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map(patient => <tr>
                                    <td>{patient?.name}</td>
                                    <td>{patient?.gender}</td>
                                    <td>{patient?.age}</td>
                                    <td>{patient?.email}</td>
                                    <td> <Link to={`/details/${patient?._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link></td>
                                    <td> <button className="btn btn-danger"
                                        onClick={() => handleDelete(patient._id)}
                                    >Delete</button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default PatientList;