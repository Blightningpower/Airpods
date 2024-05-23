let initialButton = document.getElementById('initialButton');
let popup = document.getElementById('popup');
let progressBar = document.getElementById('progressBar');
let totalSteps = 5; // Total number of steps in the process

function updateProgressBar(currentStep) {
  let progress = (currentStep / totalSteps) * 100;
  progressBar.value = progress;
}

function showPopup() {
  popup.style.display = 'flex';
  initialButton.style.display = 'none';
}

function hidePopup() {
  popup.style.display = 'none';
  initialButton.style.display = 'flex';
}

function closeButton() {
  hidePopup();
  initialButton.addEventListener('click', chooseProduct);
}

function goBack() {
  hidePopup();
}

function chooseProduct(product) {
  let popupContent = `
  <progress id="progressBar" value="0" max="100"></progress>
  <div class="alignButtons">
    <button class="goBackButton" onclick="goBack()">Ga terug</button>
    <button class="close-button" onclick="closeButton()">X</button>
  </div>
  <div class="elementscontainer">
    <p class="firstText questionText">Kies product:</p>
    <div class="buttoncontainer">
      <div class="backgroundImageDivAirpods">
        <button onclick="chooseProduct('Airpods')">Airpods</button>
      </div>
      <div class="backgroundImageDivCase">
        <button onclick="chooseProduct('Case')">Case</button>
      </div>
    </div>
    <p>Kies het juiste product en leer hoe je de generatie van je Airpods bepaalt.</p>
  </div>
  `;

  if (product === 'Airpods') {
    popupContent = `
    <progress id="progressBar" value="20" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="chooseProduct()">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <p class="firstText questionText">Zijn je Airpods verbonden met je smartphone?</p>
      <div class="backgroundImageDivConnected">
        <div class="buttoncontainer">
          <button onclick="connectedToPhone('Ja')">Ja</button>
          <button onclick="connectedToPhone('Nee')">Nee</button>
        </div>
      </div>
      <span>Ga naar instellingen > Bluetooth op je apparaat. Als je je Airpods ziet onder 'Mijn apparaten', kun je op Verbinden drukken.</span>
    </div>
    `;
  } else if (product === 'Case') {
    popupContent = `
    <progress id="progressBar" value="20" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="chooseProduct()">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <ul>
        <li>Stap 1: Kijk voor het modelnummer aan de binnenkant van het deksel van de case</li>
        <li>Stap 2: Kijk naar de eerste vier tekens van het modelnummer aan de binnenkant van het deksel van de case</li>
      </ul>
      <p questionText>Wat is het modelnummer?</p>
      <div class="buttoncontainer">
        <button onclick="determineCase('MV7N')">MV7N</button>
        <button onclick="determineCase('MWP2')">MWP2</button>
        <button onclick="determineCase('MME7')">MME7</button>
      </div>
    </div>
    `;
  }
  popup.innerHTML = popupContent;
  updateProgressBar(1);
}

function connectedToPhone(answer) {
  let popupContent = '';
  if (answer === 'Ja') {
    popupContent = `
    <progress id="progressBar" value="40" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="chooseProduct('Airpods')">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <ul>
        <li>Stap 1: Ga naar Instellingen > Bluetooth</li>
        <li>Stap 2: Klik op het pictogram (i) naast de Airpods</li>
        <li>Stap 3: Kijk naar het modelnummer van je Airpods</li>
      </ul>
      <p class="questionText">Wat is het modelnummer?</p>
      <div class="buttoncontainer">
        <button onclick="determineProduct('MV7N')">A2032 of A2031</button>
        <button onclick="determineProduct('MWP2')">A2084 of A2083</button>
        <button onclick="determineProduct('MME7')">A2565 of A2564</button>
        <button onclick="determineProduct('None')">Geen van deze</button>
      </div>
    </div>
    `;
  } else if (answer === 'Nee') {
    popupContent = `
    <progress id="progressBar" value="40" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="chooseProduct('Airpods')">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <p class="firstText questionText">Heb je de originele verpakking nog?</p>
      <div class="backgroundImageDivOriginalCase">
        <div class="buttoncontainer">
          <button onclick="haveOriginalPackaging('Ja')">Ja</button>
          <button onclick="haveOriginalPackaging('Nee')">Nee</button>
        </div>
      </div>
    </div>
    `;
  }
  popup.innerHTML = popupContent;
  updateProgressBar(2);
}

