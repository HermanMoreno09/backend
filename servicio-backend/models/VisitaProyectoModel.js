/*import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const VisitaProyecto = db.define('visitas_proyectos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  solicitud_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  visita_tecnica: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  ejecucion_proyecto: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'visitas_proyectos'
});

export default VisitaProyecto;*/

/*import express from 'express';
import {
  getAllVisitasProyectos,
  getVisitaProyectoById,
  createVisitaProyecto,
  updateVisitaProyecto,
  deleteVisitaProyecto
} from '../controllers/VisitaProyectoController.js';

const router = express.Router();

// Rutas CRUD completas
router.get('/', getAllVisitasProyectos);       // Obtener todas las visitas
router.get('/:id', getVisitaProyectoById);    // Obtener una visita específica
router.post('/', createVisitaProyecto);       // Crear nueva visita
router.put('/:id', updateVisitaProyecto);     // Actualizar visita existente
router.patch('/:id', updateVisitaProyecto);   // Actualización parcial
router.delete('/:id', deleteVisitaProyecto);  // Eliminar visita

export default router;*/
/*
import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const VisitaProyecto = db.define('visitas_proyectos', {
  solicitud_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  visita_tecnica: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  ejecucion_proyecto: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'visitas_proyectos'
});

// Asociación con SolicitudServicio
VisitaProyecto.associate = function(models) {
  VisitaProyecto.belongsTo(models.SolicitudServicio, {
    foreignKey: 'solicitud_id',
    as: 'solicitud'
  });
};

export default VisitaProyecto; */
