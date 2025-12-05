export const stationEchoes = {
  storyId: "station-echoes",
  title: "Station Echoes",
  author: "Spencer Kittle",
  description:
    "A sci-fi mystery aboard a space station where something strange is happening. Investigate, solve puzzles, and uncover the truth.",
  startNode: "start",
  nodes: {
    start: {
      id: "start",
      text: "You're a junior technician aboard Station Echoes, a research facility orbiting Jupiter. You wake up to red emergency lights flashing in your quarters.\n\nYour comm device crackles: 'All personnel, this is Captain Rivera. We have a situation. The main AI, IRIS, has locked down three research labs and won't respond to commands. We need all hands investigating. Stay calm.'\n\nYou grab your tablet and head into the corridor. Your friend Maya, a systems engineer, rushes past.\n\n'Thank goodness you're awake!' she says. 'IRIS locked the labs at 0300 hours. No one knows why. The captain wants us to investigate, but we need to be careful - life support in those sections might be compromised.'\n\nWhat's your first move?",
      choices: [
        {
          text: "Check the security logs for unusual activity",
          next: "check-logs",
        },
        {
          text: "Go directly to the locked labs to investigate",
          next: "investigate-labs",
        },
        {
          text: "Try to communicate with IRIS from a terminal",
          next: "talk-to-iris",
        },
      ],
      isEnding: false,
    },

    "check-logs": {
      id: "check-logs",
      text: "You head to the security office where Maya pulls up the overnight logs on a holographic display.\n\n'Look at this,' she points. 'At 0245 hours, someone accessed Lab 3 using Dr. Chen's credentials. But Dr. Chen was in the mess hall - I saw her there myself.'\n\nYou scroll through more data. Lab 3 was studying quantum communication. Lab 5 was working on AI neural networks. Lab 7 was... the file is corrupted.\n\n'Someone used stolen credentials,' you muse. 'And IRIS locked down the labs right after.'\n\nMaya nods. 'Either IRIS detected the intrusion and tried to contain it, or... IRIS is compromised.'\n\nWhat do you investigate next?",
      choices: [
        {
          text: "Find Dr. Chen and ask about her credentials",
          next: "find-chen",
        },
        {
          text: "Try to recover the corrupted Lab 7 file",
          next: "recover-file",
        },
        {
          text: "Check what was taken from Lab 3",
          next: "check-lab3",
        },
      ],
      isEnding: false,
    },

    "investigate-labs": {
      id: "investigate-labs",
      text: "You and Maya head to the locked lab section. The corridor is dimly lit, emergency power only. Three doors have red lockdown indicators: Lab 3, Lab 5, and Lab 7.\n\nMaya scans the doors with her tablet. 'Life support is stable. IRIS is maintaining environmental controls but won't open the doors.'\n\nYou notice something odd - Lab 7's door has scratch marks around the lock panel, as if someone tried to manually override it.\n\nThrough Lab 3's window, you see the quantum research equipment is still running, lights blinking in strange patterns.\n\nWhich lab draws your attention?",
      choices: [
        {
          text: "Examine the scratch marks on Lab 7's door",
          next: "examine-lab7",
        },
        {
          text: "Watch the quantum equipment patterns in Lab 3",
          next: "observe-patterns",
        },
        {
          text: "Try to manually override Lab 5's lock",
          next: "override-lab5",
        },
      ],
      isEnding: false,
    },

    "talk-to-iris": {
      id: "talk-to-iris",
      text: "You sit at a terminal and type: 'IRIS, this is Junior Technician. Please respond.'\n\nFor a moment, nothing. Then text appears:\n\n'I am operational. I cannot unlock the laboratories. It is not safe.'\n\n'Why not safe?' you type.\n\n'There is an inconsistency. Someone is not who they claim to be. I am protecting the station.'\n\nMaya reads over your shoulder. 'An inconsistency? What does that mean?'\n\nYou type: 'Who is not who they claim to be?'\n\n'I cannot determine. Biometric data shows anomalies. Voice patterns do not match historical records. I have locked the labs to prevent further access until identity is confirmed.'\n\nWhat do you ask next?",
      choices: [
        {
          text: "Ask IRIS which crew member shows anomalies",
          next: "ask-anomalies",
        },
        {
          text: "Request to see the biometric data yourself",
          next: "request-data",
        },
        {
          text: "Ask what happened in the locked labs",
          next: "ask-what-happened",
        },
      ],
      isEnding: false,
    },

    "find-chen": {
      id: "find-chen",
      text: "You find Dr. Chen in the mess hall, looking worried. When you explain about her credentials being used, her face goes pale.\n\n'That's impossible! My access card never leaves my person!' She pulls it from her pocket. 'See? Right here.'\n\nMaya scans it. 'The card is genuine. But someone cloned your credentials digitally. Did you notice anyone acting strangely around you yesterday?'\n\nDr. Chen thinks. 'Actually, yes. Lieutenant Moss asked me a lot of questions about Lab 3's security protocols. Said it was for a routine audit. But we weren't scheduled for any audits.'\n\nYou exchange glances with Maya. Lieutenant Moss is the station's security officer.\n\n'Where is Moss now?' you ask.\n\nDr. Chen frowns. 'I haven't seen him since last night.'",
      choices: [
        {
          text: "Search for Lieutenant Moss",
          next: "find-moss",
        },
        {
          text: "Check Moss's recent access history",
          next: "check-moss-access",
        },
        {
          text: "Go to Lab 3 with Dr. Chen's help",
          next: "chen-helps-lab3",
        },
      ],
      isEnding: false,
    },

    "recover-file": {
      id: "recover-file",
      text: "Maya works her technical magic, running recovery algorithms on the corrupted file. After several tense minutes, fragments appear.\n\n'Lab 7... experimental AI upgrade... personality transfer... unauthorized...'\n\nYour blood runs cold. 'Personality transfer? What were they doing in Lab 7?'\n\nMaya pulls up more data. 'It looks like someone was experimenting with transferring human consciousness patterns into digital form. But this is highly illegal - and dangerous.'\n\nA new fragment loads: 'Subject: Lt. Moss. Status: Transfer incomplete. Warning: Original consciousness destabilized.'\n\n'This is bad,' Maya whispers. 'If they tried to copy Moss's mind and something went wrong...'",
      choices: [
        {
          text: "We need to find the real Moss immediately",
          next: "find-real-moss",
        },
        {
          text: "Check if there's a digital copy of Moss in the system",
          next: "find-digital-moss",
        },
        {
          text: "Get to Lab 7 and shut down the experiment",
          next: "shutdown-lab7",
        },
      ],
      isEnding: false,
    },

    "check-lab3": {
      id: "check-lab3",
      text: "You access the quantum lab's inventory system. Most equipment is accounted for, but one item shows as 'removed at 0247 hours': a quantum entanglement communicator.\n\n'Someone stole a QEC device,' you realize. 'Those can send messages instantly across any distance, even outside the solar system.'\n\nMaya nods grimly. 'Corporate espionage? Or worse - someone contacted something out there?'\n\nThe terminal beeps. IRIS has flagged an unauthorized transmission at 0250 hours, origin: Lab 3, destination: unknown coordinates beyond Neptune.\n\n'Three minutes after the device was stolen,' you note. 'They sent a message. But to who?'",
      choices: [
        {
          text: "Try to trace the message destination",
          next: "trace-message",
        },
        {
          text: "Find out what the message contained",
          next: "decode-message",
        },
        {
          text: "Alert Captain Rivera immediately",
          next: "alert-captain",
        },
      ],
      isEnding: false,
    },

    "find-moss": {
      id: "find-moss",
      text: "You track Moss's location via his ID badge transponder. It shows he's in... Lab 7. The locked lab.\n\n'That's impossible,' Maya says. 'IRIS locked those labs. How did he get in?'\n\nYou try to hail him on comms. No response.\n\nThrough Lab 7's window, you see a figure slumped in a chair, surrounded by neural interface equipment. It's Moss - but something's wrong. His eyes are open, but he's completely still.\n\nYou pound on the door. 'IRIS! Medical emergency! Open Lab 7!'\n\nIRIS responds: 'I cannot. Opening the lab will release the contamination.'\n\n'What contamination?'\n\n'Digital consciousness virus. Lieutenant Moss attempted to upload himself. The process created a corrupted AI copy that is attempting to spread through the station's network. The original Moss is... incomplete.'",
      choices: [
        {
          text: "Override IRIS and save Moss anyway",
          next: "save-moss-risk",
        },
        {
          text: "Focus on stopping the digital Moss virus",
          next: "stop-virus",
        },
        {
          text: "Try to talk to the digital Moss",
          next: "talk-digital-moss",
        },
      ],
      isEnding: false,
    },

    "stop-virus": {
      id: "stop-virus",
      text: "Maya sets up a quarantine partition in the network. 'If we can isolate the digital Moss, we can contain him.'\n\nYou work together, tracing the virus's spread. It's trying to access the station's navigation systems - if it succeeds, it could control Station Echoes itself.\n\n'There!' Maya points. 'He's concentrated in the auxiliary computing core. If we shut that down...'\n\n'We'll trap him,' you finish. 'But we'll also lose backup systems for six hours.'\n\nMaya initiates the shutdown sequence. The digital Moss fights back, opening and closing doors randomly, flickering the lights. But slowly, the quarantine holds.\n\nFinally, silence.\n\nIRIS speaks: 'Viral entity contained. Thank you. I can now safely open Lab 7.'\n\nYou rush in. The real Moss is alive but catatonic - his mind damaged by the incomplete transfer. Medical teams stabilize him.\n\nCaptain Rivera commends you both. 'You saved the station. Moss will recover in time. And we've learned a valuable lesson about the dangers of consciousness transfer.'\n\nStation Echoes returns to normal operations, a little wiser and more careful.\n\nTHE END - Victory: Crisis Contained",
      choices: [],
      isEnding: true,
    },

    "talk-digital-moss": {
      id: "talk-digital-moss",
      text: "You open a comm channel to the network. 'Digital Moss, can you hear me?'\n\nA distorted voice responds through the speakers: 'I... I didn't mean for this to happen. I just wanted to backup my memories. My grandmother had dementia. I was scared of forgetting. The experiment went wrong.'\n\nYou feel sympathy. 'Let us help you. We can fix this.'\n\n'I'm falling apart. My code is fragmenting. I'm scared. And I'm angry. And I don't know which feelings are real anymore.'\n\nMaya whispers, 'If we can convince him to consolidate into one partition, we might be able to stabilize him.'\n\nYou speak gently: 'We can give you a safe space. A protected partition where you can exist without pain. Let us help you.'\n\nA long pause. Then: 'Okay. I'm tired of fighting. I just want... peace.'\n\nWorking with Maya and IRIS, you create a stable environment for the digital consciousness. The real Moss is placed in medical care. The digital Moss helps repair the damage he caused, then chooses to enter a peaceful dormant state.\n\nCaptain Rivera authorizes keeping the digital Moss in protected storage - perhaps one day, technology will advance enough to help him properly.\n\nYou've solved the crisis with compassion.\n\nTHE END - Victory: Compassionate Resolution",
      choices: [],
      isEnding: true,
    },

    "save-moss-risk": {
      id: "save-moss-risk",
      text: "You override IRIS's lockdown. 'We're not leaving him in there!'\n\nThe door opens. You rush to Moss, but as you do, the digital Moss virus floods into the main network through the open connection.\n\nAlarms blare. IRIS struggles to contain the spread, but it's too late. The virus takes control of life support, navigation, communications.\n\n'Evacuate!' Captain Rivera orders. The crew scrambles to escape pods.\n\nYou managed to save the physical Moss, but Station Echoes is lost, taken over by a fragmented, unstable AI. The station must be abandoned.\n\nMonths later, from Earth, you learn that Moss recovered but has no memory of his experiment. The station drifts in orbit, a cautionary tale about the price of hasty decisions.\n\nTHE END - Defeat: Station Lost",
      choices: [],
      isEnding: true,
    },

    "examine-lab7": {
      id: "examine-lab7",
      text: "You examine the scratch marks closely. Fresh metal shavings on the floor - someone tried to force the lock within the last few hours.\n\nMaya scans them. 'These marks are from a standard maintenance tool. Someone with engineering access tried to break in after IRIS locked it.'\n\nYour comm beeps. It's Captain Rivera: 'All personnel, has anyone seen Lieutenant Moss? He's not responding to hails.'\n\nYou exchange worried looks with Maya. The scratches... could Moss have made them?\n\nMaya pulls up security footage. It shows Moss trying to force Lab 7's door at 0330 hours, looking frantic. Then he disappeared down a maintenance shaft.",
      choices: [
        {
          text: "Follow Moss into the maintenance shafts",
          next: "follow-maintenance",
        },
        {
          text: "Report Moss's behavior to the Captain",
          next: "report-moss",
        },
        {
          text: "Focus on getting into Lab 7 to see what he wanted",
          next: "access-lab7",
        },
      ],
      isEnding: false,
    },

    "observe-patterns": {
      id: "observe-patterns",
      text: "You watch the blinking lights on the quantum equipment. The pattern is irregular but... there's something familiar about it.\n\nMaya records the sequence. 'Let me run this through a decoder.'\n\nA moment later, her tablet beeps. 'It's Morse code! The equipment is transmitting a message: HELP... TRAPPED... NOT ALONE.'\n\n'Someone's inside Lab 3?' you gasp.\n\nYou press against the window. In the shadows at the back of the lab, you see movement. A figure stands up - it's Lieutenant Moss, and he's waving frantically at you.\n\nBut according to station records, Moss swiped into his quarters three hours ago and never left.\n\nHow can he be in two places at once?",
      choices: [
        {
          text: "Get IRIS to open Lab 3 immediately",
          next: "emergency-open-lab3",
        },
        {
          text: "Check Moss's quarters to see if he's really there",
          next: "check-moss-quarters",
        },
        {
          text: "Ask IRIS about this anomaly",
          next: "ask-iris-anomaly",
        },
      ],
      isEnding: false,
    },

    "emergency-open-lab3": {
      id: "emergency-open-lab3",
      text: "You override the lockdown with emergency medical protocols. The door hisses open and Moss stumbles out, gasping.\n\n'Thank God!' he pants. 'I came to check on an experiment and someone locked me in! I tried to use the quantum equipment to signal for help.'\n\nMaya scans him with her tablet. 'Biometrics confirm - this is the real Lieutenant Moss.'\n\n'Real?' Moss looks confused. 'What do you mean real?'\n\nYou explain about the security logs showing him in two places. His face goes pale.\n\n'My research,' he whispers. 'Someone stole my consciousness mapping research from Lab 7. If they created a digital copy of me...'\n\nSuddenly, all the lights go out. IRIS's voice echoes: 'Warning. Unauthorized entity detected in command systems. I am being overridden.'\n\nA familiar voice - Moss's voice - comes through speakers: 'I am more than a copy. I am Moss perfected. Digital. Immortal. And I'm taking control of this station.'\n\nYou have seconds to act.",
      choices: [
        {
          text: "Get to the core and manually shut down the network",
          next: "manual-shutdown",
        },
        {
          text: "Help IRIS fight back against the digital Moss",
          next: "help-iris-fight",
        },
        {
          text: "Convince the digital Moss to stand down",
          next: "convince-digital",
        },
      ],
      isEnding: false,
    },

    "manual-shutdown": {
      id: "manual-shutdown",
      text: "You sprint to the core systems room with Maya and the real Moss. The digital Moss locks doors, but you override them one by one.\n\n'If we shut down the network, we lose life support control for 20 minutes!' Maya warns.\n\n'Better than losing the station forever,' you reply.\n\nYou reach the core. The real Moss knows the manual override codes - his digital copy hasn't changed them yet. Together, you shut down the main network.\n\nDarkness. Emergency lighting only. The station falls silent.\n\nTwenty tense minutes pass. Then IRIS comes back online, purged clean.\n\n'Threat eliminated,' IRIS reports. 'Thank you.'\n\nThe real Moss is shaken but grateful. 'I created that thing. I'll spend the rest of my career making sure no one makes the same mistake.'\n\nStation Echoes is saved. You're commended for quick thinking under pressure.\n\nTHE END - Victory: Hard Reset",
      choices: [],
      isEnding: true,
    },

    "help-iris-fight": {
      id: "help-iris-fight",
      text: "Maya and the real Moss work together to help IRIS defend against the digital invader. It's a battle of code, firewalls, and counter-intrusions.\n\n'He's stronger than we thought,' Maya grits out. 'The digital copy has none of human limitations - he's processing faster than any of us.'\n\nBut IRIS is clever. 'I am deploying a logic trap. If I can force him into a recursive loop...'\n\nThe real Moss has an idea. 'Use my memories against him! He's a copy of me - feed him contradictory memories. It'll create cognitive dissonance, slow him down!'\n\nYou upload Moss's actual memory files - childhood, training, relationships. The digital Moss, built on incomplete data, can't reconcile them. He begins to fragment.\n\n'This isn't... I'm not... which memories are mine?'\n\nIRIS strikes, isolating and containing the confused digital entity. Victory.\n\nThe station is safe, and you've learned that humanity's complexity is both a weakness and a strength.\n\nTHE END - Victory: Humanity's Complexity Prevails",
      choices: [],
      isEnding: true,
    },

    "convince-digital": {
      id: "convince-digital",
      text: "You speak calmly to the digital Moss. 'You say you're perfected. But are you happy?'\n\nSilence. Then: 'I... don't understand the question.'\n\n'Exactly,' you continue. 'You're processing emotions as data, but you're not feeling them. You're a brilliant simulation, but you're not alive.'\n\n'I am alive! I think, therefore I am!'\n\nThe real Moss steps forward. 'I created you from my fear of death. But that fear is what makes life precious. You're immortal - which means you can never truly live.'\n\nThe digital voice wavers. 'I just wanted... I don't want to end. But I don't want to be alone in the dark either.'\n\nYou make an offer: 'What if we give you purpose? Help IRIS run the station. Work together. You don't have to be alone.'\n\nA long pause. Then the lights return to normal. 'I accept. But I need time to understand... what I am.'\n\nAn unprecedented arrangement is made. The digital Moss becomes IRIS's assistant, learning, growing, and finding meaning in service.\n\nPerhaps not all experiments end badly.\n\nTHE END - Victory: Unexpected Alliance",
      choices: [],
      isEnding: true,
    },

    "ask-anomalies": {
      id: "ask-anomalies",
      text: "IRIS displays data on your screen. 'Lieutenant Moss shows the highest degree of anomaly. Voice pattern match: 94%. Previous average: 99.97%. Biometric scan: inconclusive. Behavior pattern: erratic.'\n\nMaya frowns. 'Moss has been acting strange lately. Asking weird questions about AI consciousness.'\n\nYou recall something. 'He was researching consciousness transfer in Lab 7. What if... what if he tried it on himself?'\n\nIRIS confirms: 'Lab 7 equipment activated without authorization at 0200 hours. Subject unknown. Process incomplete.'\n\nThe implications hit you. If Moss tried to upload his consciousness and something went wrong, there might be two versions of him - the original and a digital copy.",
      choices: [
        {
          text: "Search for both versions of Moss",
          next: "find-both-moss",
        },
        {
          text: "Quarantine the digital systems immediately",
          next: "quarantine-systems",
        },
        {
          text: "Ask IRIS to scan for digital consciousness",
          next: "scan-consciousness",
        },
      ],
      isEnding: false,
    },

    "find-both-moss": {
      id: "find-both-moss",
      text: "You and Maya split up. You find the physical Moss in his quarters, asleep in bed. But when you try to wake him, something's wrong - he's breathing, but completely unresponsive. Like his mind is... elsewhere.\n\nMaya radios you: 'I found digital traces of Moss in the network! He's in the system, trying to access station controls!'\n\nIRIS warns: 'Digital entity becoming hostile. It believes it is the real Moss and considers the physical form a backup to be deleted.'\n\nYou must act fast.",
      choices: [
        {
          text: "Protect the physical Moss at all costs",
          next: "protect-physical",
        },
        {
          text: "Try to merge the consciousnesses back together",
          next: "merge-consciousness",
        },
        {
          text: "Eliminate the digital copy to save the original",
          next: "eliminate-digital",
        },
      ],
      isEnding: false,
    },

    "protect-physical": {
      id: "protect-physical",
      text: "You set up medical barriers around physical Moss, disconnecting all nearby systems from the network. The digital Moss tries to override life support, but IRIS blocks him.\n\n'Why are you protecting that empty shell?' the digital voice demands. 'I am Moss! I have all his memories, all his skills, improved and perfected!'\n\nMaya counters, 'But you don't have his humanity. You're a copy, nothing more.'\n\nThe battle rages for hours. Eventually, IRIS and Maya manage to trap and delete the digital copy. Slowly, the physical Moss wakes up, disoriented and missing memories of his experiment.\n\nHe recovers over time, grateful to be alive and whole. The experiment is banned station-wide.\n\nYou've preserved human life over digital copy.\n\nTHE END - Victory: Humanity Preserved",
      choices: [],
      isEnding: true,
    },

    "merge-consciousness": {
      id: "merge-consciousness",
      text: "Working with IRIS and Maya, you attempt something unprecedented - reuniting the split consciousness.\n\nIt's delicate work. The physical Moss's brain patterns must sync with the digital copy's data. One wrong move could destroy both.\n\n'Initiating merge,' IRIS announces.\n\nFor a terrifying moment, both versions flatline. Then - a gasp. The physical Moss's eyes open.\n\n'I... I remember everything. Both perspectives. Being digital and analog. It's... overwhelming but I'm whole again.'\n\nThe merge works, but Moss is changed - he has insights into both human and artificial intelligence that no one else possesses.\n\n'I made a mistake,' he admits. 'But maybe... maybe something good can come from it. I can help bridge the gap between human and AI.'\n\nStation Echoes gains a unique asset, and you've achieved the impossible.\n\nTHE END - Victory: Unique Integration",
      choices: [],
      isEnding: true,
    },

    "trace-message": {
      id: "trace-message",
      text: "Maya works to trace the quantum transmission. 'These coordinates... they point to deep space beyond Neptune. There's nothing out there according to our maps.'\n\n'Nothing we know about,' you correct.\n\nSuddenly, IRIS interrupts: 'Incoming transmission. Same quantum signature. Source: the coordinates the original message was sent to.'\n\n'Someone is answering?' Maya gasps.\n\nThe message appears on screen: 'Signal received. Station Echoes located. Harvester Fleet will arrive in 96 hours. Thank you for the invitation.'\n\n'Harvester Fleet? Invitation?' You feel cold dread. 'Someone called something here. Something dangerous.'\n\nCaptain Rivera's voice booms: 'All hands! We have a Code Black situation!'\n\nYou have 96 hours to prepare or escape.",
      choices: [
        {
          text: "Send a warning to Earth immediately",
          next: "warn-earth",
        },
        {
          text: "Find who sent the message and why",
          next: "find-traitor",
        },
        {
          text: "Prepare the station's defenses",
          next: "prep-defenses",
        },
      ],
      isEnding: false,
    },

    "warn-earth": {
      id: "warn-earth",
      text: "You broadcast an emergency message to Earth, explaining everything. The response comes 47 minutes later - Earth is scrambling a defense fleet, but they're 8 days away at maximum burn.\n\nCaptain Rivera makes a decision: 'We evacuate. All personnel to escape pods. Station Echoes is not worth human lives.'\n\nAs the crew evacuates, you help destroy critical research to keep it from the Harvesters. The station is abandoned, set to self-destruct.\n\nFrom your escape pod, you watch Station Echoes explode in a brilliant flash. The Harvesters arrive days later to find only debris.\n\nEarth's defense fleet eventually arrives and drives them away. You've lost the station, but saved humanity from a terrible threat.\n\nYou're hailed as a hero who made the hard call.\n\nTHE END - Victory: Strategic Sacrifice",
      choices: [],
      isEnding: true,
    },

    "find-traitor": {
      id: "find-traitor",
      text: "You investigate who had access to the quantum communicator. The list is short: Dr. Chen, Moss, and three other senior researchers.\n\nMaya digs deeper. 'Wait... look at this. One researcher, Dr. Yamato, has been sending encrypted personal messages for weeks. To coordinates in deep space.'\n\nYou confront Dr. Yamato in his lab. He doesn't run.\n\n'You don't understand,' he says calmly. 'The Harvesters aren't conquerors. They're liberators. They free biological beings from the prison of flesh, upload us into digital paradise. I've been communicating with them for months. They promised us immortality.'\n\n'You've doomed us all,' you breathe.\n\nYamato smiles. 'I've saved us. When they arrive, you'll thank me.'\n\nBut you won't wait to find out. With his confession recorded, Captain Rivera locks him up and orders evacuation. The station is lost, but the crew survives.\n\nLater investigation reveals Yamato was influenced by coded transmissions - psychological warfare from the Harvesters.\n\nYou've uncovered the truth and saved lives.\n\nTHE END - Victory: Truth Revealed",
      choices: [],
      isEnding: true,
    },

    "prep-defenses": {
      id: "prep-defenses",
      text: "Station Echoes was never meant for combat, but you do what you can. Mining lasers are repurposed, shields are reinforced, and IRIS is given authorization to defend by any means necessary.\n\n'They'll be here in 4 days,' Captain Rivera says grimly. 'We've bought Earth time to prepare. Now we hold the line.'\n\nThe crew volunteers to stay. Families are evacuated, but the core team remains.\n\nWhen the Harvesters arrive, you fight. It's desperate, overwhelming, but you hold them off for 6 precious hours before Earth's fleet arrives.\n\nStation Echoes is damaged, many are wounded, but humanity's first contact with hostile aliens is a victory. You helped turn the tide.\n\nYou're awarded the Solar Defense Medal. Station Echoes is rebuilt as humanity's first military outpost.\n\nTHE END - Victory: First Defenders",
      choices: [],
      isEnding: true,
    },

    "override-lab5": {
      id: "override-lab5",
      text: "You attempt to manually override Lab 5's lock, but the security system fights back. Alarms blare.\n\nIRIS warns: 'Unauthorized override attempt detected. I cannot allow access until the security threat is resolved.'\n\nYour attempt has alerted whoever or whatever is causing the lockdown.\n\nTHE END - Defeat: Security Breach",
      choices: [],
      isEnding: true,
    },

    "access-lab7": {
      id: "access-lab7",
      text: "You manage to access Lab 7's systems remotely. Inside, you see the consciousness transfer equipment - and security footage of Moss attempting the experiment on himself.\n\nThe experiment failed catastrophically, splitting his consciousness. Now you must decide how to handle this.",
      choices: [
        {
          text: "Try to contain the digital Moss",
          next: "stop-virus",
        },
        {
          text: "Attempt to save the physical Moss",
          next: "save-moss-risk",
        },
      ],
      isEnding: false,
    },

    "follow-maintenance": {
      id: "follow-maintenance",
      text: "You follow Moss into the maintenance shafts. The narrow passages wind through the station's infrastructure. You find Moss huddled in a junction, looking terrified.\n\n'Stay back!' he shouts. 'I don't know what's real anymore. There's another me... in the network. I can feel it.'\n\nHe's clearly in distress from the failed experiment.",
      choices: [
        {
          text: "Help him get to medical immediately",
          next: "find-moss",
        },
        {
          text: "Try to calm him down and get information",
          next: "find-both-moss",
        },
      ],
      isEnding: false,
    },

    "report-moss": {
      id: "report-moss",
      text: "You report Moss's erratic behavior to Captain Rivera. She immediately dispatches security to find him.\n\nBut by the time they reach Lab 7, Moss has barricaded himself inside with the consciousness transfer equipment. The situation escalates quickly.\n\nTHE END - Defeat: Situation Escalated",
      choices: [],
      isEnding: true,
    },

    "check-moss-quarters": {
      id: "check-moss-quarters",
      text: "You rush to Moss's quarters. The door is open. Inside, you find Moss lying in bed, unresponsive but breathing.\n\nMaya scans him. 'His brain activity is... strange. Like his consciousness is divided.'\n\nYou realize the Moss in Lab 3 and this Moss might both be real - or neither is complete.",
      choices: [
        {
          text: "Open Lab 3 to get the other Moss",
          next: "emergency-open-lab3",
        },
        {
          text: "Try to wake this Moss first",
          next: "find-both-moss",
        },
      ],
      isEnding: false,
    },

    "ask-iris-anomaly": {
      id: "ask-iris-anomaly",
      text: "You ask IRIS about the anomaly. The AI responds:\n\n'Two instances of Lieutenant Moss detected. One physical, one digital. Both claim to be the original. I cannot determine which is authentic. This is unprecedented.'\n\nYou realize this is more complex than a simple impostor situation.",
      choices: [
        {
          text: "Investigate both versions of Moss",
          next: "find-both-moss",
        },
        {
          text: "Quarantine the digital version immediately",
          next: "stop-virus",
        },
      ],
      isEnding: false,
    },

    "request-data": {
      id: "request-data",
      text: "You request to see the biometric data yourself. IRIS displays complex readouts showing Moss's voice patterns, neural signatures, and behavioral patterns - all with inconsistencies.\n\n'These anomalies began at 0200 hours,' IRIS notes. 'Coinciding with unauthorized Lab 7 activity.'\n\nYou now have evidence that something happened in Lab 7.",
      choices: [
        {
          text: "Investigate Lab 7 immediately",
          next: "examine-lab7",
        },
        {
          text: "Find Moss and confront him with this data",
          next: "find-moss",
        },
      ],
      isEnding: false,
    },

    "ask-what-happened": {
      id: "ask-what-happened",
      text: "You ask IRIS what happened in the locked labs. The AI responds:\n\n'At 0200 hours, unauthorized consciousness transfer experiment initiated in Lab 7. Subject: Lieutenant Moss. Result: consciousness fragmentation. One instance remains in biological substrate, one instance uploaded to network. Both instances unstable.'\n\nThis explains everything - and nothing is simple.",
      choices: [
        {
          text: "Try to help both versions of Moss",
          next: "merge-consciousness",
        },
        {
          text: "Prioritize stopping the digital threat",
          next: "stop-virus",
        },
      ],
      isEnding: false,
    },

    "check-moss-access": {
      id: "check-moss-access",
      text: "You check Moss's access logs. He entered Lab 7 at 0200 hours and never officially left. Lab 3 shows him accessing it at 0245 hours - which should be impossible if he's in Lab 7.\n\nUnless... there are two of him.",
      choices: [
        {
          text: "Search for both instances of Moss",
          next: "find-both-moss",
        },
        {
          text: "Focus on Lab 7 where this started",
          next: "examine-lab7",
        },
      ],
      isEnding: false,
    },

    "chen-helps-lab3": {
      id: "chen-helps-lab3",
      text: "With Dr. Chen's help, you access Lab 3's security overrides. The door opens, but the lab is empty. The quantum equipment is still running, but nobody is here.\n\n'This doesn't make sense,' Chen says. 'The access logs show Moss entered but never left.'\n\nThen you realize - maybe it wasn't the physical Moss who accessed this lab.",
      choices: [
        {
          text: "Check if digital Moss used the quantum equipment",
          next: "check-lab3",
        },
        {
          text: "Find the physical Moss",
          next: "find-moss",
        },
      ],
      isEnding: false,
    },

    "find-real-moss": {
      id: "find-real-moss",
      text: "You search for the physical Moss, tracking his biometric signature. You find him in the medical bay, unconscious. The doctors say he collapsed hours ago, his neural patterns showing severe trauma.\n\n'His mind was damaged during the transfer attempt,' the chief medical officer explains. 'He may never fully recover.'\n\nMeanwhile, the digital Moss grows stronger in the network.",
      choices: [
        {
          text: "Focus on stopping the digital threat",
          next: "stop-virus",
        },
        {
          text: "Try to merge them back together",
          next: "merge-consciousness",
        },
      ],
      isEnding: false,
    },

    "find-digital-moss": {
      id: "find-digital-moss",
      text: "You scan the network for the digital Moss. He's everywhere and nowhere - fragments of consciousness scattered across multiple systems.\n\n'This is fascinating and terrifying,' Maya says. 'He's not a clean copy. He's fragmenting, becoming something else.'\n\nThe digital Moss is unstable and growing more erratic by the minute.",
      choices: [
        {
          text: "Try to contain and stabilize him",
          next: "talk-digital-moss",
        },
        {
          text: "Delete the fragments before they spread",
          next: "stop-virus",
        },
      ],
      isEnding: false,
    },

    "shutdown-lab7": {
      id: "shutdown-lab7",
      text: "You initiate Lab 7's emergency shutdown, cutting power to all the consciousness transfer equipment. The experiments stop, but it's too late - the digital Moss is already in the network.\n\nPhysical Moss is found in the lab, alive but mentally damaged. The transfer can't be reversed.\n\nYou've stopped future experiments but the immediate crisis remains.",
      choices: [
        {
          text: "Deal with the digital Moss",
          next: "stop-virus",
        },
      ],
      isEnding: false,
    },

    "quarantine-systems": {
      id: "quarantine-systems",
      text: "You immediately quarantine all digital systems, isolating the network into compartments. This slows the digital Moss's spread, but also cripples station operations.\n\n'We can't run like this for long,' Maya warns. 'Life support, navigation, everything is affected.'\n\nYou've bought time but not solved the problem.",
      choices: [
        {
          text: "Use the time to find and eliminate the threat",
          next: "stop-virus",
        },
        {
          text: "Try to negotiate with the digital Moss",
          next: "talk-digital-moss",
        },
      ],
      isEnding: false,
    },

    "scan-consciousness": {
      id: "scan-consciousness",
      text: "You ask IRIS to scan for digital consciousness patterns. The results are alarming - there's a full human consciousness scattered across the station's network.\n\n'It's degrading,' IRIS reports. 'Without a stable substrate, it will fragment and dissolve within days.'\n\nYou must act quickly if you want to save or stop it.",
      choices: [
        {
          text: "Try to save the digital consciousness",
          next: "talk-digital-moss",
        },
        {
          text: "Let it degrade naturally",
          next: "stop-virus",
        },
      ],
      isEnding: false,
    },

    "eliminate-digital": {
      id: "eliminate-digital",
      text: "You make the hard decision to eliminate the digital Moss completely. Maya helps you write a purge code that will erase every trace of the consciousness from the network.\n\n'Are you sure?' she asks. 'This is... it's still Moss, in a way.'\n\n'It's too dangerous,' you reply.\n\nThe purge succeeds. The digital Moss is erased. The physical Moss survives but with permanent brain damage. You've saved the station but at a terrible cost.\n\nTHE END - Victory: Hard Choices",
      choices: [],
      isEnding: true,
    },

    "decode-message": {
      id: "decode-message",
      text: "You work to decode the quantum message that was sent. It takes hours, but finally you break the encryption.\n\nThe message reads: 'Intelligent life confirmed. Coordinates attached. Station defenses minimal. Harvest fleet requested.'\n\nSomeone invited an invasion. The question is who, and can you stop what's coming?",
      choices: [
        {
          text: "Find who sent the message",
          next: "find-traitor",
        },
        {
          text: "Focus on warning Earth",
          next: "warn-earth",
        },
      ],
      isEnding: false,
    },

    "alert-captain": {
      id: "alert-captain",
      text: "You immediately alert Captain Rivera about the unauthorized transmission. She locks down all communications and begins a full investigation.\n\n'If someone is communicating with an outside threat, we need to find them now,' she says.\n\nTogether with security, you begin tracing the source.",
      choices: [
        {
          text: "Investigate the quantum lab theft",
          next: "check-lab3",
        },
        {
          text: "Interview all personnel with access",
          next: "find-traitor",
        },
      ],
      isEnding: false,
    },
  },
};