function haveOriginalPackaging(answer) {
  let popupContent = '';
  if (answer === 'Ja') {
    popupContent = `
    <progress id="progressBar" value="60" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="connectedToPhone('Nee')">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <p class="firstText">U vindt het productnummer op de originele verpakking. Kijk naar de eerste vier tekens.</p>
      <p class="questionText">Wat is het productnummer?</p>
      <div class="buttoncontainer">
        <button onclick="determineProduct('MV7N')">MV7N</button>
        <button onclick="determineProduct('MWP2')">MWP2</button>
        <button onclick="determineProduct('MME7')">MME7</button>
        <button onclick="determineProduct('None')">Geen van deze</button>
      </div>
    </div>
    `;
  } else if (answer === 'Nee') {
    popupContent = `
    <progress id="progressBar" value="60" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="connectedToPhone('Nee')">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <p class="firstText questionText">Kijk naar de laatste twee cijfers van het 5-cijferige modelnummer AXXXX op de gravure van je Airpods. Mogelijk hebt u een vergrootglas nodig.</p>
      <img src="img/airpod_with_code04_lastTwoDigits.webp" alt="airpod_with_code04_lastTwoDigits.webp">
      <div class="buttoncontainer">
        <button onclick="determineAirpods('31')">31 of 32</button>
        <button onclick="determineAirpods('83')">83 of 84</button>
        <button onclick="determineAirpods('64')">64 of 65</button>
      </div>
    </div>
    `;
  }
  popup.innerHTML = popupContent;
  updateProgressBar(3);
}

function determineCase(model) {
  if (model === 'MV7N') {
    displayResultWithGoBack("Je hebt Airpods 2.");
  } else if (model === 'MWP2') {
    displayResultWithGoBack("Je hebt Airpods Pro.");
  } else if (model === 'MME7') {
    displayResultWithGoBack("Je hebt Airpods 3.");
  } else if (model === 'None') {
    popup.innerHTML = `
    <progress id="progressBar" value="80" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="chooseProduct()">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <p class="firstText questionText">Kijk naar de laatste twee cijfers van het 5-cijferige modelnummer AXXXX op de gravure van je Airpods. Mogelijk hebt u een vergrootglas nodig.</p>
      <img src="img/airpod_with_code04_lastTwoDigits.webp" alt="airpod_with_code04_lastTwoDigits.webp">
      <div class="buttoncontainer">
        <button onclick="determineAirpods('31')">31 of 32</button>
        <button onclick="determineAirpods('83')">83 of 84</button>
        <button onclick="determineAirpods('64')">64 of 65</button>
      </div>
    </div>
    `;
  }
  updateProgressBar(4);
}

function determineProduct(product) {
  if (product === 'MV7N') {
    displayResultWithGoBack("Je hebt Airpods 2.");
  } else if (product === 'MWP2') {
    displayResultWithGoBack("Je hebt Airpods Pro.");
  } else if (product === 'MME7') {
    displayResultWithGoBack("Je hebt Airpods 3.");
  } else if (product === 'None') {
    popup.innerHTML = `
    <progress id="progressBar" value="80" max="100"></progress>
    <div class="alignButtons">
      <button class="goBackButton" onclick="chooseProduct()">Ga terug</button>
      <button class="close-button" onclick="closeButton()">X</button>
    </div>
    <div class="elementscontainer">
      <p class="firstText questionText">Kijk naar de laatste twee cijfers van het 5-cijferige modelnummer AXXXX op de gravure van je Airpods. Mogelijk hebt u een vergrootglas nodig.</p>
      <img src="img/airpod_with_code04_lastTwoDigits.webp" alt="airpod_with_code04_lastTwoDigits.webp">
      <div class="buttoncontainer">
        <button onclick="determineAirpods('31')">31 of 32</button>
        <button onclick="determineAirpods('83')">83 of 84</button>
        <button onclick="determineAirpods('64')">64 of 65</button>
      </div>
    </div>
    `;
  }
  updateProgressBar(4);
}

function displayResultWithGoBack(result) {
  popup.innerHTML = `
  <progress id="progressBar" value="100" max="100"></progress>
  <div class="result">
    <button class="close-button result-close-button" onclick="closeButton()">X</button>
    <div class="elementscontainer">
      <p>${result}</p>
      <button class="startOverButton" onclick="chooseProduct()">Begin opnieuw</button>
    </div>
  </div>
  `;
  updateProgressBar(5);
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