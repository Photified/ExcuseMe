// Categorized Excuses (500 Bulletproof Excuses)
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
        "We are closing the books for the month and I can't log off yet.",
        "I'm locked out of my work account and have to wait on hold with IT.",
        "My manager asked me to stay late to finalize a massive proposal.",
        "I have a massive performance review tomorrow and need to prep my notes.",
        "I'm leading a training session tomorrow and need to run through the material.",
        "I accidentally deleted a crucial file and I'm frantically trying to restore it.",
        "The server crashed and it's an all-hands-on-deck situation.",
        "I've got a backlog of tickets that I promised to clear out by tomorrow.",
        "I'm stuck on a client call that was supposed to end an hour ago.",
        "I have to interview candidates early tomorrow morning.",
        "My boss scheduled a 1-on-1 for 8 AM and I need to be sharp.",
        "I'm onboarding a remote team in a different time zone right now.",
        "I got assigned to a sudden task force for an escalated client issue.",
        "I have to rewrite a report that my director just kicked back to me.",
        "I'm doing a massive data migration that needs to happen off-hours.",
        "I forgot I volunteered to audit our quarterly metrics tonight.",
        "I have a virtual networking event for my industry that I can't skip.",
        "I'm updating my portfolio/resume for an internal promotion tomorrow.",
        "I have to review 50 pages of legal compliance documents by tomorrow.",
        "I'm stuck waiting for a sign-off from a partner in another country.",
        "A client just moved a massive deadline up by three days.",
        "I have to configure a new software tool for the team by morning.",
        "I am taking a certification exam online tonight.",
        "I'm mediating a conflict between two of my team members remotely.",
        "I have to transcribe meeting notes from a 3-hour strategy session.",
        "I accidentally scheduled an overseas call for 9 PM my time.",
        "I'm running performance reports that take hours to generate.",
        "I have to help my boss format a massive spreadsheet.",
        "I got drafted to proofread the company newsletter going out tomorrow.",
        "I'm dealing with a vendor who messed up our primary order.",
        "I have to test a new product feature before it launches at midnight.",
        "I am organizing the digital assets for a marketing campaign launching tomorrow.",
        "I'm stuck in a loop of endless email replies with a confused client.",
        "I have to write self-evaluations for my team tonight.",
        "I'm analyzing user data from last quarter and lost track of time.",
        "I have to create an emergency pitch deck for a new prospect.",
        "I'm troubleshooting a critical error on our company website.",
        "I promised to review a colleague's code before they push it live.",
        "I'm updating the company database and it requires my full attention.",
        "I have to submit payroll tonight or nobody gets paid.",
        "I'm caught up in a post-mortem meeting for a failed project.",
        "I have to do inventory reconciliation by the end of the day.",
        "I am desperately trying to hit my sales quota before the month ends."
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
        "I got a weird allergic reaction from a new laundry detergent.",
        "I threw out my shoulder trying to reach for something on a top shelf.",
        "My sciatica is flaring up and sitting down is agonizing.",
        "I think I might have a mild case of food poisoning.",
        "I'm dealing with a massive toothache and can't focus on anything.",
        "I accidentally cut my finger pretty badly cooking and it won't stop bleeding.",
        "I have a terrible earache and loud noises are killing me.",
        "I'm feeling super dizzy and lightheaded right now.",
        "My asthma is acting up because of the weather.",
        "I got a sudden, intense leg cramp that just won't release.",
        "I think I overdid it with the caffeine and have terrible jitters/anxiety.",
        "I slammed my finger in a door and it is throbbing.",
        "I'm getting over a stomach bug and am still on the BRAT diet.",
        "I have a really bad heat rash/sunburn and wearing clothes hurts.",
        "I rolled my ankle stepping off a curb and need to ice it.",
        "My contact tore in my eye and it's completely inflamed.",
        "I woke up with a stye and my eye is swollen shut.",
        "I have a weird rash on my arm and I don't want to expose anyone to it.",
        "I'm dealing with an awful bout of acid reflux.",
        "I feel like I have a fever breaking, I keep getting the chills.",
        "I jammed my toe on the coffee table and I think it might be broken.",
        "I have a killer cramp in my side that hurts when I breathe deep.",
        "I think I need a new glasses prescription, I have an awful ocular migraine.",
        "My throat is so sore I literally can't speak above a whisper.",
        "I'm recovering from a minor outpatient procedure and need to rest.",
        "I got a terrible paper cut right in the crease of my finger.",
        "I have massive brain fog today and can barely string a sentence together.",
        "I'm having a really bad arthritis flare-up in my hands.",
        "I bit my tongue really hard while eating and it's swelling up.",
        "I got a blast of cold air and my chest is really congested.",
        "I am dealing with a super uncomfortable UTI.",
        "I have a weird twitch in my eye that is driving me insane.",
        "I'm having some weird heart palpitations and just want to lay down.",
        "I burnt the roof of my mouth on pizza and it's all blistered.",
        "I have an ingrown toenail that is making wearing shoes impossible.",
        "I got bit by a spider/bug and the swelling is pretty intense.",
        "I feel completely dehydrated and dizzy.",
        "I have severe hiccups that have lasted for two hours and my chest hurts.",
        "I'm experiencing some pretty intense vertigo."
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
        "I'm currently wrapped in a heating pad and refuse to leave it.",
        "I've been masking all day and I just need to be a goblin for the night.",
        "My brain is completely full, I can't process any more conversation.",
        "I've hit sensory overload and need a completely silent room.",
        "I'm at that point of tired where everything makes me want to cry.",
        "I just need to do a hard reset on my brain tonight.",
        "I'm emotionally exhausted from some personal stuff and need to recharge.",
        "I have 'couch-lock' and couldn't move if I tried.",
        "I am tapped out. My capacity for human interaction is at 0%.",
        "I'm so tired my bones actually ache.",
        "I need a night of mindless television to stop my brain from spinning.",
        "I've been playing catch-up all week and I'm totally spent.",
        "I am currently in my pajamas and taking them off feels like a marathon.",
        "I feel like a deflated balloon. I just can't do it tonight.",
        "My introversion is screaming at me to stay home.",
        "I'm so sleep deprived I'm starting to hallucinate shadows.",
        "I just need one night where I don't have to talk to anyone.",
        "I've been dealing with people all day and I am peopled out.",
        "I have a case of the 'I don't wannas' that I can't shake.",
        "I'm in a rut today and just want to hide under the covers.",
        "I'm suffering from decision fatigue and can't figure out what to wear.",
        "My physical energy is fine, but my mental energy is completely depleted.",
        "I'm operating at 10% capacity right now.",
        "I need to be alone with my thoughts for a few hours.",
        "I'm so exhausted I could sleep for a week.",
        "I feel like I'm moving through molasses today.",
        "I've reached my maximum threshold for stimulation today.",
        "I am too tired to even order takeout, let alone go out.",
        "I'm just going to take a long, hot bath and pass out.",
        "I need to lie flat on my floor in silence for an hour.",
        "I've been running on adrenaline all week and the crash just hit me.",
        "I'm feeling very fragile today and need to protect my peace.",
        "I am completely overstimulated and need a dark, quiet cave.",
        "I just want to drink tea and read a book in silence.",
        "I feel a wave of sheer exhaustion washing over me.",
        "I need to hibernate for the evening.",
        "I'm too tired to be a functioning member of society tonight.",
        "My battery is blinking red and needs an immediate charge.",
        "I am going to fall asleep standing up if I leave the house."
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
        "I am doing a massive deep clean of my apartment and am covered in bleach.",
        "My smoke alarm keeps chirping and I have to go buy a weird battery for it.",
        "The washing machine overflowed and I'm mopping up water.",
        "I found mold in my bathroom and am aggressively cleaning it.",
        "My garbage disposal is jammed and the sink is backing up.",
        "I have to defrost my freezer because it's completely iced over.",
        "A circuit breaker tripped and half my house has no power.",
        "I'm trying to hang some shelves and it's turned into a nightmare.",
        "I spilled an entire glass of red wine on my rug and am frantically scrubbing.",
        "I have to submit my taxes tonight before the deadline.",
        "I'm contesting a massive parking ticket and need to compile evidence.",
        "I'm rearranging my living room and everything is in the middle of the floor.",
        "I accidentally broke a glass and am still finding shards everywhere.",
        "The hot water heater is leaking and I have to wait for a repairman.",
        "My neighbor is complaining about a leak from my apartment.",
        "I have a massive ant problem that I need to deal with immediately.",
        "I'm trying to patch a hole in the drywall before an inspection.",
        "I left the windows open and a sudden storm soaked my living room.",
        "I'm painting my bedroom and need to finish this second coat.",
        "I have to sort through three boxes of mail I've been ignoring.",
        "I am trying to fix a blown fuse in my car.",
        "I lost my wallet and am currently tearing apart my room looking for it.",
        "My vacuum cleaner exploded dust everywhere.",
        "I'm fixing a broken lock on my front door.",
        "I have to take out the trash, recycling, and compost before it gets dark.",
        "I'm reorganizing my closet and my bed is covered in clothes.",
        "I accidentally dyed all my white shirts pink and am trying to fix it.",
        "I'm trying to kill a massive spider that is holding me hostage in my room.",
        "The toilet is running non-stop and I have to fix the flapper.",
        "I'm waiting for a very important phone call from a lawyer/accountant.",
        "I have to update my car's registration online before it expires at midnight.",
        "I'm trying to install a new smart home device and it's refusing to connect.",
        "I'm repotting all my houseplants and my kitchen is covered in dirt.",
        "I dropped my keys down an elevator shaft/storm drain and am panicking.",
        "I'm dealing with a terrible draft and trying to weather-strip my windows.",
        "I have to clear out the gutters before the rain starts.",
        "My iron left a massive burn mark on my pants and I'm trying to fix it."
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
        "I'm currently trapped beneath a sleeping pet and it is illegal to move.",
        "My cat knocked over a massive plant and there is soil everywhere.",
        "My dog got skunked and I am in the middle of a tomato juice bath nightmare.",
        "I have to clip my bird's nails and it's a two-person job.",
        "My fishtank is leaking and I'm trying to save my fish.",
        "My hamster escaped its cage and I'm tearing the house apart.",
        "I'm fostering a new puppy and it needs constant supervision.",
        "My dog tore up a couch cushion and I'm cleaning up foam.",
        "My cat brought a live mouse into the house and I'm trying to catch it.",
        "I have to give my dog a bath because he rolled in something awful.",
        "My pet sitter cancelled for tomorrow so I'm scrambling to find a replacement.",
        "My iguana's heat lamp broke and I have to go find a new one.",
        "My dog is barking at nothing and refusing to come inside.",
        "I have to trim my cat's claws before she destroys my furniture.",
        "My parents are arguing and I'm playing mediator on the phone.",
        "My sibling got a flat tire and I have to go rescue them.",
        "I have to help my kid with a school project that's due tomorrow.",
        "My grandparent fell and I need to go check on them.",
        "I'm stuck at a family dinner that is running way over time.",
        "My cousin unexpectedly crashed on my couch for the night.",
        "I have to go bail my brother out of a bad date.",
        "My family is having a crisis over a group chat.",
        "I have to help my dad assemble a grill.",
        "My mom lost her password to everything and I'm resetting her life.",
        "My partner had a terrible day and I need to just be here for them.",
        "My dog limping and I'm monitoring him to see if we need the vet.",
        "My cat won't stop crying and I'm trying to figure out what's wrong.",
        "I have to attend a mandatory HOA meeting in my building.",
        "My neighbor's alarm is going off and I'm trying to contact them.",
        "I'm helping a friend practice lines for an audition via Zoom.",
        "I promised to proofread my partner's thesis tonight.",
        "My dog got into the trash and scattered it across the entire kitchen.",
        "I'm trying to get a stray cat out from under my porch.",
        "My aunt called and I haven't spoken to her in a year, I can't hang up.",
        "I'm dealing with a pet emergency, my dog ate chocolate.",
        "My parrot learned a new, awful word and I'm trying to train it out.",
        "I'm hand-feeding a sick kitten right now.",
        "I have to go pick up my partner's prescription.",
        "My sibling is having a meltdown and needs me to come over.",
        "I promised to help my neighbor fix their Wi-Fi.",
        "My family planned a surprise Zoom call for my grandma's birthday."
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
        "I forgot I promised my roommate I'd help them with something tonight.",
        "I wrote down the wrong time and I'm still two hours away.",
        "I locked my keys in my car and I'm waiting for AAA.",
        "I completely misread the invitation and thought it was at my place.",
        "I accidentally sent my only pair of contacts down the drain.",
        "I got the days mixed up, I thought today was Sunday.",
        "I procrastinated on an assignment and now I have to pull an all-nighter.",
        "I was waiting for an Uber that kept canceling and now it's too late.",
        "I completely forgot to buy a gift and can't show up empty-handed.",
        "I tried a new DIY haircut and it is a disaster, I can't be seen.",
        "I accidentally burned a hole in the shirt I was going to wear.",
        "I lost my ID and I know they card at the door.",
        "I spent my 'going out' money on a parking ticket I forgot about.",
        "I mistakenly thought this was a virtual event.",
        "I got distracted playing a video game and completely lost track of time.",
        "I accidentally took a three-hour nap instead of a 20-minute one.",
        "I forgot to charge my phone and it's dead, I can't navigate there.",
        "I completely messed up the recipe I was bringing and have to start over.",
        "I forgot my glasses at a restaurant earlier and am legally blind without them.",
        "I got hyper-focused on cleaning and now the time has completely passed.",
        "I honestly just spaced out and stared at the wall for an hour.",
        "I thought we cancelled? I must have dreamt that we did.",
        "I put the wrong address in my GPS and drove 45 minutes in the wrong direction.",
        "I forgot I put a load of laundry in and it's sitting there wet.",
        "I accidentally ate an edible I thought was regular candy and am too high.",
        "I realized my debit card expired yesterday and I have no cash.",
        "I spilled coffee down my front right as I was walking out the door.",
        "I completely forgot I am on call for work tonight.",
        "I broke my favorite heel right before leaving.",
        "I accidentally left the oven on and had to turn around.",
        "I got on the wrong train and am heading away from the city.",
        "I completely forgot I promised to give someone a ride to the airport.",
        "I forgot to pick up my dry cleaning and have literally nothing to wear.",
        "I thought you meant the other location across town.",
        "I lost a bet and have to stay in tonight.",
        "I totally flaked, I won't even try to lie, I'm so sorry.",
        "I forgot to pay my phone bill and have zero data to get a ride.",
        "I completely botched my makeup/hair and have to start over from scratch.",
        "I got sucked down a Wikipedia rabbit hole and lost two hours.",
        "I thought I could make it but I severely underestimated my commute.",
        "I honestly just forgot how to function as a human today.",
        "I accidentally gave myself a terrible self-tanner streak and am hiding."
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
        "I'm tying up some loose ends at home and won't be able to make it.",
        "I need a personal night to catch up on some things.",
        "An unexpected issue arose that needs my attention.",
        "I have some conflicting priorities that just popped up.",
        "I'm trying to clear a backlog of personal admin tasks.",
        "I've got to take a pass tonight, something came up.",
        "I'm just having an 'off' day and need to stay in.",
        "I'm needed elsewhere this evening.",
        "I've got some unavoidable things to take care of.",
        "I'm just not in a good place to be social right now.",
        "I have to address a situation at home.",
        "I'm swamped with some personal responsibilities right now.",
        "I'm taking a mental health evening.",
        "I have a prior engagement that ran incredibly late.",
        "I'm caught up in something I can't step away from.",
        "I'm dealing with an unexpected domestic issue.",
        "I've got some life maintenance to do tonight.",
        "I'm just seeking some solitude tonight.",
        "I need to put a pin in our plans for now.",
        "I'm just trying to keep my head above water today.",
        "I've got an urgent matter to attend to off-grid.",
        "I'm dealing with a minor emergency.",
        "I have to sort out a logistical nightmare tonight.",
        "I'm currently putting out fires left and right.",
        "I'm dealing with a sudden schedule shift.",
        "I have to bow out tonight, unfortunately.",
        "I'm just not up for an outing tonight.",
        "I'm trying to reset for the week ahead.",
        "I have an appointment I completely forgot to mention.",
        "I'm required to be at home this evening.",
        "I'm managing a situation right now.",
        "I've got my hands full at the moment.",
        "I'm wrapped up in a personal project.",
        "I'm addressing a time-sensitive issue.",
        "I have some pending matters to conclude.",
        "I'm just taking a timeout tonight.",
        "I'm unavailable for the rest of the evening.",
        "I have an obligation I cannot get out of.",
        "I'm currently dealing with some unforeseen circumstances.",
        "I need to pivot my plans for tonight.",
        "I'm just opting for a quiet night in.",
        "I've reached my quota for the day."
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
        "I have to wake up early to beat the traffic for a road trip.",
        "My check engine light just started flashing and I'm terrified to drive.",
        "I got pulled over for a busted taillight and it's taking forever.",
        "A parade/marathon completely blocked off my street.",
        "My car won't shift out of park.",
        "I hit a massive pothole and I think I bent my rim.",
        "I'm stuck at a railroad crossing with a freight train that isn't moving.",
        "A water main broke and flooded the intersection near my house.",
        "My GPS routed me through a weird dirt road and I'm lost.",
        "My car alarm won't turn off and I can't drive it like this.",
        "I left my car windows down and a bird pooped everywhere inside.",
        "I am almost out of gas and there isn't a station for miles.",
        "The subway car I was in broke down in the tunnel.",
        "I'm waiting for a tow truck.",
        "I got a ticket and my car was booted, I'm trying to get it removed.",
        "Someone rear-ended me at a stoplight, we're waiting for the police.",
        "My windshield wiper motor died and it just started pouring.",
        "There's a massive protest blocking the main bridge.",
        "I'm stuck in a multi-level parking garage that is at a standstill.",
        "The ferry schedule changed and I missed the last one.",
        "I got on the express train by accident and it skipped my stop.",
        "Someone spilled something gross on my seat on the bus.",
        "My rideshare driver got lost and is driving in circles.",
        "I dropped my keys down a subway grate.",
        "My bike chain broke and I have to walk it back home.",
        "I got caught in a torrential downpour and am soaked to the bone.",
        "The power went out in my parking garage and the gate won't open.",
        "I got stuck behind a garbage truck doing its route.",
        "A tree fell down and completely blocked my driveway.",
        "My car's AC broke and it's 95 degrees outside.",
        "The heat in my car broke and it's freezing.",
        "I'm stuck behind a wide-load semi truck on a two-lane road.",
        "There is a crazy police chase happening near my exit.",
        "My steering wheel locked up.",
        "I accidentally put diesel in my car instead of unleaded.",
        "My brakes feel spongy and I don't feel safe driving.",
        "I left my transit pass at home and have no cash.",
        "There is a severe weather warning and they are advising people to stay off the roads.",
        "I got splashed by a passing car and need to go home and change.",
        "My car smells like burning rubber.",
        "I'm stuck in an elevator.",
        "The drawbridge got stuck in the up position."
    ]
};

