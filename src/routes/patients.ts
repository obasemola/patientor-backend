import express from 'express';
import { getPatients } from '../services/patientService';
const router = express.Router();


router.get('/', (_req, res) => {
  console.log('get patients');
  res.send(getPatients());
});

export default router;