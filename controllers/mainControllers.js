export const getStatus = async (req, res) => {
  try {
    const parma = req.params.id;
    const response = `Everything is fine, don't worry baby, this is params: ${parma}`;
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json("Status not found bro");
  }
};
