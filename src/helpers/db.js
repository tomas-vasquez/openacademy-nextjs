
class DB {

  set = (key, data) => {
      let data2 = JSON.parse(window.localStorage.getItem("db"));
      data2 = (data2 !== null && data2 !== undefined) ? data2 : {};

      let data3 = { ...data2, [key]: data };
      window.localStorage.setItem("db", JSON.stringify(data3));
      return true;
  }

  get = (key) => {
      try {
          let data = JSON.parse(window.localStorage.getItem("db"));

          data = (data !== null && data !== undefined) ? data[key] : undefined;
          return data;
      } catch (error) {
          return undefined;
      }
  };

  clear = (key) => {
      window.localStorage.setItem("db", JSON.stringify({}));
      return true;
  };
};

export default DB;