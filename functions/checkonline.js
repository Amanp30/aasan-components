export const onlinecheck = () => {
  if (typeof window !== "undefined") {
    var x = navigator.onLine;
    // console.log(x);
    return x;
  }
};
