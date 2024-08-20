// Complete Z-table data
const zTable = [
  // Rows from 0.0 to 3.9
  [0.0, 0.004, 0.008, 0.012, 0.016, 0.0199, 0.0239, 0.0279, 0.0319, 0.0359], // Row 0.0
  [
    0.0398, 0.0438, 0.0478, 0.0517, 0.0557, 0.0596, 0.0636, 0.0675, 0.0714,
    0.0753,
  ], // Row 0.1
  [
    0.0793, 0.0832, 0.0871, 0.091, 0.0948, 0.0987, 0.1026, 0.1064, 0.1103,
    0.1141,
  ], // Row 0.2
  [
    0.1179, 0.1217, 0.1255, 0.1293, 0.1331, 0.1368, 0.1406, 0.1443, 0.148,
    0.1517,
  ], // Row 0.3
  [
    0.1554, 0.1591, 0.1628, 0.1664, 0.17, 0.1736, 0.1772, 0.1808, 0.1844,
    0.1879,
  ], // Row 0.4
  [
    0.1915, 0.195, 0.1985, 0.2019, 0.2054, 0.2088, 0.2123, 0.2157, 0.219,
    0.2224,
  ], // Row 0.5
  [
    0.2257, 0.2291, 0.2324, 0.2357, 0.2389, 0.2422, 0.2454, 0.2486, 0.2517,
    0.2549,
  ], // Row 0.6
  [
    0.258, 0.2611, 0.2642, 0.2673, 0.2703, 0.2734, 0.2764, 0.2794, 0.2823,
    0.2852,
  ], // Row 0.7
  [
    0.2881, 0.291, 0.2939, 0.2967, 0.2995, 0.3023, 0.3051, 0.3078, 0.3106,
    0.3133,
  ], // Row 0.8
  [
    0.3159, 0.3186, 0.3212, 0.3238, 0.3264, 0.3289, 0.3315, 0.334, 0.3365,
    0.3389,
  ], // Row 0.9
  [
    0.3413, 0.3438, 0.3461, 0.3485, 0.3508, 0.3531, 0.3554, 0.3577, 0.3599,
    0.3621,
  ], // Row 1.0
  [0.3643, 0.3665, 0.3686, 0.3708, 0.3729, 0.3749, 0.377, 0.379, 0.381, 0.383], // Row 1.1
  [
    0.3849, 0.3869, 0.3888, 0.3907, 0.3925, 0.3944, 0.3962, 0.398, 0.3997,
    0.4015,
  ], // Row 1.2
  [
    0.4032, 0.4049, 0.4066, 0.4082, 0.4099, 0.4115, 0.4131, 0.4147, 0.4162,
    0.4177,
  ], // Row 1.3
  [
    0.4192, 0.4207, 0.4222, 0.4236, 0.4251, 0.4265, 0.4279, 0.4292, 0.4306,
    0.4319,
  ], // Row 1.4
  [
    0.4332, 0.4345, 0.4357, 0.437, 0.4382, 0.4394, 0.4406, 0.4418, 0.4429,
    0.4441,
  ], // Row 1.5
  [
    0.4452, 0.4463, 0.4474, 0.4484, 0.4495, 0.4505, 0.4515, 0.4525, 0.4535,
    0.4545,
  ], // Row 1.6
  [
    0.4554, 0.4564, 0.4573, 0.4582, 0.4591, 0.4599, 0.4608, 0.4616, 0.4625,
    0.4633,
  ], // Row 1.7
  [
    0.4641, 0.4649, 0.4656, 0.4664, 0.4671, 0.4678, 0.4686, 0.4693, 0.4699,
    0.4706,
  ], // Row 1.8
  [
    0.4713, 0.4719, 0.4726, 0.4732, 0.4738, 0.4744, 0.475, 0.4756, 0.4761,
    0.4767,
  ], // Row 1.9
  [
    0.4772, 0.4778, 0.4783, 0.4788, 0.4793, 0.4798, 0.4803, 0.4808, 0.4812,
    0.4817,
  ], // Row 2.0
  [
    0.4821, 0.4826, 0.483, 0.4834, 0.4838, 0.4842, 0.4846, 0.485, 0.4854,
    0.4857,
  ], // Row 2.1
  [
    0.4861, 0.4864, 0.4868, 0.4871, 0.4875, 0.4878, 0.4881, 0.4884, 0.4887,
    0.489,
  ], // Row 2.2
  [
    0.4893, 0.4896, 0.4898, 0.4901, 0.4904, 0.4906, 0.4909, 0.4911, 0.4913,
    0.4916,
  ], // Row 2.3
  [
    0.4918, 0.492, 0.4922, 0.4925, 0.4927, 0.4929, 0.4931, 0.4932, 0.4934,
    0.4936,
  ], // Row 2.4
  [
    0.4938, 0.494, 0.4941, 0.4943, 0.4944, 0.4946, 0.4948, 0.4949, 0.4951,
    0.4952,
  ], // Row 2.5
  [
    0.4953, 0.4955, 0.4956, 0.4957, 0.4959, 0.496, 0.4961, 0.4962, 0.4963,
    0.4964,
  ], // Row 2.6
  [
    0.4965, 0.4966, 0.4967, 0.4968, 0.4969, 0.497, 0.4971, 0.4972, 0.4973,
    0.4974,
  ], // Row 2.7
  [
    0.4974, 0.4975, 0.4976, 0.4977, 0.4977, 0.4978, 0.4979, 0.4979, 0.498,
    0.4981,
  ], // Row 2.8
  [
    0.4981, 0.4982, 0.4982, 0.4983, 0.4984, 0.4984, 0.4985, 0.4985, 0.4986,
    0.4986,
  ], // Row 2.9
  [
    0.4987, 0.4987, 0.4987, 0.4988, 0.4988, 0.4989, 0.4989, 0.4989, 0.499,
    0.499,
  ], // Row 3.0
  [
    0.499, 0.4991, 0.4991, 0.4991, 0.4992, 0.4992, 0.4992, 0.4992, 0.4993,
    0.4993,
  ], // Row 3.1
  [
    0.4993, 0.4993, 0.4994, 0.4994, 0.4994, 0.4994, 0.4994, 0.4995, 0.4995,
    0.4995,
  ], // Row 3.2
  [
    0.4995, 0.4995, 0.4995, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996,
    0.4997,
  ], // Row 3.3
  [
    0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997,
    0.4998,
  ], // Row 3.4
  [
    0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998,
    0.4998,
  ], // Row 3.5
  [
    0.4998, 0.4998, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999,
    0.4999,
  ], // Row 3.6
  [
    0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999,
    0.4999,
  ], // Row 3.7
  [
    0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999,
    0.4999,
  ], // Row 3.8
  [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], // Row 3.9
];

