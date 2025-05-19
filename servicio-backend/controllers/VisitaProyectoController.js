/*import VisitaProyecto from '../models/VisitaProyectoModel.js';

export const getAllVisitasProyectos = async (req, res) => {
  try {
    const visitas = await VisitaProyecto.findAll();
    res.json(visitas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVisitaProyectoById = async (req, res) => {
  try {
    const { id } = req.params;
    const visita = await VisitaProyecto.findByPk(id);
    if (!visita) return res.status(404).json({ message: "No existe la visita o ejecución" });
    res.json(visita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createVisitaProyecto = async (req, res) => {
  try {
    const { solicitud_id, visita_tecnica, ejecucion_proyecto } = req.body;
    const nuevaVisita = await VisitaProyecto.create({ solicitud_id, visita_tecnica, ejecucion_proyecto });
    res.status(201).json(nuevaVisita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVisitaProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const { visita_tecnica, ejecucion_proyecto } = req.body;
    const visita = await VisitaProyecto.findByPk(id);
    if (!visita) return res.status(404).json({ message: "No existe la visita o ejecución" });

    visita.visita_tecnica = visita_tecnica;
    visita.ejecucion_proyecto = ejecucion_proyecto;

    await visita.save();
    res.json(visita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteVisitaProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const visita = await VisitaProyecto.findByPk(id);
    if (!visita) return res.status(404).json({ message: "No existe la visita o ejecución" });

    await visita.destroy();
    res.json({ message: "Eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/
/*
import VisitaProyecto from '../models/VisitaProyectoModel.js';
import SolicitudServicio from '../models/SolicitudServicioModel.js';

// Obtener todas las visitas con datos de la solicitud asociada
export const getAllVisitasProyectos = async (req, res) => {
  try {
    const visitas = await VisitaProyecto.findAll({
      include: [{
        association: 'solicitud',
        attributes: ['id', 'nombre', 'tipo_servicio', 'fecha_solicitud']
      }]
    });
    res.json(visitas);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener visitas',
      error: error.message 
    });
  }
};

// Obtener una visita específica por ID
export const getVisitaProyectoById = async (req, res) => {
  try {
    const visita = await VisitaProyecto.findByPk(req.params.id, {
      include: [{
        association: 'solicitud',
        attributes: ['id', 'nombre', 'direccion']
      }]
    });

    if (!visita) {
      return res.status(404).json({ message: 'Visita no encontrada' });
    }

    res.json(visita);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener la visita',
      error: error.message 
    });
  }
};

// Crear una nueva visita con validación de solicitud existente
export const createVisitaProyecto = async (req, res) => {
  try {
    const { solicitud_id, visita_tecnica, ejecucion_proyecto } = req.body;

    // Validar que exista la solicitud asociada
    const solicitudExistente = await SolicitudServicio.findByPk(solicitud_id);
    if (!solicitudExistente) {
      return res.status(400).json({ message: 'La solicitud asociada no existe' });
    }

    const nuevaVisita = await VisitaProyecto.create({
      solicitud_id,
      visita_tecnica: visita_tecnica || null,
      ejecucion_proyecto: ejecucion_proyecto || null
    });

    res.status(201).json({
      message: 'Visita creada exitosamente',
      data: nuevaVisita
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al crear visita',
      error: error.message 
    });
  }
};

// Actualizar una visita existente
export const updateVisitaProyecto = async (req, res) => {
  try {
    const { visita_tecnica, ejecucion_proyecto } = req.body;
    const visita = await VisitaProyecto.findByPk(req.params.id);

    if (!visita) {
      return res.status(404).json({ message: 'Visita no encontrada' });
    }

    // Actualizar solo campos permitidos
    await visita.update({
      visita_tecnica: visita_tecnica || visita.visita_tecnica,
      ejecucion_proyecto: ejecucion_proyecto || visita.ejecucion_proyecto
    });

    res.json({
      message: 'Visita actualizada exitosamente',
      data: visita
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al actualizar visita',
      error: error.message 
    });
  }
};

// Eliminar una visita
export const deleteVisitaProyecto = async (req, res) => {
  try {
    const visita = await VisitaProyecto.findByPk(req.params.id);

    if (!visita) {
      return res.status(404).json({ message: 'Visita no encontrada' });
    }

    await visita.destroy();
    res.json({ message: 'Visita eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al eliminar visita',
      error: error.message 
    });
  }
};  */