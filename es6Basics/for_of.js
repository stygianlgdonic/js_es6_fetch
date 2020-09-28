const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (day in days) {
  console.log(`${day[0].toUpperCase()}${day.substring(1)}`);
}