const tableContainer = document.querySelector(".table-con");
const tBody = document.querySelector("tbody");
const findValueButton = document.getElementById("findValue");
const clearValueButton = document.getElementById("clearValue");
const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");
const rowValue = document.getElementById("rowInput");
const colValue = document.getElementById("colInput");
const inputValue = document.getElementById("input");
const button = document.getElementById("button");

function displayZTable(rowValue, colValue) {
  let tableHTML = "";
  tableHTML += `<tr><th class="sticky-col"></th>`;
  for (let i = 0; i <= 9; i++) {
    tableHTML += `<th>0.0${i}</th>`;
  }
  tableHTML += "</tr>";

  for (let rowIndex = 0; rowIndex < zTable.length; rowIndex++) {
    tableHTML += `<tr><th class="sticky-row">${(rowIndex / 10).toFixed(
      1
    )}</th>`;

    for (let colIndex = 0; colIndex < zTable[rowIndex].length; colIndex++) {
      let cellValue = zTable[rowIndex][colIndex].toFixed(4);

      let cellClass = "";
      if (rowIndex === rowValue && colIndex === colValue) {
        cellClass = "highlight";
      } else if (rowIndex === rowValue && colIndex < colValue) {
        cellClass = "match-up";
      } else if (colIndex === colValue && rowIndex < rowValue) {
        cellClass = "match-dn";
      }

      tableHTML += `<td class="${cellClass}">${cellValue}</td>`;
    }
    tableHTML += "</tr>";
  }
  tBody.innerHTML = tableHTML;

  // Automatically scroll to the highlighted cell
  const highlightedCell = tBody.querySelector(".highlight");
  if (highlightedCell) {
    setTimeout(() => {
      highlightedCell.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  }
}

inputValue.addEventListener("input", function () {
  this.value = this.value.replace(/[a-zA-Z]/g, "");
});

function loopupZvalueOneInput() {
  const input = inputValue.value.trim();
  const parts = input.split(/[\s,]+/);

  if (parts.length === 2) {
    let firstValue = parseFloat(parts[0]);
    let secondValue = parseFloat(parts[1]);

    let row, col;

    if (firstValue <= 3.9 && secondValue <= 0.09) {
      row = firstValue;
      col = secondValue;
    } else if (secondValue <= 3.9 && firstValue <= 0.09) {
      row = secondValue;
      col = firstValue;
    } else {
      result2.innerHTML = `<p>Z-Value: <span >Invalid input!</span></p>`;
      return;
    }

    const rowIndex = Math.round(row * 10);
    const colIndex = Math.round(col * 100);

    if (rowIndex >= 0 && rowIndex <= 39 && colIndex >= 0 && colIndex <= 9) {
      const zValue = zTable[rowIndex][colIndex];
      result2.style.display = "block";
      result2.innerHTML = `<p>Z-Value: <span >${zValue.toFixed(4)}</span></p>`;
      displayZTable(rowIndex, colIndex);
    } else {
      result2.innerHTML = `<p>Z-Value: <span >Invalid input!</span></p>`;
    }
  } else {
    result2.innerHTML = `<p>Z-Value: <span >Invalid input!</span></p>`;
  }
}

button.addEventListener("click", loopupZvalueOneInput);

function lookupZValueTwoInput() {
  const row = parseFloat(rowValue.value);
  const col = parseFloat(colValue.value);

  // Validate inputs
  if (isNaN(row) || isNaN(col) || row < 0 || col < 0) {
    result.innerHTML = `<p>Z-Value: <span >Invalid input!</span></p>`;
    return;
  }

  // Calculate row and column indices
  const rowIndex = Math.round(row * 10);
  const colIndex = Math.round(col * 100);

  if (rowIndex >= 0 && rowIndex <= 39 && colIndex >= 0 && colIndex <= 9) {
    const zValue = zTable[rowIndex][colIndex];
    result.innerHTML = `<p>Z-Value: <span >${zValue.toFixed(4)}</span></p>`;
    displayZTable(rowIndex, colIndex);
  } else {
    result.innerHTML = `<p>Z-Value: <span >Invalid input!</span></p>`;
  }
}

findValueButton.addEventListener("click", lookupZValueTwoInput);

function clearValue() {
  rowValue.value = "";
  colValue.value = "";
  result.innerHTML = "";
  clearX.forEach((e, i) => {
  if (i == 0) {
      e.style.display = "none";
  }
  if (i == 1) {
      e.style.display = "none";
  }
  });
  
  const highlightedCell = tBody.querySelector(".highlight");
  if (highlightedCell) {
    highlightedCell.classList.remove("highlight");
  }

  tBody.querySelectorAll(".match-up").forEach((e) => {
    e.classList.remove("match-up");
  });

  tBody.querySelectorAll(".match-dn").forEach((e) => {
    e.classList.remove("match-dn");
  });

  tBody.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

clearValueButton.addEventListener("click", clearValue);

const theme = document.querySelectorAll(".col");
const link = document.getElementById("link");
const showTable = document.getElementById("show-table");
const colActLinear = document.querySelector(".col-a-lin");
const colActColor = document.querySelector(".col-a-col");
const mainCon = document.querySelector(".main");
const setting = document.querySelector(".setting");
const settingContainer = document.querySelector(".setting-con");
const blurDiv = document.querySelector(".blur");
const oneInputM = document.getElementById("oneInput");
const container = document.querySelectorAll(".container");
const clearX = document.querySelectorAll(".clear-x");
const mess = document.querySelector(".mess");

let settingFlag = 0;

function hideSettingCon() {
  settingContainer.style.display = "none";
  blurDiv.style.display = "none";
  settingFlag = 0;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    setting.style.display = "none";
    hideSettingCon();
  } else {
    setting.style.display = "block";
    hideSettingCon();
  }
});

settingContainer.addEventListener("click", (e) => e.stopPropagation());

setting.addEventListener("click", (e) => {
  e.stopPropagation();
  settingFlag++;
  if (settingFlag == 1) {
    settingContainer.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
    });
    document.addEventListener("click", hideSettingCon);
    settingContainer.style.display = "block";
    blurDiv.style.display = "block";
  } else {
    document.removeEventListener("click", hideSettingCon);
    settingContainer.style.display = "none";
    blurDiv.style.display = "none";
    settingFlag = 0;
  }
});