// --- BUTTON LOGIC ---
let currentCategory = 'any';
const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

// --- COOLDOWN & EXCUSE GENERATION LOGIC ---
let cooldownQueue = [];
const COOLDOWN_LIMIT = 20; 

const excuseBtn = document.getElementById('excuse-btn');
const excuseDisplay = document.getElementById('excuse-display');
const copyBtn = document.getElementById('copy-btn');

excuseBtn.addEventListener('click', () => {
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

    excuseDisplay.innerText = selectedExcuse;
    
    // Show the copy button now that there is an excuse to copy
    copyBtn.classList.remove('hidden');
    copyBtn.innerText = '📋'; // Reset icon in case it was checked before
});

// --- NEW COPY TO CLIPBOARD LOGIC ---
copyBtn.addEventListener('click', async () => {
    const textToCopy = excuseDisplay.innerText;
    try {
        await navigator.clipboard.writeText(textToCopy);
        // Visual confirmation
        copyBtn.innerText = '✅';
        // Reset back to clipboard after 2 seconds
        setTimeout(() => {
            copyBtn.innerText = '📋';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        // Optional fallback for older browsers
        copyBtn.innerText = '❌';
    }
});

// --- SETTINGS & MODAL LOGIC ---
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

// --- PWA INSTALL LOGIC ---
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

// --- REGISTER SERVICE WORKER ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}