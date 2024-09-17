function startGame() {
    let team1score = 0;
    let team2score = 0;
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML = ''; 

    function updateScores() {
        document.getElementById('team1score').textContent = team1score;
        document.getElementById('team2score').textContent = team2score;
    }

    function simulateEvent() {
        const randomEvent = Math.random();
        if (randomEvent < 0.5) {
            const points = [3, 5, 7][Math.floor(Math.random() * 3)];
            const scoringTeam = Math.random() < 0.5 ? 1 : 2;
            if (scoringTeam === 1) {
                team1score += points;
                eventsDiv.innerHTML += `<p>Equipo 1 anota ${points} puntos.</p>`;
            } else {
                team2score += points;
                eventsDiv.innerHTML += `<p>Equipo 2 anota ${points} puntos.</p>`;
            }
        } else {
            const penalty = [3, 5, 7][Math.floor(Math.random() * 3)];
            const penalizedTeam = Math.random() < 0.5 ? 1 : 2;
            if (penalizedTeam === 1) {
                team1score = Math.max(0, team1score - penalty);
                eventsDiv.innerHTML += `<p>Equipo 1 recibe una falta y pierde ${penalty} puntos.</p>`;
            } else {
                team2score = Math.max(0, team2score - penalty);
                eventsDiv.innerHTML += `<p>Equipo 2 recibe una falta y pierde ${penalty} puntos.</p>`;
            }
        }
        updateScores();
    }

    let currentRound = 1;
    let currentTime = 0;

    function startRound() {
        eventsDiv.innerHTML += `<p>Comienza la ronda ${currentRound}.</p>`;
        const roundDuration = 40;
        const simulationInterval = setInterval(() => {
            if (currentTime === roundDuration) {
                clearInterval(simulationInterval);
                eventsDiv.innerHTML += `<p>Fin de la ronda ${currentRound}.</p>`;
                currentRound++;
                currentTime = 0;
                if (currentRound <= 2) {
                    setTimeout(startRound, 5000);
                }
            } else {
                simulateEvent();
                currentTime++;
            }
        }, 10000); 
    }

    startRound();
}

document.getElementById('startGame').addEventListener('click', startGame);
