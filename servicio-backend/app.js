import express from 'express';
import cors from 'cors';
//import solicitudServicioRoutes from './routes/solicitudServicioRoutes.js';
import authRoutes from "./routes/AuthRoutes.js"
//import visitasProyectosRoutes from './routes/visitasProyectosRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());

//app.use('/solicitudes', solicitudServicioRoutes);
app.use("/auth", authRoutes);
//app.use('/visitas_proyectos', visitasProyectosRoutes);
app.listen(8000, () => {
  console.log('Servidor escuchando en http://localhost:8000');
});
