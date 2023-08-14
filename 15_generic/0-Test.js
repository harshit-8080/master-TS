// function askForIdAndUserName(id: number, name: string): void {
//   console.log(id, name);
// }
// askForIdAndUserName(100, "Manikesh");
function askForIdAndUserName(data) {
    console.log(typeof data.id, typeof data.name);
    console.log(data.id, data.name);
}
askForIdAndUserName({ id: "2001", name: "Madan" });
askForIdAndUserName({ id: 200, name: "Kavita" });
