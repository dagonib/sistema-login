import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app = express();

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  // Inicio
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

// Puerto de salida
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
