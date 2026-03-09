console.log('hello')
const loadIssues = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();
  renderIssues(data.data)
}

loadIssues();

const renderIssues = (issues) => {
  const issueCount = document.getElementById("issue-count");
  issueCount.innerText = issues.length;


  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";

  for (const issue of issues) {
    const statusIcon = issue.status === "open"
      ? "./assets/Open-Status.png"
      : "./assets/Closed- Status .png";

    const priorityColor = issue.priority === "low"
      ? "text-green-500"
      : issue.priority === "medium"
        ? "text-yellow-400"
        : "text-red-500";

    const labelsHTML = issue.labels.map(label => {
      let color = "btn-soft";

      if (label === "bug") {
        color = "btn-error"
        icon = `<i class="fa-solid fa-bug"></i>`
      };
      if (label === "help wanted") {
        color = "btn-warning"
        icon = `<i class="fa-solid fa-life-ring"></i>`
      };
      if (label === "enhancement") {
        color = "btn-success"
        icon = `<i class="fa-solid fa-wand-magic-sparkles"></i>`
      }
      if (label === "documentation") {
        color = "btn-info"
        icon = `<i class="fa-regular fa-file"></i>`
      }
      if (label === "good first issue") {
        color = "btn-primary"
        icon = `<i class="fa-solid fa-thumbs-up"></i>`
      }
      return `
    <button class="btn btn-soft ${color} rounded-full">
      <span>${icon}</i></span> ${label}
    </button>
  `;
    }).join("");
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg space-y-4 p-4">
          <div class="flex justify-between">
            <div>
              <img src="${statusIcon}" alt="">
            </div>
            <p class="text-[12px] font-bold ${priorityColor}">${issue.priority.toUpperCase()}</p>
          </div>
          <div class="space-y-3">
            <h2 class="text-sm font-semibold">${issue.title}</h2>
            <p class="text-gray-500 text-[12px]">${issue.description}</p>
            <div>
              ${labelsHTML}
            </div>
          </div>
          <div class="text-gray-500 text-[12px]">
            <p>#${issue.id}
              by ${issue.author}</p>
            <p>${issue.createdAt}</p>
          </div>
        </div>
    `;
    issueContainer.appendChild(card);
  }

}
