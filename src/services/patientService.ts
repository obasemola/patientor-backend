import { v4 as uuid } from 'uuid';
import patientData from '../../data/patients';
import { Patients, NewPatientEntry } from '../../types';

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

export const addPatient = (entry: NewPatientEntry): Patients => {
  const newPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    id: uuid(),
    ...entry
  };

  patients.concat(newPatient);
  return newPatient;
};