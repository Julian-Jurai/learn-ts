enum Role {
  ADMIN = 6,
  READ_ONLY,
  AUTHOR = "AUTHOR"
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, Role];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["sprot", "string"],
  role: [2, Role.ADMIN]
};

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role[1] === Role.ADMIN) {
  console.log("admin");
}
