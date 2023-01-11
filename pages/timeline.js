import React from "react";
import Timeline from "../components/timeline/timelineone";

function timeline() {
  var timelinedata = [
    { title: "Education", image: "/static/book.svg" },
    {
      timelines: [
        {
          heading: "University School Of The Arts",
          year: "2007 — 2008",
          description:
            "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
        },
        {
          heading: "New York Academy Of Art",
          year: "2006 — 2007",
          description:
            "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
        },
        {
          heading: "Sanskriti School",
          year: "2005 — 2006",
          description: "Local school in malpura",
        },
      ],
    },
  ];
  return (
    <div className="magicalcontainer">
      <Timeline data={timelinedata} />
    </div>
  );
}

export default timeline;
