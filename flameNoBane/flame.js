const quotesList = {
    quote1: "You bring everyone so much joy when you leave the room.",
    quote2: "I'd agree with you, but then we'd both be wrong.",
    quote3: "You're like a cloud. When you disappear, it's a beautiful day.",
    quote4: "I would unplug your life support to charge my phone.",
    quote5: "You have the right to remain silent because whatever you say will probably be stupid anyway.",
    quote6: "You're not stupid; you just have bad luck thinking.",
    quote7: "If I wanted to hear from an idiot, I'd watch reality TV.",
    quote8: "You're like a software update. Whenever I see you, I think, 'Not now.'",
    quote9: "You're proof that even the worst people can be useful as bad examples.",
    quote10: "I'd explain it to you, but I left my crayons at home.",
    quote11: "If I wanted to hear from a fool, I’d just listen to my inner monologue.",
    quote12: "You're the reason we have middle fingers.",
    quote13: "If ignorance is bliss, you must be the happiest person on the planet.",
    quote14: "You're the human equivalent of a participation trophy.",
};

const imgList = [
    "image (1).png",
    "image (2).png",
    "image (3).png",
    "image (4).png",
    "image (5).png",
    "image (6).png",
    "image (7).png",
    "image (8).png",
    "image (9).png",
    "image (10).png",
    "image (11).png",
    "image (12).png",
    "image (13).png",
    "image (14).png",
    "image (15).png",
    "image (16).png",
    "image (17).png",
    "image (18).png",
    "image (19).png",
    "image (20).png",
    "image (21).png",
    "image (22).png",
    "image (23).png",
    "image (24).png",
    "image (25).png",
    "image (26).png",
    "image (27).png",
    "image (28).png",
    "image (29).png",
    "image (30).png",
    "image (31).png",
    "image (32).png",
    "image (33).png",
    "image (34).png",
    "image (35).png",
    "image (36).png",
    "image (37).png",
    "image (38).png",
    "image (39).png",
    "image (40).png",
    "image (41).png",
    "image (42).png",
    "image (43).png",
    "image (44).png",
    "image (45).png",
    "image (46).png",
    "image (47).png",
    "image (48).png",
    "image (49).png",
    "image (50).png",
    "image (51).png",
    "image (52).png",
    "image (53).png",
    "image (54).png",
    "image (55).png",
    "image (56).png",
    "image (57).png",
];

const img = document.querySelector("#quoteImage");
const quoteDiv = document.querySelector("#quote");
const button = document.querySelector("button");
const input = document.querySelector("#copyCheckbox");

button.addEventListener("click", randomQuote);

function randomQuote() {
    const randomKey = getRandomKey(quotesList);
    displayQuote(randomKey);
    copyToClipboard(randomKey);
    displayImage();
}

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

function displayQuote(key) {
    quoteDiv.innerHTML = quotesList[key];
}

function copyToClipboard(key) {
    if (input.checked) {
        navigator.clipboard.writeText(quotesList[key]).then(() => {
            //alert("Copied the text: " + quotesList[key]);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}

function displayImage() {
    // Ensure the random index is within the bounds of the imgList array
    const randomIndex = Math.floor(Math.random() * 57) + 1;
    ;
    img.src = `src/img/image (${randomIndex}).png`;

    img.onerror = () => {
        console.error('Failed to load image');
    };
}


// Display a random quote when the page loads
randomQuote();
