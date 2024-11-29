// Simple rounding calculator
function calculateNumber(type, a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  switch (type) {
    case 'SUM':
      return roundA + roundB;
    case 'SUBTRACT':
      return roundA - roundB;
    case 'DIVIDE':
      return roundB > 0 ? roundA / roundB : 'Error';
    default:
      return 'Missing or invalid operator';
  }
}

module.exports = calculateNumber;
