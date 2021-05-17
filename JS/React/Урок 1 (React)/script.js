console.log("Hello");

let obj = {
  number: 5,
  sayNumber: function () {
    function say() {
      console.log(this);
    }
    say();
  },
};

obj.sayNumber();
