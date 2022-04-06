const STATES = [
  "Perlis",
  "Kedah",
  "Kelantan",
  "Malacca",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Penang",
  "Selangor",
  "Terengganu",
  "Johor",
  "Sabah",
  "Sarawak",
  "W.P. Kuala Lumpur",
  "W.P. Putrajaya",
];

// LOCATION CHART
exports.getLocation = (dataset) => {
  const locationMap = new Map();
  let count = 0;

  STATES.forEach((state) => {
    locationMap.set(state, 0);
  });

  dataset.forEach((data) => {
    const state = data["Current State of Residence"].trim();
    if (state) {
      locationMap.set(state, locationMap.get(state) + 1);
      count++;
    }
  });

  const locationArr = [];

  locationMap.forEach((value, key) => {
    locationArr.push({
      id: key,
      value: ((value / count) * 100).toFixed(1),
    });
  });

  return JSON.stringify({ locationData: locationArr, count: count });
};

// GENDER CHART
exports.getGender = (dataset) => {
  let count = 0;

  const genderMap = new Map();
  const gender = ["Female", "Male", "Other"];

  // combine female and other into a single category
  dataset?.forEach((data) => {
    genderMap.set(
      data.Gender === gender[0] || data.Gender === gender[2]
        ? "Female/Other"
        : data.Gender,
      genderMap.get(
        data.Gender === gender[0] || data.Gender === gender[2]
          ? "Female/Other"
          : data.Gender
      ) + 1 || 1
    );

    count++;
  });

  let genderArr = [];

  genderMap.forEach((value, key) => {
    genderArr.push({
      id: key,
      label: key,
      value,
      percentage: ((value / count) * 100).toFixed(1),
    });
  });

  return JSON.stringify({ genderData: genderArr, count: count });
};

// YOE CHART
exports.getYOE = (dataset) => {
  const yoeMap = new Map();
  let count = 0;
  const yoe = [
    "<1 year",
    "1-2 years",
    "2-5 years",
    "5-10 years",
    "10-20 years",
    ">20 years",
  ];

  yoe.forEach((yoe) => {
    yoeMap.set(yoe, 0);
  });

  dataset?.forEach((data) => {
    const yoe = parseInt(data["Years of Experience"]);

    if (yoe > 20) {
      yoeMap.set(">20 years", yoeMap.get(">20 years") + 1);
    } else if (yoe > 10) {
      yoeMap.set("10-20 years", yoeMap.get("10-20 years") + 1);
    } else if (yoe > 5) {
      yoeMap.set("5-10 years", yoeMap.get("5-10 years") + 1);
    } else if (yoe > 2) {
      yoeMap.set("2-5 years", yoeMap.get("2-5 years") + 1);
    } else if (yoe > 1) {
      yoeMap.set("1-2 years", yoeMap.get("1-2 years") + 1);
    } else {
      yoeMap.set("<1 year", yoeMap.get("<1 year") + 1);
    }

    count++;
  });

  const yoeArr = yoe.map((yoe) => {
    return {
      yoe: yoe,
      count: yoeMap.get(yoe),
      percentage: ((yoeMap.get(yoe) / count) * 100).toFixed(1),
    };
  });

  return JSON.stringify({ yoeData: yoeArr, count });
};

// EDUCATION CHART
exports.getEducation = (dataset) => {
  let count = 0;
  let bootcampCount = 0;

  const educationMap = new Map();
  const bootcampMap = new Map();

  const higherEducation = [
    "Diploma",
    "Undergraduate Degree",
    "Masters Degree",
    "PhD",
  ];

  const education = ["No", "Yes, related field", "Yes, unrelated field"];

  // initial values for educationMap
  education.forEach((education) => {
    educationMap.set(education, 0);
  });

  // initial values for bootcampMap
  bootcampMap.set("No", 0);
  bootcampMap.set("Yes", 0);

  dataset?.forEach((data) => {
    const education = data["Highest Level of Education"].trim();
    const related = data["Is your degree tech related?"].trim();

    // if is higher education
    if (higherEducation.includes(education)) {
      // check if is related field
      if (related === "Yes") {
        educationMap.set(
          "Yes, related field",
          educationMap.get("Yes, related field") + 1
        );
      } else {
        educationMap.set(
          "Yes, unrelated field",
          educationMap.get("Yes, unrelated field") + 1
        );
      }
      count++;
    } else {
      if (education !== "") {
        educationMap.set("No", educationMap.get("No") + 1);

        // check to see if developers without higher education attended a bootcamp
        let isBootcamp =
          data["Did you go through a bootcamp to learn technical skills?"];

        if (isBootcamp === "Yes") {
          bootcampMap.set("Yes", bootcampMap.get("Yes") + 1);
        } else if (isBootcamp === "No") {
          bootcampMap.set("No", bootcampMap.get("No") + 1);
        }

        count++;
        bootcampCount++;
      }
    }
  });

  const educationArr = education.map((education) => {
    return {
      id: education,
      label: education,
      value: educationMap.get(education),
      percentage: ((educationMap.get(education) / count) * 100).toFixed(1),
    };
  });

  let bootcampArr = [];
  bootcampArr.push({
    id: "Yes",
    label: "Yes",
    value: bootcampMap.get("Yes"),
    percentage: ((bootcampMap.get("Yes") / bootcampCount) * 100).toFixed(1),
  });
  bootcampArr.push({
    id: "No",
    label: "No",
    value: bootcampMap.get("No"),
    percentage: ((bootcampMap.get("No") / bootcampCount) * 100).toFixed(1),
  });

  return JSON.stringify({
    higherEducation: educationArr,
    higherEducationCount: count,
    bootcamp: bootcampArr,
    bootcampCount: bootcampCount,
  });
};

