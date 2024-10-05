export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const name of reportWithIterator) {
    result += name;
    const idx = reportWithIterator.indexOf(name);
    if (idx !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return result;
}
