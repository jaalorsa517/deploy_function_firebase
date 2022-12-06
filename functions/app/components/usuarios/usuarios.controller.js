const usuariosMock = require("../../mockups/usuarios");

module.exports = {
  get: (req, res) => {
    const { limit, page } = req.query;
    const _limit = parseInt(limit) || 10;
    const _page = parseInt(page) || 1;
    const total = usuariosMock.length;

    if (_page < 1 || _limit < 1 || _limit > total)
      return res.status(500).json({ error: true, message: "Error en los query enviados" });

    const response = {
      total,
      isMore: total > _page * _limit,
      usuarios: usuariosMock.slice((_page - 1) * _limit, _page * _limit),
    };

    return res.json(response);
  },
  getById: (req, res) => {
    const { id } = req.params;
    const usuario = usuariosMock.find((u) => u.id == id);

    if (!usuario) return res.status(500).json({ error: true, message: "Usuario no encontrado" });

    return res.json(usuario);
  },
};
