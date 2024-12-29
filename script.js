
function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get last day of the month
    return { firstDay, daysInMonth };
}

function createCalendarGrid(year, month) {
    const { firstDay, daysInMonth } = generateCalendar(year, month);
    const calendarGrid = document.querySelector('.calendar-grid');
    calendarGrid.innerHTML = ''; // Clear existing grid

    // Add empty cells for alignment
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    // Add cells for each day
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        calendarGrid.appendChild(dayCell);
    }
}

function updateCalendarHeader(year, month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    document.querySelector('.calendar-header h2').textContent = `${monthNames[month]} ${year}`;
}

// Navigation Buttons
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

document.querySelector('.calendar-header button:first-child').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendarHeader(currentYear, currentMonth);
    createCalendarGrid(currentYear, currentMonth);
});

document.querySelector('.calendar-header button:last-child').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendarHeader(currentYear, currentMonth);
    createCalendarGrid(currentYear, currentMonth);
});

// Initialize Calendar
updateCalendarHeader(currentYear, currentMonth);
createCalendarGrid(currentYear, currentMonth);
