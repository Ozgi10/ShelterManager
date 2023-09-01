const jsonData = require("../data.json");

// get all Pets from jsonData = data.json
exports.getPets = (req, res) => {
  try {
    res.json(jsonData);
  } catch (error) {
    res.status(500).json({ error: "Fetching Pets Data Server Error" });
  }
};

//get Pets by ID and retrieve all
exports.getPetsById = (req, res) => {
  const { id } = req.params;

  try {
    const pets = jsonData.find((p) => p.id == id);
    if (pets) {
      res.json(pets);
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Fetching Pets Data Server Error" });
  }
};
