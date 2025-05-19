/*import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const SolicitudServicio = db.define('servicios', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  tipo_servicio: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fecha_solicitud: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  visita_tecnica: {               // <--- Agregado
    type: DataTypes.STRING(255),
    allowNull: true
  },
  ejecucion_proyecto: {           // <--- Agregado
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'servicios'
});

export default SolicitudServicio;*/
/*
import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const SolicitudServicio = db.define('servicios', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  tipo_servicio: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fecha_solicitud: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  timestamps: true, // Habilita createdAt y updatedAt
  tableName: 'servicios'
});

// Asociación con VisitaProyecto
SolicitudServicio.associate = function(models) {
  SolicitudServicio.hasMany(models.VisitaProyecto, {
    foreignKey: 'solicitud_id',
    as: 'visitas'
  });
};

export default SolicitudServicio; */
