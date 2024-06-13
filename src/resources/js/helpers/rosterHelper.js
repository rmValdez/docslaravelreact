export const canRequestSchedule = (roster) => {
  return !(roster?.no_schedule || roster?.locked);
};