export const getRandomDate = () => {
  return { day: Math.floor(Math.random() * 30) + 1, month: Math.floor(Math.random() * 12) + 1, year: Math.floor(Math.random() * 53) + 1950 };
};
