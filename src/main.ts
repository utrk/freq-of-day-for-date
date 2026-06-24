import { validateDate, getDayOfWeekCountsFromDate } from "./lib";

const form = document.getElementById("form")!;
const monthInput = document.getElementById("month") as HTMLInputElement;
const dayInput = document.getElementById("day") as HTMLInputElement;
const result = document.getElementById("result")!;

const dayLabels = "日月火水木金土";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const month = Number(monthInput.value);
  const day = Number(dayInput.value);
  if (validateDate(month, day)) {
    const counts = getDayOfWeekCountsFromDate(month, day);

    result.innerHTML = `
      <h2>${month}月${day}日</h2>
      <table>
        <tbody>
          ${counts
            .map((count, index) => {
              return `
              <tr>
                <th>${dayLabels[index]}曜日</th>
                <td>${count}</td>
              </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    `;
  } else {
    result.innerHTML = "<p>日付が不正です</p>";
  }
});
