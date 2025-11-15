import express from 'express';
import dotenv from 'dotenv';
import { testConnection } from './config/database.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'API CRUD - Sistema de Compras',
    version: '1.0.0',
    endpoints: {
      usuarios: '/api/usuarios',
      produtos: '/api/produtos',
      pedidos: '/api/pedidos'
    }
  });
});

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/pedidos', pedidoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

testConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
});

export default app;
