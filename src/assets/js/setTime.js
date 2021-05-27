export function fn() {
  //获取当前时间毫秒数
  let nowTime = new Date();
  let now = nowTime.getTime();
  // 获取指定时间毫秒数
  let nextTime = new Date("2021-05-26:19:00:00");
  let next = nextTime.getTime();
  let time = next - now;
  let hour, min, sec;
  if (time >= 0) {
    hour = Math.floor((time / 1000 / 60 / 60) % 24);
    min = Math.floor((time / 1000 / 60) % 60);
    sec = Math.floor((time / 1000) % 60);
  } else {
    hour = 0;
    min = 0;
    sec = 0;
  }
  let h = hour > 9 ? hour : "0" + hour;
  let m = min > 9 ? min : "0" + min;
  let s = sec > 9 ? sec : "0" + sec;
  //   console.log(s);

  let arr = [h, m, s];
  return arr;
}
