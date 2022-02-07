import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const PatientDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const [patients, setPatients] = useState([]);
    const [targetPatient, setTargetPatient] = useState({});
    // get data from db
    useEffect(() => {
        fetch('https://shielded-refuge-31732.herokuapp.com/patientlist')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    // find specific patients, comapare patient _id and useParams's id
    useEffect(() => {
        const details = patients.find(patient => patient?._id == id)
        setTargetPatient(details);
    }, [patients])



    return (
        <div>
            <Navigation></Navigation>
            <h2 className='text-primary mt-4 mb-3'>Patient Details</h2>



            <div className="card mx-auto " style={{ width: '500px', backgroundColor: 'springgreen' }}>
                <div className="card-body ">
                    <h5 className="card-text">Patient Name: {targetPatient?.name}</h5>
                    <p className="card-text">Patient Age: {targetPatient?.age}</p>
                    <p className="card-text">Patient Gender: {targetPatient?.gender}</p>
                    <p className="card-text">Patient Email: {targetPatient?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;