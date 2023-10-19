< !--Reloads nomination form when submitting a new entree-- >
<script>
document.addEventListener('DOMContentLoaded', function() {
  const reloadButton = document.getElementById('reload-nomination');
  const buttonTextAnotherNom = document.getElementById('button-text-another-nom');
  const animationNom = document.getElementById('animation-nom');
  let enableReload = false; // A flag to control button enabling

  if (reloadButton) {
    reloadButton.addEventListener('click', function() {
      if (enableReload) {
        // Store the current scroll position
        const scrollPosition = window.scrollY;

        // Add the scroll position as a URL hash to retain it after the reload
        window.location.hash = `scroll=${scrollPosition}`;

        // Force a page reload
        location.reload();
      }
    });
  }

  // Check for the scroll position hash and restore the scroll position
  const scrollHash = window.location.hash;
  const scrollMatch = scrollHash.match(/scroll=(\d+)/);

  if (scrollMatch) {
    const scrollPosition = parseInt(scrollMatch[1]);
    window.scrollTo(0, scrollPosition);
  }

  // Function to enable the button and change visibility
  const enableButtonAndChangeVisibility = function() {
    buttonTextAnotherNom.style.display = 'block';
    animationNom.style.display = 'none';
    
    // Enable the reload button after 5 seconds
    setTimeout(function() {
      enableReload = true;
    }, 1000); // 5000 milliseconds = 5 seconds
  };

  // Observe changes to the style attribute of the form element
  const formNomination = document.getElementById('wf-form-AGM-Proxy-Vote');

  const observer = new MutationObserver(function(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'style') {
        const computedStyle = getComputedStyle(formNomination);
        
        if (computedStyle.display === 'none') {
          // Use a setTimeout to run the enableButtonAndChangeVisibility function after 5 seconds
          setTimeout(enableButtonAndChangeVisibility, 5000); // 5000 milliseconds = 5 seconds
          observer.disconnect(); // Stop observing once the condition is met
        }
      }
    }
  });

  // Start observing changes to the style attribute
  observer.observe(formNomination, { attributes: true });
});


</script>

<!--Shows specific divs based on radio button selection-- >
<script>
  // Function to show specific div based on selected radio button
  function showRoleDivBasedOnSelection(selectedValue) {
    // Array of all possible div IDs
    var allDivs = ['President-Vote', 'Vice-President-Vote', 'Branch-Chair-Vote', 'Branch-Committee-Member-Vote'];

    // Hide all divs initially
    allDivs.forEach(function(divId) {
      document.getElementById(divId).style.display = 'none';
    });

    // Show the relevant div based on the selection
    switch (selectedValue) {
      case 'President':
        document.getElementById('President-Vote').style.display = 'flex';
        break;
      case 'Vice President':
        document.getElementById('Vice-President-Vote').style.display = 'flex';
        break;
      case 'Branch Chair':
        document.getElementById('Branch-Chair-Vote').style.display = 'flex';
        break;
      case 'Branch Committee Member':
        document.getElementById('Branch-Committee-Member-Vote').style.display = 'flex';
        break;
      case 'Constitution Amendment':
        document.getElementById('Constitution-Amendment-Vote').style.display = 'flex';
        break;
    }
  }

  // Add event listeners to the radio buttons
  var radioButtons = document.querySelectorAll('input[name="Role-nomination"]');
  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      showRoleDivBasedOnSelection(this.value);
    });
  });
</script>

