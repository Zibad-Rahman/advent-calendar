document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.calendar-box');
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const closeButton = document.querySelector('.close-button');
    const popupMedia = document.getElementById('popup-media');
    const popupQuote = document.getElementById('popup-quote');
    const popupAudio = document.getElementById('popup-audio');

    // Define data for each day
    const dayData = {
        1: {
            image: './images/1.jpg',
            quote: 'You look beautiful today (had to start w the classic)',
            audio: './audio/1.mp3',
            file: './documents/Day 1.pdf'
        },
        2: {
            image: './images/15.jpeg',
            quote: "You're amazing in how you can be both a silly little goofball and one of the smartest people I know",
            audio: './audio/2.mp3'
        },
        3: {
            image: './images/3.jpg',
            quote: 'You strong. You loyal. I appreciate you.',
            audio: './audio/3.mp3'
        },
        4: {
            image: './images/4.jpg',
            quote: 'Hearing you moan when I trace the beauty that is your body with kisses and feeling you quiver on my tongue when I taste you almost makes up for the fact that I can\'t watch myself drip out of you.',
            audio: './audio/4.mp3',
            file: './documents/Day 4.pdf'
        },
        5: {
            image: './images/5.jpg',
            quote: 'Miss girl. The fashion sense? SLAYING. The makeup? GIVING YASSQUEEN. The vibe? *moan noises*',
            audio: './audio/5.mp3'
        },
        6: {
            image: './images/6.jpg',
            quote: "You're one of the most badass people I know like seriously who else can party all night, ride a mans face into high heaven AND go run a whole shift at work after??",
            audio: './audio/6.mp3'
        },
        7: {
            image: './images/13.jpg',
            quote: 'E G G',
            audio: './audio/7.mp3'
        },
        8: {
            image: './images/8.jpg',
            quote: 'You make me wanna kill myself/others slightly less sometimes or whatever bro',
            audio: './audio/8.mp3',
            file: './documents/Day 8.pdf'
        },
        9: {
            image: './images/9.jpg',
            quote: 'All these drugs out here yet you\'re still my favourite one',
            audio: './audio/9.mp3'
        },
        10: {
            image: './images/10.jpg',
            quote: 'You\'re like a rose. Sweet, beautiful and loving but also with a thorny and spooky exterior that you gotta be cautious of',
            audio: './audio/10.mp3',
            file: './documents/Day 10.pdf'
        },
        11: {
            image: './images/11.jpg',
            quote: 'you\'re easily conditionable (not me you *gun emoji*)',
            audio: './audio/11.mp3'
        },
        12: {
            image: './images/12.jpg',
            quote: 'I love how you are everything I could ask for and more. A friend, homie, partner, and goofball. You make me want to be better every day and make all the bad thoughts and stresses go away. When you melt into me, time stops. I hope this calendar project made you as happy as you make me every day princesa. Para todo o sempre',
            audio: './audio/12.mp3',
        }
    };

    // Add event listeners to each box
    boxes.forEach((box) => {
        const day = box.dataset.day;
        const opened = localStorage.getItem(`day${day}Opened`);

        // Check if the box has been opened
        if (opened) {
            box.classList.add('opened');
            box.style.backgroundImage = `url(${dayData[day].image})`;
        }

        // Add click event listener
        box.addEventListener('click', () => {
            openPopup(day);
        });
    });

    // Close popup event listener
    closeButton.addEventListener('click', closePopup);

    // Function to open the popup with the correct day's content
    function openPopup(day) {
        if (!dayData[day]) return;

        popup.classList.remove('hidden');
        popup.classList.add('visible');

        // Set the quote
        popupQuote.textContent = dayData[day].quote;

        // Set the audio
        popupAudio.src = dayData[day].audio;
        popupAudio.play();

        // Set the media (image, video, or document)
        popupMedia.innerHTML = ''; // Clear previous content

        if (dayData[day].image) {
            const img = document.createElement('img');
            img.src = dayData[day].image;
            img.style.width = '100%';
            popupMedia.appendChild(img);
        }

        if (dayData[day].file) {
            const link = document.createElement('a');
            link.href = dayData[day].file;
            link.textContent = 'View Document';
            link.target = '_blank';
            link.style.display = 'block';
            link.style.marginTop = '10px';
            popupMedia.appendChild(link);
        }

        localStorage.setItem(`day${day}Opened`, true);
        document.querySelector(`[data-day="${day}"]`).classList.add('opened');
    }

    function closePopup() {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
        popupAudio.pause();
        popupAudio.currentTime = 0;
    }
});
