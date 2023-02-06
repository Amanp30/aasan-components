import React from "react";
import FamilyTree from "../components/familytree";
function familytree() {
  const familyData = [
    {
      children: [
        {
          name: "Jane Doe",
          children: [
            {
              name: "John Doe",
            },
            {
              name: "Jane Smith",
            },
            {
              name: "John Smith",
              children: [
                { name: "Alice Smith" },
                { name: "Bob Smith" },
                { name: "Charlie Smith" },
                {
                  name: "David Smith",
                  children: [
                    {
                      name: "Eve Smith",
                    },
                    {
                      name: "Frank Smith",
                      children: [{ name: "Pooja" }, { name: "Jeff" }],
                    },
                    { name: "Gina Smith" },
                    { name: "Harry Smith" },
                  ],
                },
                { name: "Isaac Smith" },
                { name: "Jack Smith" },
                { name: "Kevin Smith" },
              ],
            },
            {
              name: "Larry Doe",
            },
            {
              name: "Marry Doe",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <FamilyTree data={familyData} />
    </>
  );
}

export default familytree;
