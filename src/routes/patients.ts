import express from 'express';
const router = express.Router();

const patients = [
  {
    "id": 1,
    "name": "wizkid",
    "gender": "male",
    "occupation": "artist",
  },
  {
    "id": 1,
    "name": "davido",
    "gender": "male",
    "occupation": "artist",
  },
  {
    "id": 1,
    "name": "Asa",
    "gender": "female",
    "occupation": "artist",
  },
  {
    "id": 1,
    "name": "Cobhams",
    "gender": "male",
    "occupation": "artist",
  },

];

router.get('/', (_req, res) => {
  console.log('get patients')
  res.send(patients)
});

export default router;