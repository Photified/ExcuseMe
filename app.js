// Categorized Excuses (200 Bulletproof Excuses)
const categorizedExcuses = {
    work: [
        "I got completely slammed with a last-minute project at work.",
        "I have to prep for a massive meeting tomorrow morning.",
        "I'm covering some tasks for a coworker who had an emergency.",
        "I've been staring at a screen for 10 hours and my brain is absolutely fried.",
        "My boss just dropped something on my desk that needs to be done by tonight.",
        "I have to be up at 5 AM tomorrow for work.",
        "I'm so behind on emails, I really need tonight to catch up.",
        "I agreed to take an early shift tomorrow and need to get to bed.",
        "I'm dealing with a work crisis that I have to monitor from my laptop.",
        "I have a continuing education module I completely forgot is due at midnight.",
        "My company's VPN went down and I'm stuck waiting for IT to fix it.",
        "I got pulled into a late sync with my manager.",
        "I have to cover a shift for someone who called out sick.",
        "I'm scrambling to finish a presentation for a client tomorrow.",
        "I am months behind on my expense reports and have to do them tonight.",
        "I spent all day training a new hire and my brain is mush.",
        "I lost track of time trying to fix a bug in my code.",
        "I have mandatory compliance training that expires at midnight.",
        "I'm covering the inbox for a coworker on PTO and it's a disaster.",
        "We are closing the books for the month and I can't log off yet."
    ],
    illness: [
        "I feel a terrible migraine coming on and need to lie down in the dark.",
        "My stomach has been acting up all day, it's best I stay close to home.",
        "I feel a cold coming on and really don't want to get anyone else sick.",
        "I tweaked my lower back earlier and it's seizing up on me.",
        "I woke up with a really scratchy throat and just want to rest it.",
        "I've had a dull headache all afternoon that just won't quit.",
        "I ate something weird for lunch and am not feeling great.",
        "I think I'm coming down with whatever bug is going around the office.",
        "My allergies are absolutely kicking my ass today.",
        "I had a minor dental emergency and my mouth is killing me.",
        "I slept completely wrong and my neck is totally seized up.",
        "I have a lot of sinus pressure and just need to take some medicine and sleep.",
        "I feel incredibly nauseous and don't want to risk leaving the house.",
        "My stomach is doing backflips right now.",
        "I have a mild fever and really need to sweat it out in bed.",
        "I'm having a terrible flare-up of my chronic pain today.",
        "My eyes are burning from looking at screens all day, I need a dark room.",
        "I'm feeling really run down and think I need to just lay low.",
        "I'm just getting over a cold and don't want to push it.",
        "I have an awful tension headache right at the base of my skull.",
        "I have to take some medication that makes me really drowsy.",
        "I've got a brutal blister on my heel and can barely walk.",
        "I pulled a muscle at the gym and can't move properly.",
        "I got a weird allergic reaction from a new laundry detergent."
    ],
    exhaustion: [
        "I am running on zero sleep today, I wouldn't be very good company.",
        "This week has completely wiped me out, I just need to crash.",
        "I'm feeling incredibly burned out and just need a quiet night in.",
        "My social battery is completely dead today, I'm sorry.",
        "I've been running errands all day and I am physically exhausted.",
        "I honestly just hit a wall and can't keep my eyes open.",
        "I just got home and taking off my shoes was the final event of my day.",
        "I have been going non-stop since Monday, I desperately need a rest day.",
        "I'm not in a great headspace today and just need some alone time.",
        "I'm so drained, if I come out I'm just going to be yawning the whole time.",
        "I am completely touched out today and need a hermit night.",
        "I literally haven't had a minute to sit down since Monday.",
        "I'm running on absolute fumes right now.",
        "I desperately need an early bedtime tonight.",
        "I hit a massive wall at 4 PM and never recovered.",
        "I am too drained to be good company right now.",
        "I am doing absolutely nothing tonight and my body is demanding it.",
        "I need a night to just stare at the ceiling and decompress.",
        "I'm feeling really overwhelmed with life stuff and need to shut down.",
        "My anxiety is kind of spiking tonight, I think I need to stay in.",
        "I just got out of the shower and have zero energy to get ready again.",
        "I ate way too much at dinner and am in a food coma.",
        "I am physically incapable of putting on hard pants right now.",
        "I'm currently wrapped in a heating pad and refuse to leave it."
    ],
    home: [
        "I've been dealing with a plumbing issue all afternoon.",
        "I'm waiting on an important delivery that requires a signature.",
        "My car is making a strange noise and I don't want to risk driving it right now.",
        "I just realized my car battery is dead.",
        "I got locked out of my apartment and am waiting for the landlord.",
        "My fridge is acting up and I'm trying to save my groceries.",
        "I have a contractor coming over early tomorrow and need to prep the house.",
        "I completely forgot I scheduled the cable guy to come during this window.",
        "I stepped in a massive puddle and my only good pair of shoes is soaked.",
        "I dropped my phone and cracked the screen, I'm trying to back it up before it dies.",
        "I'm waiting for the HVAC guy, my AC/heat is acting up.",
        "I am deep-cleaning out my fridge before trash day.",
        "I have a massive pile of meal prep that I have to get through tonight.",
        "I'm stuck on the phone trying to sort out a massive billing error.",
        "My power keeps flickering and I don't want to leave my electronics plugged in.",
        "I am in the middle of deep cleaning my bathroom and smell like bleach.",
        "I have to pack for a trip and haven't even started.",
        "I'm trying to assemble some IKEA furniture and it's taking hours.",
        "I am buried under a mountain of paperwork I need to sort.",
        "My Wi-Fi keeps dropping and I have to troubleshoot it with my ISP.",
        "I accidentally burned my dinner and now I have to clean the whole kitchen.",
        "I got a weird fraud alert on my card and I'm sorting it out with the bank.",
        "I'm trying to fix a leaky sink before it ruins the floor.",
        "I lost my keys and am currently tearing my apartment apart.",
        "I am doing a massive deep clean of my apartment and am covered in bleach."
    ],
    pets: [
        "My dog is acting really lethargic and I don't want to leave him alone.",
        "I had a sudden family thing come up that I need to help out with.",
        "My pet threw up everywhere right as I was leaving, I have to clean this up.",
        "I promised my parents I'd help them with some tech issues tonight.",
        "I have to go pick up a family member from the airport last minute.",
        "My neighbor had an emergency and asked me to watch their kids for an hour.",
        "My dog has an upset stomach and keeps needing to go out.",
        "I got roped into helping a friend move a couch.",
        "I promised my sibling I'd help them prep for a job interview.",
        "My cat somehow got out and I'm currently walking the neighborhood looking for her.",
        "My dog ate something weird and has terrible diarrhea.",
        "I have to go over and help my mom figure out her new phone.",
        "I got roped into babysitting my niece at the absolute last minute.",
        "My partner is sick in bed and I need to stay and take care of them.",
        "It's time for my pet's medication and they are fighting me on it.",
        "I have to take my cat to the emergency vet, she's acting really strange.",
        "I'm dealing with some unexpected family drama on the phone.",
        "I have to help my brother move a refrigerator.",
        "My parents dropped by unannounced and I can't just leave.",
        "My dog is super anxious tonight for some reason and I can't leave him.",
        "I'm currently trapped beneath a sleeping pet and it is illegal to move."
    ],
    flakes: [
        "I completely double-booked myself, I am so sorry.",
        "I totally lost track of time and I'm still in my work clothes.",
        "I accidentally took a PM painkiller instead of the regular one and I'm passing out.",
        "I honestly just forgot we had plans until right now, I'm so sorry.",
        "I thought our plans were for tomorrow! I'm already out of town.",
        "I over-committed this weekend and I'm paying the price.",
        "I left my wallet at the office and can't go anywhere.",
        "I completely messed up my budget this week and need to just stay home.",
        "I threw my only clean outfit in the wash and it won't be dry in time.",
        "I fell asleep on the couch and just woke up, I completely missed the window.",
        "I completely blanked on this, I am so sorry.",
        "I thought we said next week! I am so embarrassed.",
        "I accidentally double-booked us with a birthday dinner for a friend.",
        "I laid down for a 'quick nap' and literally just woke up.",
        "I am still at the gym and haven't even showered yet.",
        "I completely forgot I had a prior commitment tonight.",
        "I messed up my calendar alerts and am totally unprepared.",
        "I totally dropped the ball on planning my week, I can't make it.",
        "I lost track of what day it is, I thought today was Thursday.",
        "I forgot I promised my roommate I'd help them with something tonight."
    ],
    vague: [
        "Something urgent just came up that I need to handle.",
        "I'm dealing with a personal matter tonight.",
        "Tonight isn't going to work for me after all, I'm sorry.",
        "I'm tied up with some unexpected errands.",
        "I'm not going to be able to make it tonight, catch up soon?",
        "I've got a lot on my plate tonight and won't be able to swing it.",
        "I'm stuck at home dealing with some chores I put off all week.",
        "I really need tonight to get my life organized for the week.",
        "I have a massive pile of laundry that isn't going to fold itself.",
        "I'm meal-prepping for the week so I don't eat takeout for 5 days straight.",
        "I'm just not feeling up to going out tonight.",
        "I'm going to pass this time, but let's catch up soon.",
        "I really need to just stay in tonight.",
        "I'm going to have to take a raincheck on this one.",
        "I have some personal stuff I need to take care of this evening.",
        "I'm just laying low tonight.",
        "I'm going to stay home tonight, hope you have fun!",
        "I can't make it work with my schedule tonight.",
        "It's just not going to happen tonight, unfortunately.",
        "I'm tying up some loose ends at home and won't be able to make it."
    ],
    transit: [
        "Traffic is absolutely gridlocked, I'd be an hour late if I left now.",
        "The trains are massively delayed, I think I'm just going to cut my losses and stay home.",
        "I can't find parking anywhere near my place, if I leave I'll lose my spot.",
        "I'm still waiting for my laundry to finish at the laundromat.",
        "I'm stuck on a phone call with my insurance company.",
        "I'm trapped on a customer service call trying to get a refund.",
        "I just realized my driver's license is expired, I can't go to the bar.",
        "I'm locked into a conversation with my chatty landlord.",
        "I'm trying to jumpstart my neighbor's car.",
        "My bus literally never showed up and the next one isn't for an hour.",
        "I'm stuck behind a major accident on the highway.",
        "Uber surge pricing is insane right now, I can't justify paying $60 to get there.",
        "My car is blocked in by a moving truck.",
        "I came out to my car and have a completely flat tire.",
        "I'm stuck on a train with severe signal delays.",
        "I missed my connection and it's going to take me forever to get there.",
        "There are road closures everywhere for construction, I can't get through.",
        "I drove around for 30 minutes and gave up looking for parking.",
        "Public transit is completely down in my area right now.",
        "I have to wake up early to beat the traffic for a road trip."
    ]
};

