const calculateStylePoints = (styleNotes) => {
    return styleNotes.sort().slice(1, -1).reduce((total, note) => total + note)
  };
  
module.exports = calculateStylePoints;