fetch('./data.json')
.then(response => response.json())
.then(data =>{
    const mondayBubble = document.getElementById('monday');
    const tuesdayBubble = document.getElementById('tuesday');
    const wednesdayBubble = document.getElementById('wednesday');
    const thursdayBubble = document.getElementById('thursday');
    const fridayBubble = document.getElementById('friday');
    const saturdayBubble = document.getElementById('saturday');
    const sundayBubble = document.getElementById('sunday');

    mondayBubble.innerHTML = '$' + data[0].amount;
    tuesdayBubble.innerHTML = '$' + data[1].amount;
    wednesdayBubble.innerHTML = '$' + data[2].amount;
    thursdayBubble.innerHTML = '$' + data[3].amount;
    fridayBubble.innerHTML = '$' + data[4].amount;
    saturdayBubble.innerHTML = '$' + data[5].amount;
    sundayBubble.innerHTML = '$' + data[6].amount;
})