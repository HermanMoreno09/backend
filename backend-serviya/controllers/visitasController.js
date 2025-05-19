 
const db = require('../db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM visitas_proyectos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getOne = (req, res) => {
  db.query('SELECT * FROM visitas_proyectos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  const { solicitud_id, visita_tecnica, ejecucion_proyecto } = req.body;

  if (!solicitud_id || !visita_tecnica || !ejecucion_proyecto) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  db.query('SELECT * FROM servicios WHERE id = ?', [solicitud_id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    if (results.length === 0) {
      return res.status(400).json({ error: 'Servicio no encontrado' });
    }

    db.query(
      'INSERT INTO visitas_proyectos SET ?',
      { solicitud_id, visita_tecnica, ejecucion_proyecto },
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error insertando visita proyecto' });
        }
        res.json({ id: result.insertId, solicitud_id, visita_tecnica, ejecucion_proyecto });
      }
    );
  });
};

exports.update = (req, res) => {
  db.query('UPDATE visitas_proyectos SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Actualizado' });
  });
};

exports.delete = (req, res) => {
  db.query('DELETE FROM visitas_proyectos WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Eliminado' });
  });
};
