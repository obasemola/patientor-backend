import patientData from '../../data/patients.json';
import { Patients } from '../../types';

const patients: Array<Patients> = patientData;

export const getPatients = (): Array<Patients> => {
  return patients;
};