document.getElementById('submit-btn').addEventListener('click', function() {
    const selectedSeason = document.querySelector('input[name="season"]:checked');
    if (selectedSeason) {
        const season = selectedSeason.value;

        switch (season) {
            case 'fall':
                document.getElementById('season-heading').style.color = 'orange';
                document.body.style.backgroundColor = '#FFDEAD'; 
                break;
            case 'summer':
                document.getElementById('season-heading').style.color = '#154734';
                document.body.style.backgroundColor = '#B2E3B2'; 
                break;
            case 'winter':
                document.getElementById('season-heading').style.color = 'blue';
                document.body.style.backgroundColor = '#B0C4DE'; 
                break;
            case 'spring':
                document.getElementById('season-heading').style.color = 'hotpink';
                document.body.style.backgroundColor = '#FFB6C1'; 
                break;
        }
    } else {
        alert('Select a season.');
    }
});
