import express from 'express';
import {
  listarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from '../controllers/produtoController.js';

const router = express.Router();

router.get('/', listarProdutos);
router.get('/:id', buscarProduto);
router.post('/', criarProduto);
router.put('/:id', atualizarProduto);
router.delete('/:id', deletarProduto);

export default router;
