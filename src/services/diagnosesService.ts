import patientDiagnoses from '../../data/diagnoses.json';
import { DiagnosesEntry } from '../../types';

const diagnoses: Array<DiagnosesEntry> = patientDiagnoses;

export const getDiagnoses = (): Array<DiagnosesEntry> => {
  return diagnoses;
};