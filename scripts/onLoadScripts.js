function getCurrentYear() {
  const currDate = new Date();
  const copyRight = document.getElementById("copyRight");
  console.log(currDate.getFullYear());
  copyRight.innerText = copyRight.innerText + " " + currDate.getFullYear();
}

function getProjects() {
  fetch("https://api.github.com/users/Nelsonwong22/repos")
    .then((response) => {
      const res = response.json().then((final) => {
        console.log(final);
        const projectSection = document.getElementById("githubProjects");
        for (let i = 0; i < final.length; i++) {
          const repo = document.createElement("li");
          const link = document.createElement("a");
          link.href = final[i].clone_url;
          link.innerText = final[i].name;
          link.target = "_blank";
          repo.appendChild(link);
          projectSection.appendChild(repo);
        }
      });
    })
    .catch((error) => console.error(error));
}
function handleOnLoad() {
  getCurrentYear();
  getProjects();
}
window.onload = handleOnLoad;
