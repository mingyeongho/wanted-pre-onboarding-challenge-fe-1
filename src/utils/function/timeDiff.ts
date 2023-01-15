import dayjs from "dayjs";

const timeDiff = (timeToCompare: string) => {
  dayjs.locale("ko");
  const now = dayjs();
  const compare = dayjs(timeToCompare);
  const yearDiff = now.diff(compare, "y");
  const monthDiff = now.diff(compare, "M");
  const dateDiff = now.diff(compare, "day");
  const hourDiff = now.diff(compare, "hour");
  const minuteDiff = now.diff(compare, "minute");
  const secondDiff = now.diff(compare, "second");

  if (yearDiff) {
    return `${yearDiff}년 전`;
  } else if (monthDiff) {
    return `${monthDiff}달 전`;
  } else if (dateDiff) {
    return `${dateDiff}일 전`;
  } else if (hourDiff) {
    return `${hourDiff}시간 전`;
  } else if (minuteDiff) {
    return `${minuteDiff}분 전`;
  } else if (secondDiff) {
    return `${secondDiff}초 전`;
  } else {
    return "";
  }
};

export default timeDiff;