const SALARY = [
  "<MYR 1k",
  "MYR 1k-3k",
  "MYR 3k-5k",
  "MYR 5k-10k",
  "MYR 10k-20k",
  ">MYR 20k",
];

// SALARY CHART
exports.getSalary = (dataset) => {
  const salaryMap = new Map();
  let count = 0;

  SALARY.forEach((salary) => {
    salaryMap.set(salary, []);
  });

  dataset?.forEach((data) => {
    const salary = data["Monthly Base Salary (MYR)"];
    const yoe = data["Years of Experience"];
    const gender = data["Gender"];
    const education = data["Highest Level of Education"];
    const related = data["Is your degree tech related?"];

    const obj = {
      "Monthly Base Salary (MYR)": salary,
      "Years of Experience": yoe,
      Gender: gender,
      "Highest Level of Education": education,
      "Is your degree tech related?": related,
    };

    if (salary > 20000) {
      salaryMap.set(">MYR 20k", salaryMap.get(">MYR 20k").concat(obj));
    } else if (salary > 10000) {
      salaryMap.set("MYR 10k-20k", salaryMap.get("MYR 10k-20k").concat(obj));
    } else if (salary > 5000) {
      salaryMap.set("MYR 5k-10k", salaryMap.get("MYR 5k-10k").concat(obj));
    } else if (salary > 3000) {
      salaryMap.set("MYR 3k-5k", salaryMap.get("MYR 3k-5k").concat(obj));
    } else if (salary > 1000) {
      salaryMap.set("MYR 1k-3k", salaryMap.get("MYR 1k-3k").concat(obj));
    } else {
      salaryMap.set("<MYR 1k", salaryMap.get("<MYR 1k").concat(obj));
    }

    count++;
  });

  const salaryArr = SALARY.map((salary) => {
    const education = JSON.parse(
      this.getEducation(salaryMap.get(salary))
    ).higherEducation;
    const yoe = JSON.parse(this.getYOE(salaryMap.get(salary))).yoeData;
    const gender = JSON.parse(this.getGender(salaryMap.get(salary))).genderData;

    const educationObj = {};
    education.forEach((edu) => {
      educationObj[edu.id] = parseFloat(edu.percentage);
    });

    const yoeObj = {};
    yoe.forEach((yoe) => {
      yoeObj[yoe.yoe] = parseFloat(yoe.percentage);
    });

    const genderObj = {};
    gender.forEach((g) => {
      genderObj[g.id] = parseFloat(g.percentage);
    });

    return {
      salary,
      count: salaryMap.get(salary).length,
      percentage: ((salaryMap.get(salary).length / count) * 100).toFixed(1),
      ...educationObj,
      ...yoeObj,
      ...genderObj,
    };
  });

  return JSON.stringify({ salaryData: salaryArr, count });
};

// SATISFACTION CHART
exports.getSatisfaction = (dataset) => {
  let count = 0;
  const satisfactionMap = new Map();

  [...Array(10).keys()].forEach((i) => {
    satisfactionMap.set(i + 1, []);
  });

  dataset?.forEach((data) => {
    const x = parseInt(data["Satisfaction Level of Current Job"]);
    const y = parseFloat(data["Monthly Base Salary (MYR)"]);

    satisfactionMap.set(x, satisfactionMap.get(x).concat(y));
    count++;
  });

  let rawData = [];

  satisfactionMap.forEach((value, key) => {
    value.forEach((v) => {
      if (v < 60000)
        rawData.push({
          x: key,
          y: v,
        });
    });
  });

  /**
   * NOTE:
   * Raw data is not used because there are too many data points.
   * Instead, the aggregated median and average are calculated from Google Sheets.
   *
   * TODO:
   * Clean up Google Sheet data and include link.
   */
  const aggregatedMedianData = [
    { x: 1, y: 2700 },
    { x: 2, y: 5000 },
    { x: 3, y: 4250 },
    { x: 4, y: 3758 },
    { x: 5, y: 4220 },
    { x: 6, y: 4775 },
    { x: 7, y: 5500 },
    { x: 8, y: 5782.92 },
    { x: 9, y: 6150 },
    { x: 10, y: 6463 },
  ];

  const aggregatedAverageData = [
    { x: 1, y: 3757.14 },
    { x: 2, y: 4974.29 },
    { x: 3, y: 4985 },
    { x: 4, y: 4728 },
    { x: 5, y: 5058.78 },
    { x: 6, y: 5667.32 },
    { x: 7, y: 6639.13 },
    { x: 8, y: 6641.13 },
    { x: 9, y: 7299.34 },
    { x: 10, y: 7703.77 },
  ];

  return JSON.stringify({
    median: [{ id: "Satisfaction", data: aggregatedMedianData }],
    average: [{ id: "Satisfaction", data: aggregatedAverageData }],
    count: count,
  });
};

// exports.getTimeline = (dataset) => {
//   const timelineMap = new Map();

//   dataset?.forEach((data) => {
//     const date = data["Timestamp"].substring(0, 10);

//     if (timelineMap.has(date)) {
//       timelineMap.set(date, timelineMap.get(date) + 1);
//     } else {
//       timelineMap.set(date, 1);
//     }
//   });

//   const timelineArr = [];

//   timelineMap.forEach((val, key) => {
//     const dateArr = key.split("/");

//     timelineArr.push({
//       day: `${dateArr[2]}-${dateArr[0]}-${dateArr[1]}`,
//       value: val,
//     });
//   });

//   return timelineArr;
// };
