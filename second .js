const student = {
  Name: "Durga",
  Designation: "Full Stack Web Developer",
  age: 23,
};

function smartWork() {
  console.log("welcome to node js of backend process");
}

function hardWork() {
  console.log("welcome module of local module in node js");
}
(module.exports = hardWork), student, smartWork();

// module.exports = { hardWork, student, smartWork };

// module.exports = [hardWork, student, smartWork];
