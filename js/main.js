const contentSection = document.getElementById('contentSection');
const cachedElements = {}

function setActive(e) {
  const currentActive = document.getElementsByClassName('active')[0];
  currentActive.classList.remove('active');

  const currentDisplayed = document.getElementsByClassName('isDisplayed')[0];
  console.log(currentDisplayed)
  currentDisplayed.classList.remove('isDisplayed');

  const newActivePath = e.target;
  newActivePath.classList.add('active');

  console.log(e.target.classList[0].substr(4))

  const newDisplayed = document.getElementById(e.target.classList[0]);
  newDisplayed.classList.add('isDisplayed');
}

// Setup click event for setting active path
const pathsSection = document.getElementsByClassName('pathsSection')[0];
[].forEach.call(pathsSection.children, (path) => {
  path.addEventListener('click', setActive)
});