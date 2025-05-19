 const db = require('../db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM servicios', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getOne = (req, res) => {
  db.query('SELECT * FROM servicios WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  db.query('INSERT INTO servicios SET ?', req.body, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
};

exports.update = (req, res) => {
  db.query('UPDATE servicios SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Actualizado' });
  });
};

exports.delete = (req, res) => {
  db.query('DELETE FROM servicios WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Eliminado' });
  });
};

