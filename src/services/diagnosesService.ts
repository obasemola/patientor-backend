import diagnosesData from '../../data/diagnoses.json';
import { DiagnosesEntry } from '../../types';

const diagnoses: Array<DiagnosesEntry> = diagnosesData;

export const getDiagnoses = (): Array<DiagnosesEntry> => {
  return diagnoses;
};