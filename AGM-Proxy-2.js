Outseta.getUser().then(user => {
    var presidentOption = document.getElementById('President');
    var vicePresidentOption = document.getElementById('Vice-President');
    var branchChairOption = document.getElementById('Branch-Chair');
    var presidentVoteReceivedDiv = document.getElementById('president-vote-received');
    var vicepresidentVoteReceivedDiv = document.getElementById('vice-president-vote-received');
    var branchchairVoteReceivedDiv = document.getElementById('branch-chair-vote-received');
    var Proxy-AccordionDiv = document.getElementById('Proxy-Accordion');
    var Agenda-AccordionDiv = document.getElementById('Agenda-Accordion');
    var Proxy-voteDiv = document.getElementById('Proxy-vote');
    var Agenda-businessDiv = document.getElementById('Agenda-business');

    if (user.Account.AgmProxyVotePresident === 'Yes') {
        // Hide the 'President' option
        presidentOption.parentElement.style.display = 'none';
        presidentVoteReceivedDiv.style.display = 'flex';
    }

    if (user.Account.AgmProxyVoteVicePresident === 'Yes') {
        // Hide the 'Vice President' option
        vicePresidentOption.parentElement.style.display = 'none';
        vicepresidentVoteReceivedDiv.style.display = 'flex'; // Changed to 'flex'
    }

    if (user.Account.AgmVotedForAgendaItems === 'Yes') {
        // Hide the 'Agenda Recieved' option
        Agenda - businessDiv.parentElement.style.display = 'none';
        Agenda - AccordionDiv.style.display = 'flex'; // Changed to 'flex'
    }

    if (user.Account.AppointedProxy !== '') {
        // Hide the 'Proxy Recieved' option
        Proxy - voteDiv.parentElement.style.display = 'none';
        Proxy - AccordionDiv.style.display = 'flex'; // Changed to 'flex'
    }

    if (user.Account.AgmProxyVoteBranchChair === 'Yes') {
        // Hide the 'Branch Chair' option
        branchChairOption.parentElement.style.display = 'none';
        branchchairVoteReceivedDiv.style.display = 'flex'; // Changed to 'flex'
    }
});