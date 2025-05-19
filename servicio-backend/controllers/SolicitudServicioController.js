/*import VisitaProyecto from '../models/VisitaProyectoModel.js';

// Obtener todas las visitas y ejecuciones
export const getVisitasProyectos = async (req, res) => {
  try {
    const visitas = await VisitaProyecto.findAll();
    res.json(visitas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una visita/ejecución por id
export const getVisitaProyecto = async (req, res) => {
  try {
    const visita = await VisitaProyecto.findByPk(req.params.id);
    if (!visita) return res.status(404).json({ message: 'Visita o ejecución no encontrada' });
    res.json(visita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una visita/ejecución
export const createVisitaProyecto = async (req, res) => {
  try {
    const nuevaVisita = await VisitaProyecto.create(req.body);
    res.status(201).json(nuevaVisita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una visita/ejecución
export const updateVisitaProyecto = async (req, res) => {
  try {
    const visita = await VisitaProyecto.findByPk(req.params.id);
    if (!visita) return res.status(404).json({ message: 'Visita o ejecución no encontrada' });
    await visita.update(req.body);
    res.json(visita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una visita/ejecución
export const deleteVisitaProyecto = async (req, res) => {
  try {
    const visita = await VisitaProyecto.findByPk(req.params.id);
    if (!visita) return res.status(404).json({ message: 'Visita o ejecución no encontrada' });
    await visita.destroy();
    res.json({ message: 'Visita o ejecución eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};*/
/*
import SolicitudServicio from '../models/SolicitudServicioModel.js';

export const getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await SolicitudServicio.findAll();
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSolicitud = async (req, res) => {
  try {
    const solicitud = await SolicitudServicio.findByPk(req.params.id, {
      include: [{ 
        association: 'visitas', 
        attributes: ['id', 'visita_tecnica', 'ejecucion_proyecto'] 
      }]
    });
    if (!solicitud) return res.status(404).json({ message: 'Solicitud no encontrada' });
    res.json(solicitud);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSolicitud = async (req, res) => {
  try {
    const nuevaSolicitud = await SolicitudServicio.create({
      ...req.body,
      fecha_solicitud: req.body.fecha_solicitud || new Date().toISOString().split('T')[0]
    });
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSolicitud = async (req, res) => {
  try {
    const solicitud = await SolicitudServicio.findByPk(req.params.id);
    if (!solicitud) return res.status(404).json({ message: 'Solicitud no encontrada' });
    await solicitud.update(req.body);
    res.json(solicitud);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSolicitud = async (req, res) => {
  try {
    const solicitud = await SolicitudServicio.findByPk(req.params.id);
    if (!solicitud) return res.status(404).json({ message: 'Solicitud no encontrada' });
    await solicitud.destroy();
    res.json({ message: 'Solicitud eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/