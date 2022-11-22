import { set1 } from "./Questions";
export const getNextQuestion = (set, language, queNo) => {
  let a;
  switch (set) {
    case 1:
      a = set1;
      break;
    case 2:
      a = set1;
      break;
    case 3:
      a = set1;
      break;
    default:
      a = set1;
      break;
  }
  switch (language) {
    case "c":
      a = a.c;
      break;
    case "cpp":
      a = a.cpp;
      break;
    case "java":
      a = a.java;
      break;
    case "py":
      a = a.py;
      break;
    default:
      break;
  }
  switch (queNo) {
    case 1:
    case 2:
    case 3:
    case 4:
      a = a.easy;
      break;
    case 5:
    case 6:
      a = a.medium;
      break;
    case 7:
      a = a.hard;
      break;
    default:
      break;
  }
  switch (queNo) {
    case 1:
    case 5:
    case 7:
      return a[1];
    case 2:
    case 6:
      return a[2];
    case 3:
      return a[3];
    case 4:
      return a[4];
    default:
      break;
  }
};