(() => {
  colActLinear.style.background = "linear-gradient(300deg, #9400d3, #ff1493)";
  colActColor.style.backgroundColor = "#ff1493";
  link.href = "./color-css/deep-pin.css";
})();

mainCon.animate([{ opacity: 0 }, { opacity: 1 }], {
  duration: 500,
});

let data = null;
let st;
theme.forEach((e, i) => {
  e.addEventListener("click", () => {
    mainCon.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
    });
    mess.textContent = "Theme Applied";
    mess.style.top = "0.7rem";
    clearTimeout(st);
    st = setTimeout(() => {
      mess.style.top = "-10%";
    }, 2000);
    if (i === 0) {
      link.href = "./color-css/deep-pin.css";
      colActLinear.style.background =
        "linear-gradient(300deg, #9400d3, #ff1493)";
      colActColor.style.backgroundColor = "#ff1493";
      data = [
        "linear-gradient(300deg, #9400d3, #ff1493)",
        "#ff1493",
        "./color-css/deep-pin.css",
      ];
    } else if (i === 1) {
      link.href = "./color-css/deep-sky.css";
      colActLinear.style.background =
        "linear-gradient(300deg, #00d3d3, #1466ff)";
      colActColor.style.backgroundColor = "#1466ff";
      data = [
        "linear-gradient(300deg, #00d3d3, #1466ff)",
        "#1466ff",
        "./color-css/deep-sky.css",
      ];
    } else if (i === 2) {
      link.href = "./color-css/limegreen.css";
      colActLinear.style.background = "linear-gradient(300deg, #ff0, #14ff91)";
      colActColor.style.backgroundColor = "#00bd00";
      data = [
        "linear-gradient(300deg, #ff0, #14ff91)",
        "#00bd00",
        "./color-css/limegreen.css",
      ];
    } else {
      link.href = "./color-css/grey-black.css";
      colActLinear.style.background =
        "linear-gradient(300deg, #bbbbbb, #212121)";
      colActColor.style.backgroundColor = "#212121";
      data = [
        "linear-gradient(300deg, #bbbbbb, #212121)",
        "#212121",
        "./color-css/grey-black.css",
      ];
    }
    localStorage.setItem("theme-data", JSON.stringify(data));
  });
});

