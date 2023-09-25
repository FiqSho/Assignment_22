

// Create
exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Created' });
  };
  
  // Read
  exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Read' });
  };
  
  // Delete
  exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Deleted' });
  };
  
  // Update
  exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Updated' });
  };
  