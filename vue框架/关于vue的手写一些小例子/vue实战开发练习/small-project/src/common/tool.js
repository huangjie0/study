// * 存入localstorage
export function localStorageSet(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  }
  
  // * 从localstorage 取出
  export function localStorageGet(k) {
    const v = localStorage.getItem(k);
    try {
      return JSON.parse(v);
    } catch (error) {
      return v;
    }
  }