<!--Shows specific divs based on radio button selection for CHAIR VOTE-- >
<script>
  // Function to show specific div based on selected radio button for Chair Vote
  function showChairVoteDivBasedOnSelection(selectedValue) {
    // Array of all possible div IDs for Chair Vote
    var allChairVoteDivs = ['Auckland-Chair-Vote', 'Wellington-Chair-Vote', 'Christchurch-Chair-Vote', 'Queenstown-Chair-Vote'];

    // Hide all Chair Vote divs initially
    allChairVoteDivs.forEach(function(divId) {
      document.getElementById(divId).style.display = 'none';
    });

    // Show the relevant Chair Vote div based on the selection
    switch (selectedValue) {
      case 'Auckland':
        document.getElementById('Auckland-Chair-Vote').style.display = 'flex';
        break;
      case 'Wellington':
        document.getElementById('Wellington-Chair-Vote').style.display = 'flex';
        break;
      case 'Christchurch':
        document.getElementById('Christchurch-Chair-Vote').style.display = 'flex';
        break;
      case 'Queenstown':
        document.getElementById('Queenstown-Chair-Vote').style.display = 'flex';
        break;
    }
  }

  // Add event listeners to the radio buttons for Chair Vote
  var chairVoteRadioButtons = document.querySelectorAll('input[name="Chair-Vote-Location"]');
  chairVoteRadioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      showChairVoteDivBasedOnSelection(this.value);
    });
  });
</script>



<!--Shows specific divs based on radio button selection for Committee VOTE-- >
<script>
  // Function to show specific div based on selected radio button for Committee Vote
  function showCommitteeVoteDivBasedOnSelection(selectedValue) {
    // Array of all possible div IDs for Committee Vote
    var allCommitteeVoteDivs = ['Auckland-Committee-Vote', 'Wellington-Committee-Vote', 'Christchurch-Committee-Vote', 'Queenstown-Committee-Vote'];

    // Hide all Committee Vote divs initially
    allCommitteeVoteDivs.forEach(function(divId) {
      document.getElementById(divId).style.display = 'none';
    });

    // Show the relevant Committee Vote div based on the selection
    switch (selectedValue) {
      case 'Auckland':
        document.getElementById('Auckland-Committee-Vote').style.display = 'flex';
        break;
      case 'Wellington':
        document.getElementById('Wellington-Committee-Vote').style.display = 'flex';
        break;
      case 'Christchurch':
        document.getElementById('Christchurch-Committee-Vote').style.display = 'flex';
        break;
      case 'Queenstown':
        document.getElementById('Queenstown-Committee-Vote').style.display = 'flex';
        break;
    }
  }

  // Add event listeners to the radio buttons for Committee Vote
  var CommitteeVoteRadioButtons = document.querySelectorAll('input[name="Committee-Vote-Location"]');
  CommitteeVoteRadioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      showCommitteeVoteDivBasedOnSelection(this.value);
    });
  });
</script>

<Script>
function showAppointProxyDivBasedOnSelection(selectedValue) {
  // Hide all divs initially
  document.getElementById('select-proxy').style.display = 'none';
  document.getElementById('proxy-executive').style.display = 'none';

  // Show the relevant div based on the selection
  switch (selectedValue) {
    case 'Appoint my own Proxy Representative':
      document.getElementById('select-proxy').style.display = 'flex';
      break;
    case 'Request executive to present my vote':
      document.getElementById('proxy-executive').style.display = 'flex';
      break;
  }
}

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to the radio buttons for Appoint-Proxy
  var appointProxyRadioButtons = document.querySelectorAll('input[name="Appoint-Proxy"]');
  appointProxyRadioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      showAppointProxyDivBasedOnSelection(this.value);
    });
  });

  // Initial call to set the initial state based on the selected radio button on page load
  var selectedRadioButton = document.querySelector('input[name="Appoint-Proxy"]:checked');
  if (selectedRadioButton) {
    showAppointProxyDivBasedOnSelection(selectedRadioButton.value);
  }
});

</script>

<!--Hides nomination options based on previous voting-- >
    <script>
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
        Agenda-AccordionDiv.style.display = 'flex'; // Changed to 'flex'
  }

        if (user.Account.AppointedProxy !== '') {
            // Hide the 'Proxy Recieved' option
            Proxy - voteDiv.parentElement.style.display = 'none';
        Proxy-AccordionDiv.style.display = 'flex'; // Changed to 'flex'
  }

        if (user.Account.AgmProxyVoteBranchChair === 'Yes') {
            // Hide the 'Branch Chair' option
            branchChairOption.parentElement.style.display = 'none';
        branchchairVoteReceivedDiv.style.display = 'flex'; // Changed to 'flex'
  }
});
    </script>