export const DiffInSeconds = (start: Date, end: Date): number => {
  return (end.getTime() - start.getTime()) / 1000;
};