// --- NEW BUTTON LOGIC ---
let currentCategory = 'any';
const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove the active styling from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active styling to the clicked button
        btn.classList.add('active');
        // Update the current category state
        currentCategory = btn.getAttribute('data-category');
    });
});

// Cooldown Logic
let cooldownQueue = [];
const COOLDOWN_LIMIT = 10;

document.getElementById('excuse-btn').addEventListener('click', () => {
    let availableExcuses = [];

    if (currentCategory === 'any') {
        Object.values(categorizedExcuses).forEach(arr => availableExcuses.push(...arr));
    } else {
        availableExcuses = categorizedExcuses[currentCategory] || [];
    }

    let validExcuses = availableExcuses.filter(excuse => !cooldownQueue.includes(excuse));

    if (validExcuses.length === 0) {
        validExcuses = availableExcuses; 
    }

    const randomIndex = Math.floor(Math.random() * validExcuses.length);
    const selectedExcuse = validExcuses[randomIndex];

    cooldownQueue.push(selectedExcuse);
    
    if (cooldownQueue.length > COOLDOWN_LIMIT) {
        cooldownQueue.shift(); 
    }

    document.getElementById('excuse-display').innerText = selectedExcuse;
});

// Settings & Modal Logic
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const darkModeToggle = document.getElementById('dark-mode-toggle');

settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
closeSettings.addEventListener('click', () => settingsModal.classList.add('hidden'));

if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// PWA Install Logic
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.classList.remove('hidden'); 
    console.log("Install prompt successfully fired and caught!"); 
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installBtn.classList.add('hidden');
        }
        deferredPrompt = null;
    }
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}