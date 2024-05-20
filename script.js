function showPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('initialButton').style.display = 'none';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('initialButton').style.display = 'flex';
  }

  function chooseProduct(product) {
    document.getElementById('popup').innerHTML = `
    <p>Kies product:</p>
    <div class="buttoncontainer">
    <button onclick="chooseProduct('Airpods')">Airpods</button>
    <button onclick="chooseProduct('Case')">Case</button>
    </div>
    <br><br>
    <button onclick="goBack()">Ga terug</button>
    <p>Kies het juiste product en leer hoe je de generatie van je Airpods bepaalt.</p>
  `;
    if (product === 'Airpods') {
      document.getElementById('popup').innerHTML = `
      <p>Zijn je Airpods verbonden met je smartphone?</p>
      <div class="buttoncontainer">
      <button onclick="connectedToPhone('Ja')">Ja</button>
      <button onclick="connectedToPhone('Nee')">Nee</button>
      </div>
      <p>Ga naar instellingen > Bluetooth op je apparaat. Als je je Airpods ziet onder 'Mijn apparaten', kun je op Verbinden drukken.</p>
      <button onclick="chooseProduct()">Ga terug</button>
    `;
    } else if (product === 'Case') {
      document.getElementById('popup').innerHTML = `
      <p>Stap 1: Kijk voor het modelnummer aan de binnenkant van het deksel van de case</p>
      <p>Stap 2: Kijk naar de eerste vier tekens van het modelnummer aan de binnenkant van het deksel van de case</p>
      <p>Wat is het modelnummer?</p>
      <div class="buttoncontainer">
      <button onclick="determineCase('MV7N')">MV7N</button>
      <button onclick="determineCase('MWP2')">MWP2</button>
      <button onclick="determineCase('MME7')">MME7</button>
      </div>
      <br><br>
      <button onclick="chooseProduct()">Ga terug</button>
    `;
    }
  }

  function connectedToPhone(answer) {
    if (answer === 'Ja') {
      document.getElementById('popup').innerHTML = `
    <p>Stap 1: Ga naar Instellingen > Bluetooth</p>
    <p>Stap 2: Klik op het pictogram (i) naast de Airpods</p>
    <p>Stap 3: Kijk naar het modelnummer van je Airpods</p>
    <p>Wat is het modelnummer?</p>
    <div class="buttoncontainer">
    <button onclick="determineProduct('MV7N')">A2032 of A2031</button>
    <button onclick="determineProduct('MWP2')">A2084 of A2083</button>
    <button onclick="determineProduct('MME7')">A2565 of A2564</button>
    <button onclick="determineProduct('None')">Geen van deze</button>
    </div>
    <br><br>
    <button onclick="chooseProduct('Airpods')">Ga terug</button>
  `;
    } else if (answer === 'Nee') {
      document.getElementById('popup').innerHTML = `
    <p>Heb je de originele verpakking nog?</p>
    <div class="buttoncontainer">
    <button onclick="haveOriginalPackaging('Ja')">Ja</button>
    <button onclick="haveOriginalPackaging('Nee')">Nee</button>
    </div>
    <br><br>
    <button onclick="chooseProduct('Airpods')">Ga terug</button>
  `;
    }
  }

  function haveOriginalPackaging(answer) {
    if (answer === 'Ja') {
      document.getElementById('popup').innerHTML = `
      <p>U vindt het productnummer op de originele verpakking. Kijk naar de eerste vier tekens.</p>
      <p>Wat is het productnummer?</p>
      <div class="buttoncontainer">
      <button onclick="determineProduct('MV7N')">MV7N</button>
      <button onclick="determineProduct('MWP2')">MWP2</button>
      <button onclick="determineProduct('MME7')">MME7</button>
      <button onclick="determineProduct('None')">Geen van deze</button>
      </div>
      <br><br>
      <button onclick="connectedToPhone('Nee')">Ga terug</button>
    `;
    } else if (answer === 'Nee') {
      document.getElementById('popup').innerHTML = `
      <p>Kijk naar de laatste twee cijfers van het 5-cijferige modelnummer AXXXX op de gravure van je Airpods. Mogelijk hebt u een vergrootglas nodig.</p>
      <div class="buttoncontainer">
      <button onclick="determineAirpods('31')">31 of 32</button>
      <button onclick="determineAirpods('83')">83 of 84</button>
      <button onclick="determineAirpods('64')">64 of 65</button>
      </div>
      <br><br>
      <button onclick="connectedToPhone('Nee')">Ga terug</button>
    `;
    }
  }

  function determineCase(model) {
    if (model === 'MV7N') {
      displayResultWithGoBack("Je hebt Airpods 2.");
    } else if (model === 'MWP2') {
      displayResultWithGoBack("Je hebt Airpods Pro.");
    } else if (model === 'MME7') {
      displayResultWithGoBack("Je hebt Airpods 3.");
    } else if (model === 'None') {
      document.getElementById('popup').innerHTML = `
    <p>Kijk naar de laatste twee cijfers van het 5-cijferige modelnummer AXXXX op de gravure van je Airpods. Mogelijk hebt u een vergrootglas nodig.</p>
    <button onclick="determineAirpods('31')">31 of 32</button>
    <button onclick="determineAirpods('83')">83 of 84</button>
    <button onclick="determineAirpods('64')">64 of 65</button>
    <button onclick="chooseProduct()">Ga terug</button>
  `;
    }
  }

  function determineProduct(product) {
    if (product === 'MV7N') {
      displayResultWithGoBack("Je hebt Airpods 2.");
    } else if (product === 'MWP2') {
      displayResultWithGoBack("Je hebt Airpods Pro.");
    } else if (product === 'MME7') {
      displayResultWithGoBack("Je hebt Airpods 3.");
    } else if (product === 'None') {
      document.getElementById('popup').innerHTML = `
    <p>Kijk naar de laatste twee cijfers van het 5-cijferige modelnummer AXXXX op de gravure van je Airpods. Mogelijk hebt u een vergrootglas nodig.</p>
    <button onclick="determineAirpods('31')">31 of 32</button>
    <button onclick="determineAirpods('83')">83 of 84</button>
    <button onclick="determineAirpods('64')">64 of 65</button>
    <button onclick="chooseProduct()">Ga terug</button>
  `;
    }
  }

  function displayResultWithGoBack(result) {
    document.getElementById('popup').innerHTML = `
  <p>${result}</p>
  <button onclick="chooseProduct()">Begin opnieuw</button>
`;
  }

  function determineAirpods(model) {
    if (model === '31') {
      displayResultWithGoBack("Je hebt Airpods 2.");
    } else if (model === '83') {
      displayResultWithGoBack("Je hebt Airpods Pro.");
    } else if (model === '64') {
      displayResultWithGoBack("Je hebt Airpods 3.");
    } else if (model === 'None') {
      displayResultWithGoBack("Je hebt Airpods Gen 1, die zijn helaas niet beschikbaar.");
    }
  }

  function goBack() {
    hidePopup();
  }