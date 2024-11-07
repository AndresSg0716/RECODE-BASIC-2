class SurveyManager {
    constructor() {
        if (!SurveyManager.instance) {
            this.surveys = JSON.parse(localStorage.getItem('surveys')) || [];
            SurveyManager.instance = this;
        }
        return SurveyManager.instance;
    }

    addSurvey(title, options) {
        const survey = { id: Date.now(), title, options: options.map(option => ({ text: option, votes: 0 })) };
        this.surveys.push(survey);
        this.saveSurveys();
    }

    deleteSurvey(surveyId) {
        this.surveys = this.surveys.filter(s => s.id !== surveyId);
        this.saveSurveys();
    }

    saveSurveys() {
        localStorage.setItem('surveys', JSON.stringify(this.surveys));
    }

    getSurveys() {
        return this.surveys;
    }

    vote(surveyId, optionIndex) {
        const survey = this.surveys.find(s => s.id === surveyId);
        if (survey) {
            survey.options[optionIndex].votes++;
            this.saveSurveys();
        }
    }
}

const surveyManager = new SurveyManager();

function loadSurveys() {
    const surveyList = document.getElementById('survey-list');
    surveyList.innerHTML = '';
    surveyManager.getSurveys().forEach(survey => {
        const surveyDiv = document.createElement('div');
        surveyDiv.classList.add('survey');
        
        // Contenedor para el título y botón de eliminar
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('survey-header');
        
        const title = document.createElement('h3');
        title.textContent = survey.title;
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '🗑️';
        deleteButton.onclick = () => {
            if (confirm('¿Estás seguro de que deseas eliminar esta encuesta?')) {
                surveyManager.deleteSurvey(survey.id);
                loadSurveys();
                displayResults();
            }
        };
        
        headerDiv.appendChild(title);
        headerDiv.appendChild(deleteButton);
        surveyDiv.appendChild(headerDiv);

        survey.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = () => {
                surveyManager.vote(survey.id, index);
                displayResults();
            };
            surveyDiv.appendChild(button);
        });
        surveyList.appendChild(surveyDiv);
    });
}

function displayResults() {
    const resultsChart = document.getElementById('results-chart');
    resultsChart.innerHTML = '';
    surveyManager.getSurveys().forEach(survey => {
        const surveyDiv = document.createElement('div');
        surveyDiv.classList.add('survey-result');
        surveyDiv.innerHTML = `<h3>${survey.title}</h3>`;
        const totalVotes = survey.options.reduce((sum, option) => sum + option.votes, 0);
        survey.options.forEach(option => {
            const barContainer = document.createElement('div');
            barContainer.classList.add('bar-container');
            const bar = document.createElement('div');
            bar.classList.add('bar');
            const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
            bar.style.width = `${percentage}%`;
            bar.textContent = `${option.text}: ${option.votes} votos (${percentage.toFixed(1)}%)`;
            barContainer.appendChild(bar);
            surveyDiv.appendChild(barContainer);
        });
        resultsChart.appendChild(surveyDiv);
    });
}
document.getElementById('add-option').addEventListener('click', () => {
    const optionsDiv = document.getElementById('options');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Opción ${optionsDiv.children.length + 1}`;
    optionsDiv.appendChild(input);
});
document.getElementById('save-survey').addEventListener('click', () => {
    const title = document.getElementById('survey-title').value;
    const options = Array.from(document.getElementById('options').children)
        .map(input => input.value)
        .filter(Boolean);
    if (title && options.length >= 2) {
        surveyManager.addSurvey(title, options);
        loadSurveys();
        document.getElementById('survey-title').value = '';
        document.getElementById('options').innerHTML = '';
        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = 'Opción 1';
        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.placeholder = 'Opción 2';
        document.getElementById('options').appendChild(input1);
        document.getElementById('options').appendChild(input2);
    } else {
        alert('Por favor, ingresa un título y al menos dos opciones.');
    }
});
window.onload = () => {
    loadSurveys();
    displayResults();
};
