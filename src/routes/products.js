
import express from 'express';

const router = express.Router();

// POST /api/products
router.post('/api/products', (req, res) => {
  // Obtener la carga útil JSON de la solicitud
  const payload = req.body;

  // Realizar las operaciones necesarias con la carga útil JSON

  // Responder con una respuesta JSON
  res.json({ message: 'Solicitud POST exitosa', payload });
});
// products.js
export default function products() {
    return router;
  }
