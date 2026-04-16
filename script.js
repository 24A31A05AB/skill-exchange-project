// Get skills from localStorage or initialize empty array
let skills = JSON.parse(localStorage.getItem('skills')) || [];

/* ================= ADD SKILL ================= */
function addSkill(e) {
  e.preventDefault();

  let name = document.getElementById('skillName').value;
  let desc = document.getElementById('desc').value;
  let level = document.getElementById('level').value;

  let skill = {
    name: name,
    desc: desc,
    level: level
  };

  skills.push(skill);

  // Save to localStorage
  localStorage.setItem('skills', JSON.stringify(skills));

  alert("✅ Skill Added Successfully!");

  // Clear form
  document.getElementById('skillName').value = "";
  document.getElementById('desc').value = "";
}

/* ================= LOAD SKILLS ================= */
function loadSkills() {
  let container = document.getElementById('skillsList');
  if (!container) return;

  container.innerHTML = "";

  skills.forEach(skill => {
    container.innerHTML += `
      <div class="card">
        <h3>${skill.name}</h3>
        <p>${skill.desc}</p>
        <p><b>${skill.level}</b></p>
      </div>
    `;
  });
}

/* ================= SEARCH FUNCTION ================= */
function searchSkill() {
  let input = document.getElementById('search').value.toLowerCase();
  let container = document.getElementById('skillsList');

  container.innerHTML = "";

  let filtered = skills.filter(skill =>
    skill.name.toLowerCase().includes(input)
  );

  filtered.forEach(skill => {
    container.innerHTML += `
      <div class="card">
        <h3>${skill.name}</h3>
        <p>${skill.desc}</p>
        <p><b>${skill.level}</b></p>
      </div>
    `;
  });
}

/* ================= LOAD PROFILE ================= */
function loadProfile() {
  let list = document.getElementById('mySkills');
  if (!list) return;

  list.innerHTML = "";

  skills.forEach(skill => {
    let li = document.createElement('li');
    li.textContent = skill.name + " (" + skill.level + ")";
    list.appendChild(li);
  });
}

/* ================= AUTO LOAD ================= */
window.onload = function () {
  loadSkills();
  loadProfile();
};
function loginUser(e) {
  e.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Dummy login (frontend only)
  if (username === "admin" && password === "1234") {
    alert("✅ Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("❌ Invalid Username or Password");
  }
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });
}