import express from 'express';
import { getPatients, addPatient } from '../services/patientService';
import { Patients } from '../../types';
const router = express.Router();


router.get('/', (_req, res) => {
  console.log('get patients');
  res.send(getPatients());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body as Patients;
  const newPatientEntry = addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  });

  res.json(newPatientEntry);
});

export default router;