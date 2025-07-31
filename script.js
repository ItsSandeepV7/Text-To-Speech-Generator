
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // Clear old options

    voices.forEach((voice, i) => {
        const option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceSelect.appendChild(option);
    });

    // Set default voice
    speech.voice = voices[0];
};

// Update voice when user selects a different one
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});