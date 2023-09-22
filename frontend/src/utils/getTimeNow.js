import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInYears,
} from "date-fns";

export const getTimeNow = (createdAt) => {
  const gData = new Date(createdAt);

  const now = new Date();
  const minutesAgo = differenceInMinutes(now, gData);

  if (minutesAgo < 1) {
    
    return "agora mesmo";

  } else if (minutesAgo < 60) {
    return `${minutesAgo} ${minutesAgo === 1 ? "minuto" : "minutos"} atrás`;
  } else {
    const hoursAgo = differenceInHours(now, gData);
    if (hoursAgo < 24) {
      return `${hoursAgo} ${hoursAgo === 1 ? "hora" : "horas"} atrás`;
    } else {
      const daysAgo = differenceInDays(now, gData);
      if (daysAgo < 365) {
        return `${daysAgo} ${daysAgo === 1 ? "dia" : "dias"} atrás`;
      } else {
        const yearsAgo = differenceInYears(now, gData);
        return `${yearsAgo} ${yearsAgo === 1 ? "ano" : "anos"} atrás`;
      }
    }
  }
};
