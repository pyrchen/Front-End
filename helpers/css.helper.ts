export function getRandomColor(): string {
  return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}