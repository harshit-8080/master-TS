var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Summary of Car: " + this.name;
    },
};
console.log(oldCivic.summary());
