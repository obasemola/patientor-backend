import express from 'express';
import { getPatients, addPatient } from '../services/patientService';
// import { Patients } from '../../types';
import toNewPatientEntry from '../../utils/utils';
const router = express.Router();


router.get('/', (_req, res) => {
  console.log('get patients');
  res.send(getPatients());
});

router.post('/', (req, res) => {
  // const { name, dateOfBirth, ssn, gender, occupation } = req.body as Patients;

  try{
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedPatient = addPatient(newPatientEntry);
    console.log(addedPatient);
    res.json(addedPatient);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(error.message);
  }
  
});

export default router;