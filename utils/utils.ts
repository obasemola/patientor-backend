/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientEntry, Gender } from '../types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};


const parseName = (name: any): string => {
  if(!name || !isString(name)){
    throw new Error(`Incorect or missing patient ${name}`);
  }

  return name;
};


const parseDateOfBirth = (dateOfBirth: any): string => {
  if(!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)){
    throw new Error(`Incorrect or missing date ${dateOfBirth}`);
  }

  return dateOfBirth;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if(!gender || !isGender(gender)){
    throw new Error(`Missing or incorrect gender ${gender}`);
  }

  return gender;
};


// const parseGender = (gender: any): string => {
//   if(!gender || !isString(gender)){
//     throw new Error(`Missing or incorrect gender ${gender}`);
//   }

//   return gender;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseOccupation = (occupation: any): string => {
  if(!occupation || !isString(occupation)){
    throw new Error(`Incorrect or missing occupation ${occupation}`);
  }

  return occupation;
};

const parseSSN = (ssn: any): string => {
  if(!ssn || !isString(ssn)){
    throw new Error(`Incorrect or missing ssn ${ssn}`);
  }

  return ssn;
};




const toNewPatientEntry = (object: any): NewPatientEntry => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSSN(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation)
  };

};

export default toNewPatientEntry;