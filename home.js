const allcards = document.getElementById("all-cards");
console.log(allcards)
const openTab = document.getElementById("open-tab")
const closedTab = document.getElementById("closed-tab")
const loadIssues = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();
  renderAllIssues(data.data)
  renderOpenIssues(data.data)
  renderClosedIssues(data.data)
}

loadIssues();
const renderClosedIssues = (issues) => {

  const openContainer = document.getElementById("close-container");
  openContainer.innerHTML = "";

  const openItems = issues.filter(issue => issue.status === "closed");

  openItems.forEach(issue => {

    const statusIcon = issue.status === "open"
      ? "./assets/Open-Status.png"
      : "./assets/Closed- Status .png";

    const priorityColor = issue.priority === "low"
      ? "text-green-500"
      : issue.priority === "medium"
        ? "text-yellow-400"
        : "text-red-400";

    const statusColor = issue.status === "open"
      ? "border-t-3 border-success"
      : "border-t-3 border-error";

    const labelsHTML = issue.labels.map(label => {
      let color = "btn-soft";
      let icon = "";

      if (label === "bug") {
        color = "btn-error";
        icon = `<i class="fa-solid fa-bug"></i>`;
      }
      if (label === "help wanted") {
        color = "btn-warning";
        icon = `<i class="fa-solid fa-life-ring"></i>`;
      }
      if (label === "enhancement") {
        color = "btn-success";
        icon = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
      }
      if (label === "documentation") {
        color = "btn-info";
        icon = `<i class="fa-regular fa-file"></i>`;
      }
      if (label === "good first issue") {
        color = "btn-primary";
        icon = `<i class="fa-solid fa-thumbs-up"></i>`;
      }

      return `
        <button class="btn btn-soft ${color} rounded-full">
          <span>${icon}</span> ${label}
        </button>
      `;
    }).join("");

    const card = document.createElement("div");

    card.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg space-y-4 p-4 ${statusColor}">
          <div class="flex justify-between">
            <div>
              <img src="${statusIcon}" alt="">
            </div>
            <p class="text-[12px] font-bold ${priorityColor}">
              ${issue.priority.toUpperCase()}
            </p>
          </div>

          <div class="space-y-3">
            <h2 class="text-sm font-semibold">${issue.title}</h2>
            <p class="text-gray-500 text-[12px]">${issue.description}</p>

            <div>
              ${labelsHTML}
            </div>
          </div>

          <div class="text-gray-500 text-[12px]">
            <p>#${issue.id} by ${issue.author}</p>
            <p>${issue.createdAt}</p>
          </div>
        </div>
    `;

    openContainer.appendChild(card);

  });

}
const renderOpenIssues = (issues) => {

  const openContainer = document.getElementById("open-container");
  openContainer.innerHTML = "";

  const openItems = issues.filter(issue => issue.status === "open");

  openItems.forEach(issue => {

    const statusIcon = issue.status === "open"
      ? "./assets/Open-Status.png"
      : "./assets/Closed-Status.png";

    const priorityColor = issue.priority === "low"
      ? "text-green-500"
      : issue.priority === "medium"
        ? "text-yellow-400"
        : "text-red-400";

    const statusColor = issue.status === "open"
      ? "border-t-3 border-success"
      : "border-t-3 border-error";

    const labelsHTML = issue.labels.map(label => {
      let color = "btn-soft";
      let icon = "";

      if (label === "bug") {
        color = "btn-error";
        icon = `<i class="fa-solid fa-bug"></i>`;
      }
      if (label === "help wanted") {
        color = "btn-warning";
        icon = `<i class="fa-solid fa-life-ring"></i>`;
      }
      if (label === "enhancement") {
        color = "btn-success";
        icon = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
      }
      if (label === "documentation") {
        color = "btn-info";
        icon = `<i class="fa-regular fa-file"></i>`;
      }
      if (label === "good first issue") {
        color = "btn-primary";
        icon = `<i class="fa-solid fa-thumbs-up"></i>`;
      }

      return `
        <button class="btn btn-soft ${color} rounded-full">
          <span>${icon}</span> ${label}
        </button>
      `;
    }).join("");

    const card = document.createElement("div");

    card.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg space-y-4 p-4 ${statusColor}">
          <div class="flex justify-between">
            <div>
              <img src="${statusIcon}" alt="">
            </div>
            <p class="text-[12px] font-bold ${priorityColor}">
              ${issue.priority.toUpperCase()}
            </p>
          </div>

          <div class="space-y-3">
            <h2 class="text-sm font-semibold">${issue.title}</h2>
            <p class="text-gray-500 text-[12px]">${issue.description}</p>

            <div>
              ${labelsHTML}
            </div>
          </div>

          <div class="text-gray-500 text-[12px]">
            <p>#${issue.id} by ${issue.author}</p>
            <p>${issue.createdAt}</p>
          </div>
        </div>
    `;

    openContainer.appendChild(card);

  });

}
const renderAllIssues = (issues) => {
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
        : "text-red-400";
    const statusColor = issue.status === "open" ?
      "border-t-3 border-success" :
      "border-t-3 border-error";
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
      <div class="bg-white rounded-lg shadow-lg space-y-4 p-4 ${statusColor}">
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
const toggleStyle = (id) => {
  const allBtn = document.getElementById("all-btn");
  const openBtn = document.getElementById("open-btn");
  const closedBtn = document.getElementById("closed-btn");
  const selected = document.getElementById(id);

  allBtn.classList.remove("btn-primary");
  openBtn.classList.remove("btn-primary");
  closedBtn.classList.remove("btn-primary");

  allBtn.classList.add("btn-outline");
  openBtn.classList.add("btn-outline");
  closedBtn.classList.add("btn-outline");

  // selected button highlight
  selected.classList.remove("btn-outline");
  selected.classList.add("btn-primary");;
  if (id === 'all-btn') {
    console.log('allbtn')
    closedTab.classList.add('hidden');
    openTab.classList.add('hidden')
    allcards.classList.remove('hidden')


  } else if (id === 'open-btn') {
    console.log('openbtn')
    closedTab.classList.add('hidden');
    openTab.classList.remove('hidden')
    allcards.classList.add('hidden')


  } else if (id === 'closed-btn') {
    console.log('closedbtn')
    closedTab.classList.remove('hidden');
    openTab.classList.add('hidden')
    allcards.classList.add('hidden')


  }
}