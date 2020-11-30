exports.ls = {
  setItem: function (key, value) {
    localStorage[key] = value;
    return localStorage[key];
  },
  getItem: function (key) {
    return localStorage[key] || undefined;
  },
  setObject: function (key, value) {
    localStorage[key] = JSON.stringify(value);
    return localStorage[key];
  },
  getObject: function (key) {
    const v = this.getItem(key);
    try {
      return JSON.parse(v);
    } catch {
      return undefined;
    }
  },
  editObject: function (key, value) {
    const v = this.getObject(key);
    if (v) {
      const obj = Object.assign(v, value);
      localStorage[key] = JSON.stringify(obj);
      return localStorage[key];
    } else {
      return undefined;
    }
  },
  removeItem: function (key) {
    return localStorage.removeItem(key);
  },
  clear: function () {
    return localStorage.clear();
  }
};