showTable.addEventListener("change", () => {
  mess.textContent = "Sucess";
  mess.style.top = "0.7rem";
  clearTimeout(st);
  st = setTimeout(() => {
    mess.style.top = "-10%";
  }, 2000);
  if (showTable.checked) {
    tBody.parentElement.parentElement.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: 300,
      }
    );
    tBody.parentElement.parentElement.style.display = "block";
    displayZTable();
    localStorage.setItem("check", JSON.stringify("block"));
  } else {
    tBody.parentElement.parentElement.style.display = "none";
    localStorage.setItem("check", JSON.stringify("none"));
  }
});

let oneInputData = null;
oneInputM.addEventListener("change", () => {
  mess.textContent = "Sucess";
  mess.style.top = "0.7rem";
  clearTimeout(st);
  st = setTimeout(() => {
    mess.style.top = "-10%";
  }, 2000);
  if (oneInputM.checked) {
    container.forEach((e, i) => {
      if (i == 0) {
        e.style.display = "none";
        oneInputData = ["none", "block"];
      } else {
        e.style.display = "block";
        e.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
        });
      }
    });
  } else {
    container.forEach((e, i) => {
      if (i == 0) {
        e.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
        });
        e.style.display = "block";
        oneInputData = ["block", "none"];
      } else {
        e.style.display = "none";
      }
    });
  }
  localStorage.setItem("oneInputMode", JSON.stringify(oneInputData));
});

function operateClearX(element, index) {
  element.addEventListener("input", () => {
    if (element.value.length > 0) {
      clearX.forEach((e, i) => {
        if (i == index) {
          e.style.display = "block";
        }
      });
    } else {
      clearX.forEach((e, i) => {
        if (i == index) {
          e.style.display = "none";
        }
      });
    }
  });
}

operateClearX(rowValue, 0);
operateClearX(colValue, 1);
operateClearX(inputValue, 2);

clearX.forEach((e, i) => {
  if (i == 0) {
    e.addEventListener("click", () => {
      rowValue.value = "";
      e.style.display = "none";
    });
  }
  if (i == 1) {
    e.addEventListener("click", () => {
      colValue.value = "";
      e.style.display = "none";
    });
  }
  if (i == 2) {
    e.addEventListener("click", () => {
      inputValue.value = "";
      result2.innerHTML = "";
      e.style.display = "none";
      const highlightedCell = tBody.querySelector(".highlight");
      if (highlightedCell) {
        highlightedCell.classList.remove("highlight");
      }

      tBody.querySelectorAll(".match-up").forEach((e) => {
        e.classList.remove("match-up");
      });

      tBody.querySelectorAll(".match-dn").forEach((e) => {
        e.classList.remove("match-dn");
      });

      tBody.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }
});

const themeData = JSON.parse(localStorage.getItem("theme-data"));
const checkTrack = JSON.parse(localStorage.getItem("check"));
const oneInputMode = JSON.parse(localStorage.getItem("oneInputMode"));

if (themeData) {
  colActLinear.style.background = themeData[0];
  colActColor.style.backgroundColor = themeData[1];
  link.href = themeData[2];
}

if (checkTrack == "block") {
  displayZTable();
  showTable.checked = true;
  tBody.parentElement.parentElement.style.display = checkTrack;
}

if (oneInputMode) {
  if (oneInputMode[0] === "none") {
    oneInputM.checked = true;
    container.forEach((e, i) => {
      if (i == 0) {
        e.style.display = oneInputMode[0];
      } else {
        e.style.display = oneInputMode[1];
      }
    });
  } else {
    container.forEach((e, i) => {
      if (i == 0) {
        e.style.display = oneInputMode[0];
      } else {
        e.style.display = oneInputMode[1];
      }
    });
  }
}
