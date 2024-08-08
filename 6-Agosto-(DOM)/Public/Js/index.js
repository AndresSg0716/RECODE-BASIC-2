document.addEventListener("DOMContentLoaded", () => {
    let clickCounter = 0;
    const clickCounterBtn = document.getElementById("clickCounterBtn");
    const clickCounterDisplay = document.getElementById("clickCounter");

    clickCounterBtn.addEventListener("click", () => {
        clickCounter++;
        clickCounterDisplay.textContent = clickCounter;
    });

    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-task-btn">Eliminar</button>
            `;
            taskItem.querySelector(".delete-task-btn").addEventListener("click", () => {
                taskItem.remove();
            });
            taskList.appendChild(taskItem);
            newTaskInput.value = "";
        }
    });

    const hoverParagraph = document.getElementById("hoverParagraph");

    hoverParagraph.addEventListener("mouseenter", () => {
        hoverParagraph.style.backgroundColor = "var(--color-10)";
        hoverParagraph.style.color = "var(--color-60)";
    });

    hoverParagraph.addEventListener("mouseleave", () => {
        hoverParagraph.style.backgroundColor = "transparent";
        hoverParagraph.style.color = "var(--color-60)";
    });

    let timerInterval;
    const timerWheel = document.getElementById("timerWheel");
    const timerDisplay = document.getElementById("timerDisplay");
    const startTimerBtn = document.getElementById("startTimerBtn");
    const pauseTimerBtn = document.getElementById("pauseTimerBtn");
    const resetTimerBtn = document.getElementById("resetTimerBtn");
    const timeInput = document.getElementById("timeInput");

    let totalTime = 60;
    let remainingTime = totalTime;

    function updateTimerWheel() {
        const progress = (remainingTime / totalTime) * 360;
        timerWheel.style.background = `conic-gradient(var(--color-10) ${progress}deg, var(--color-30) ${progress}deg)`;
        timerDisplay.textContent = remainingTime;
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            remainingTime--;
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                remainingTime = 0;
            }
            updateTimerWheel();
        }, 1000);
    }

    function pauseTimer() {
        if (timerInterval) clearInterval(timerInterval);
    }

    function resetTimer() {
        if (timerInterval) clearInterval(timerInterval);
        remainingTime = parseInt(timeInput.value) || 60;
        totalTime = remainingTime;
        updateTimerWheel();
    }

    startTimerBtn.addEventListener("click", startTimer);
    pauseTimerBtn.addEventListener("click", pauseTimer);
    resetTimerBtn.addEventListener("click", resetTimer);

    updateTimerWheel();

    const toggleImage = document.getElementById("toggleImage");
    toggleImage.addEventListener("click", () => {
        if (toggleImage.src.includes("imagen2.jpg")) {
            toggleImage.src = "Public/Img/imagen1.jfif";
        } else {
            toggleImage.src = "Public/Img/imagen2.jpg";
        }
    });
});