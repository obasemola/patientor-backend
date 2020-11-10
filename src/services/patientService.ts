import patientData from '../../data/patients.json';
import { Patients } from '../../types';

const patients: Array<Patients> = patientData;

export const getPatients = (): Omit<Patients, "ssn">[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};