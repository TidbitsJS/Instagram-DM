const faker = require("faker");
let data = [];

function generateUser() {
  data.push({
    name: faker.name.findName(),
    profile_pic: faker.internet.avatar(),
  });
}

Array.from({ length: 5 }, () => generateUser());

generateUser();

export default data;
