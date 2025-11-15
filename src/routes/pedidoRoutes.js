import express from 'express';
import {
  listarPedidos,
  buscarPedido,
  criarPedido,
  atualizarPedido,
  deletarPedido
} from '../controllers/pedidoController.js';

const router = express.Router();

router.get('/', listarPedidos);
router.get('/:id', buscarPedido);
router.post('/', criarPedido);
router.put('/:id', atualizarPedido);
router.delete('/:id', deletarPedido);

export default router;
