// ============================================
// 1. Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after a link is tapped
primaryNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth < 768) {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ============================================
// 2. Save-trail state (simple in-memory state management)
// ============================================
const savedTrails = new Set();
const savedList = document.getElementById('savedList');

function renderSavedList() {
  savedList.innerHTML = '';
  if (savedTrails.size === 0) {
    savedList.innerHTML = '<li class="saved-empty">No trails saved yet.</li>';
    return;
  }
  savedTrails.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    savedList.appendChild(li);
  });
}

document.querySelectorAll('.save-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const trailName = btn.dataset.trail;
    if (savedTrails.has(trailName)) {
      savedTrails.delete(trailName);
      btn.classList.remove('saved');
      btn.textContent = 'Save trail';
    } else {
      savedTrails.add(trailName);
      btn.classList.add('saved');
      btn.textContent = 'Saved ✓';
    }
    renderSavedList();
  });
});

// ============================================
// 3. Planner form — suggest a trail based on inputs
// ============================================
const plannerForm = document.getElementById('plannerForm');
const plannerResult = document.getElementById('plannerResult');

const trailData = [
  { name: 'Willow Creek Path', hours: 1, difficulty: 'Easy' },
  { name: 'Ridgeline Loop', hours: 2, difficulty: 'Easy' },
  { name: 'Summit Pass', hours: 4, difficulty: 'Moderate' },
  { name: 'Copper Ridge Trail', hours: 6, difficulty: 'Hard' },
];

plannerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const hours = Number(document.getElementById('duration').value);
  const difficulty = document.getElementById('difficulty').value;

  const match = trailData.find(
    (t) => t.difficulty === difficulty && t.hours <= hours
  ) || trailData.find((t) => t.hours <= hours);

  plannerResult.textContent = match
    ? `Try "${match.name}" — about ${match.hours}h, ${match.difficulty}.`
    : 'No trail fits that window yet — try allowing more time.';
});
