export const sampleStory = {
  storyId: "the-crystal-throne",
  title: "The Crystal Throne",
  author: "Spencer Kittle",
  description:
    "A fantasy adventure where your choices determine the fate of a kingdom on the brink of war.",
  startNode: "start",
  nodes: {
    start: {
      id: "start",
      text: "You stand before the Crystal Throne, its facets gleaming in the torchlight of the Great Hall. Your mentor, the Royal Advisor Meredith, lies dead at your feet—poisoned during tonight's feast. In her final breath, she pressed a sealed letter into your palm and whispered: 'Trust no one. The throne must not fall to shadow.'\n\nAs the kingdom's youngest court mage, you're caught between loyalty to the crown and the terrible truth in this letter. Outside, you hear guards approaching. You must act quickly.",
      choices: [
        {
          text: "Read the letter immediately",
          next: "read-letter",
        },
        {
          text: "Hide the letter and play innocent",
          next: "hide-letter",
        },
        {
          text: "Investigate Meredith's body for more clues",
          next: "investigate-body",
        },
      ],
      isEnding: false,
    },

    "read-letter": {
      id: "read-letter",
      text: "You break the wax seal and scan the letter frantically. Your blood runs cold:\n\n'The King is not who he claims. Three months ago, he was replaced by a doppelganger—a creature of shadow magic. The true king is imprisoned beneath the castle. The royal family is in danger. I've hidden the prison key in the—'\n\nThe letter ends abruptly, as if she was interrupted while writing. Footsteps echo in the corridor. The guards will be here in seconds.",
      choices: [
        {
          text: "Burn the letter and feign ignorance",
          next: "burn-letter",
        },
        {
          text: "Confront the fake king directly",
          next: "confront-king",
        },
        {
          text: "Flee to the archives to research doppelgangers",
          next: "flee-archives",
        },
      ],
      isEnding: false,
    },

    "hide-letter": {
      id: "hide-letter",
      text: "You tuck the letter into your robes just as Captain Garrett and four guards burst through the doors. His eyes sweep the scene: you, standing over the Royal Advisor's corpse.\n\n'Step away from the body,' Garrett commands, hand on his sword hilt. 'The King demands an explanation.'\n\nYou notice something odd—Garrett's shadow moves independently, reaching toward you while he stands still.",
      choices: [
        {
          text: "Explain you found her like this",
          next: "explain-innocence",
        },
        {
          text: "Cast a detection spell on Garrett's shadow",
          next: "detect-shadow",
        },
        {
          text: "Run for the servants' passage",
          next: "servants-passage",
        },
      ],
      isEnding: false,
    },

    "investigate-body": {
      id: "investigate-body",
      text: "You kneel and examine Meredith carefully. The poison's scent is unmistakable—nightshade and something else, something magical. Her fingers are stained with ink, and you notice a small symbol drawn on her palm: a key with three teeth.\n\nYou've seen this symbol before in the restricted section of the royal archives. It's the seal of the Keeper's Gate—a legendary prison beneath the castle that no one has entered in centuries.\n\nThe guards' footsteps are getting closer.",
      choices: [
        {
          text: "Now read the hidden letter",
          next: "read-letter",
        },
        {
          text: "Search for the prison entrance immediately",
          next: "search-prison",
        },
        {
          text: "Take a sample of the poison for analysis",
          next: "take-poison",
        },
      ],
      isEnding: false,
    },

    "burn-letter": {
      id: "burn-letter",
      text: "You summon a small flame and watch the letter curl into ash. When the guards arrive, you tell them you found the Royal Advisor dead. They escort you to the throne room.\n\nThe King sits upon the Crystal Throne, his expression unreadable. But as you approach, you notice his reflection in the crystal is... wrong. The reflection moves a fraction of a second before he does.\n\n'My dear mage,' the King says smoothly. 'Tell me everything you know about Meredith's death.'",
      choices: [
        {
          text: "Lie and say you know nothing",
          next: "lie-to-king",
        },
        {
          text: "Accuse him of being an impostor",
          next: "accuse-impostor",
        },
        {
          text: "Ask permission to investigate the death magically",
          next: "investigate-magically",
        },
      ],
      isEnding: false,
    },

    "confront-king": {
      id: "confront-king",
      text: "You burst into the throne room, letter in hand. The King rises from the Crystal Throne, his eyes flashing dangerously.\n\n'You dare enter unannounced?' he thunders. Then he sees the letter. His expression changes—becomes something cold and inhuman.\n\n'I see,' he says softly. 'Meredith was cleverer than I thought.' The shadows in the room begin to writhe and move of their own accord. 'But not clever enough.'",
      choices: [
        {
          text: "Attack with combat magic",
          next: "attack-king",
        },
        {
          text: "Attempt to banish the doppelganger",
          next: "banish-doppelganger",
        },
        {
          text: "Teleport away while you still can",
          next: "teleport-escape",
        },
      ],
      isEnding: false,
    },

    "flee-archives": {
      id: "flee-archives",
      text: "You slip through the servants' corridors and reach the royal archives unseen. The dusty tomes here contain centuries of magical knowledge. You find a section on doppelgangers and shadow creatures.\n\nAccording to the texts, a doppelganger's power comes from the original being it copied. If the original dies, the doppelganger becomes permanent. But if the original is freed, the doppelganger becomes vulnerable—it can be banished with the right spell.\n\nYou hear footsteps. Someone is searching the archives.",
      choices: [
        {
          text: "Hide and observe who's searching",
          next: "hide-observe",
        },
        {
          text: "Search for the banishment spell",
          next: "find-banishment",
        },
        {
          text: "Leave through the window to search for the prison",
          next: "window-escape",
        },
      ],
      isEnding: false,
    },

    "detect-shadow": {
      id: "detect-shadow",
      text: "You weave a detection spell, and the truth reveals itself in blazing clarity. Garrett's shadow isn't a shadow at all—it's a shadow wraith, a parasitic creature controlling him like a puppet.\n\nBut your spell has alerted it. Garrett's eyes go black, and the shadow explodes outward, filling the room with choking darkness. The other guards cry out in confusion.\n\n'The mage knows!' Garrett's voice echoes unnaturally. 'Take them!'",
      choices: [
        {
          text: "Create a light shield to hold back the shadows",
          next: "light-shield",
        },
        {
          text: "Destroy Garrett's shadow wraith",
          next: "destroy-wraith",
        },
        {
          text: "Flee while they're disoriented",
          next: "flee-chaos",
        },
      ],
      isEnding: false,
    },

    "servants-passage": {
      id: "servants-passage",
      text: "You dart into the hidden servants' passage behind a tapestry. The narrow corridors wind through the castle walls like a maze. You can hear pursuit behind you, but you know these passages better than most.\n\nYou emerge in the castle cellars—ancient stone chambers that predate the current structure. According to legend, the oldest dungeons are down here, sealed away and forgotten.\n\nYou spot three passages leading deeper into darkness.",
      choices: [
        {
          text: "Follow the passage with fresh air flow",
          next: "fresh-air-passage",
        },
        {
          text: "Take the passage with strange markings",
          next: "marked-passage",
        },
        {
          text: "Investigate the collapsed tunnel",
          next: "collapsed-tunnel",
        },
      ],
      isEnding: false,
    },

    "light-shield": {
      id: "light-shield",
      text: "You summon a blazing shield of pure light. The shadows recoil, hissing. In the illumination, you see the truth: all five guards have shadow wraiths attached to them, black tendrils running from their backs into the darkness.\n\nYour light is holding them at bay, but you're expending magical energy rapidly. You won't be able to maintain this for long.\n\nThrough a window, you glimpse Princess Elena crossing the courtyard, unaware of the danger.",
      choices: [
        {
          text: "Hold the shield and shout a warning to Elena",
          next: "warn-elena",
        },
        {
          text: "Release the shield and make a run for the prison",
          next: "run-for-prison",
        },
        {
          text: "Channel all power into a purging blast",
          next: "purging-blast",
        },
      ],
      isEnding: false,
    },

    "marked-passage": {
      id: "marked-passage",
      text: "You follow the strange markings—they're written in Old Realm script, a language you studied as an apprentice. They read: 'Here lies the Keeper's Gate. Three keys to bind. Three truths to free.'\n\nThe passage opens into a circular chamber. In its center stands a door of black iron, sealed with three locks. Each lock bears a symbol: a crown, a heart, and a flame.\n\nYou hear a groan from behind the door—someone is imprisoned here.",
      choices: [
        {
          text: "Call out to identify the prisoner",
          next: "call-out",
        },
        {
          text: "Try to pick the locks with magic",
          next: "pick-locks",
        },
        {
          text: "Search the chamber for the keys",
          next: "search-chamber",
        },
      ],
      isEnding: false,
    },

    "call-out": {
      id: "call-out",
      text: "'Who's there?' you call through the door.\n\nA weak voice responds: 'Is that... is someone real? Not another shadow illusion?' The voice is familiar—it's King Aldric, but he sounds broken, exhausted.\n\n'I am the King of Valoreth,' the voice continues. 'I've been imprisoned here for months. A creature of shadow took my place. You must warn—'\n\nHe breaks into coughing. You hear footsteps descending the passage behind you. You're running out of time.",
      choices: [
        {
          text: "Blast the door open with force magic",
          next: "blast-door",
        },
        {
          text: "Promise to return with keys and hide",
          next: "promise-return",
        },
        {
          text: "Ask the king where to find the keys",
          next: "ask-about-keys",
        },
      ],
      isEnding: false,
    },

    "blast-door": {
      id: "blast-door",
      text: "You gather your power and unleash a concussive blast at the door. The explosion echoes through the chamber, but the door holds—its magic is too strong.\n\nHowever, the blast has damaged the locks. The symbol on the crown lock begins to glow, and you hear a voice whisper: 'The crown belongs to one who serves, not rules.'\n\nBehind you, guards pour into the chamber, led by a figure in royal robes—the doppelganger king himself.",
      choices: [
        {
          text: "Declare yourself the true servant of the kingdom",
          next: "declare-servant",
        },
        {
          text: "Fight the doppelganger directly",
          next: "fight-doppelganger",
        },
        {
          text: "Use yourself as a magical conduit to drain the locks",
          next: "drain-locks",
        },
      ],
      isEnding: false,
    },

    "declare-servant": {
      id: "declare-servant",
      text: "You stand tall and speak clearly: 'I am a servant of Valoreth, sworn to protect its people and its rightful king. I claim no crown, only duty.'\n\nThe crown lock glows brilliant gold and clicks open. The doppelganger snarls, shadows swirling around him.\n\n'Fool! You don't understand what you're dealing with. The age of mortal kings is over. The Shadow Court will rule, and I am their herald!'\n\nHe raises his hands, and darkness begins to consume the chamber. You feel the real king behind the door, weak but alive. Two locks remain.",
      choices: [
        {
          text: "Speak truth from your heart to break the heart lock",
          next: "heart-truth",
        },
        {
          text: "Channel your inner fire to break the flame lock",
          next: "channel-flame",
        },
        {
          text: "Defend yourself from the doppelganger's attack",
          next: "defend-attack",
        },
      ],
      isEnding: false,
    },

    "heart-truth": {
      id: "heart-truth",
      text: "You place your hand on the heart lock and speak: 'I am afraid. I am young and uncertain. But I stand here because someone must. Because Meredith believed in me. Because the people of this kingdom deserve truth, not shadow.'\n\nThe heart lock opens with a soft chime. The doppelganger screams in rage as his power begins to waver—the real king's presence is weakening his hold on reality.\n\nOnly the flame lock remains. The doppelganger launches a wave of shadow magic at you.",
      choices: [
        {
          text: "Let the shadow hit you to absorb it and fuel the flame",
          next: "absorb-shadow",
        },
        {
          text: "Counter with your own magic",
          next: "counter-magic",
        },
        {
          text: "Dodge and let it hit the flame lock",
          next: "dodge-flame",
        },
      ],
      isEnding: false,
    },

    "absorb-shadow": {
      id: "absorb-shadow",
      text: "You open yourself to the shadow magic, letting it pour into you. The darkness is cold, hungry, trying to consume you from within. Pain sears through your body.\n\nBut you are a mage. You've trained to transmute energy, to transform one form of magic into another. You seize the shadow magic and force it through your will, converting darkness into brilliant flame.\n\nYour hand blazes with fire as you press it to the flame lock. 'By sacrifice and transformation,' you gasp, 'I open the way.'\n\nThe flame lock shatters. The door swings open.",
      choices: [
        {
          text: "Help the true king out and face the doppelganger together",
          next: "true-ending",
        },
        {
          text: "Tell the king to stay back while you finish this",
          next: "solo-finish",
        },
      ],
      isEnding: false,
    },

    "true-ending": {
      id: "true-ending",
      text: "King Aldric stumbles from his prison, weak but determined. As he enters the chamber, the doppelganger's form begins to flicker and fade.\n\n'No!' the creature shrieks. 'I am real! I am the king!'\n\n'You are nothing,' Aldric says firmly. 'I am Aldric Valoreth, by blood and by bond, and I reclaim my throne.'\n\nThe doppelganger dissolves into shadow and dissipates. Throughout the castle, shadow wraiths release their hold on the possessed guards, fleeing back to whatever dark realm spawned them.\n\nIn the days that follow, King Aldric recovers his strength. At a ceremony before the Crystal Throne, he names you Royal Defender and grants you Meredith's seat on the council.\n\n'You believed in truth when illusion surrounded you,' the king says. 'You chose courage when fear was easier. The kingdom owes you a debt that cannot be repaid.'\n\nYou've saved the realm from shadow. But you know this is only the beginning—the Shadow Court still exists, and they will return. For now, though, the Crystal Throne stands in the light.\n\nTHE END - True Victory: The Light Prevails",
      choices: [],
      isEnding: true,
    },

    "solo-finish": {
      id: "solo-finish",
      text: "You turn to face the doppelganger alone, placing yourself between it and the weakened king. The creature laughs.\n\n'Noble,' it hisses. 'But futile.'\n\nIt strikes with overwhelming force. You manage to deflect the attack, but the effort drains you. You're injured, exhausted, and the doppelganger is still at full strength.\n\nBehind you, King Aldric begins to chant in an ancient tongue. His voice grows stronger with each word. You realize he's casting a banishment spell—but it requires time and concentration.\n\nThe doppelganger realizes it too and lunges past you toward the king. You have one chance to stop it.",
      choices: [
        {
          text: "Tackle the doppelganger and hold it back",
          next: "sacrifice-ending",
        },
        {
          text: "Cast a binding spell with your remaining power",
          next: "binding-ending",
        },
      ],
      isEnding: false,
    },

    "sacrifice-ending": {
      id: "sacrifice-ending",
      text: "You throw yourself at the doppelganger, grabbing it with both hands. Its shadowy form burns your skin, but you hold tight. The creature thrashes and screams, trying to break free.\n\n'Now!' you shout to the king.\n\nAldric completes the spell. White light explodes through the chamber, and the doppelganger shrieks as it's torn from this world. But you're caught in the blast, intertwined with the creature.\n\nYou wake three days later in the royal infirmary. The healers say it's a miracle you survived. King Aldric sits by your bedside.\n\n'You saved my life and my kingdom,' he says quietly. 'At the cost of your own magical ability.'\n\nYou feel the truth of it—the fonts of power within you are burned out, empty. You'll never cast another spell. But the kingdom is safe, the shadows are banished, and the Crystal Throne stands secure.\n\nSome would call it a price too high. You call it duty.\n\nTHE END - Sacrifice: The Price of Victory",
      choices: [],
      isEnding: true,
    },

    "binding-ending": {
      id: "binding-ending",
      text: "You pour every ounce of remaining magic into a binding spell, chains of pure energy wrapping around the doppelganger. It struggles violently, but you hold firm.\n\nKing Aldric completes his banishment chant. The doppelganger explodes into harmless shadow that fades into nothing.\n\nYou collapse from exhaustion. When you wake, the king explains that the shadow conspiracy was larger than anyone knew—the doppelganger was planning to start a war with the neighboring kingdom, throwing the entire realm into chaos.\n\nBy stopping it, you've saved countless lives. King Aldric offers you any reward in his power.\n\nYou ask only for permission to continue Meredith's work—protecting the kingdom from magical threats, hunting down any remaining shadow creatures, ensuring this never happens again.\n\nYour new title: Shadow Hunter of Valoreth.\n\nTHE END - Victory: Guardian Against the Dark",
      choices: [],
      isEnding: true,
    },

    "warn-elena": {
      id: "warn-elena",
      text: "You maintain your shield and shout through the window: 'Elena! The castle is compromised! Run!'\n\nThe princess looks up, sees the chaos through the window, and hesitates for just a moment too long. Shadow tendrils shoot across the courtyard and seize her.\n\nYour concentration breaks. The shadows overwhelm you. You hear the doppelganger's voice: 'Take them to the dungeons. They'll make excellent leverage.'\n\nYou've failed. The kingdom falls to shadow, and you spend your remaining days in the very prison that once held the true king, listening to the doppelganger consolidate its dark power.\n\nTHE END - Defeat: Consumed by Shadow",
      choices: [],
      isEnding: true,
    },

    "fight-doppelganger": {
      id: "fight-doppelganger",
      text: "You attack the doppelganger with everything you have—fire, force, lightning. Your spells strike true, and the creature staggers back.\n\nBut it's far more powerful than you realized. It was holding back, testing you. Now it responds with its true strength.\n\nShadow magic engulfs you, cold and suffocating. Your spells dissipate like smoke. The doppelganger's hand closes around your throat.\n\n'You could have lived,' it whispers. 'In my new order, there would have been a place for a mage of your talents. But you chose the losing side.'\n\nThe shadows consume you. The kingdom falls shortly after.\n\nTHE END - Defeat: Outmatched",
      choices: [],
      isEnding: true,
    },

    "accuse-impostor": {
      id: "accuse-impostor",
      text: "You point at the king and declare: 'You're not King Aldric! You're a doppelganger, a creature of shadow magic!'\n\nThe court gasps. The guards move toward you. But the fake king merely smiles.\n\n'Grief has clearly driven our young mage mad,' he says smoothly. 'Guards, escort them to their chambers to rest.'\n\nAs the guards seize you, you see triumph in the king's eyes. You've revealed your knowledge without proof, and now you're powerless to stop what's coming.\n\nYou're locked in your chambers, and by morning, you've vanished—one more victim of the shadow conspiracy.\n\nTHE END - Defeat: The Truth Dies With You",
      choices: [],
      isEnding: true,
    },

    "teleport-escape": {
      id: "teleport-escape",
      text: "You weave a desperate teleportation spell and vanish in a flash of light. You reappear in the forest outside the castle, safe but alone.\n\nYou've escaped, but the doppelganger remains in power. Without proof and without allies, there's nothing you can do. You flee the kingdom, hunted as a traitor and murderer.\n\nYears later, you hear that King 'Aldric' led the kingdom into a devastating war. You wonder if you could have stopped it, if you'd stayed and fought.\n\nBut you'll never know.\n\nTHE END - Escape: The Coward's Road",
      choices: [],
      isEnding: true,
    },

    "flee-chaos": {
      id: "flee-chaos",
      text: "You flee through the chaos while the guards are disoriented by darkness. Racing through the corridors, you descend into the castle's lower levels, searching for the ancient prison Meredith mentioned.\n\nYour instincts lead you to a forgotten passage marked with old runes. This must be the way to the Keeper's Gate.\n\nAs you follow the passage deeper, you hear the echo of pursuit behind you—the shadow wraiths are hunting you.",
      choices: [
        {
          text: "Continue to the marked passage",
          next: "marked-passage",
        },
        {
          text: "Hide and try to lose your pursuers",
          next: "hide-pursuers",
        },
      ],
      isEnding: false,
    },

    "hide-pursuers": {
      id: "hide-pursuers",
      text: "You duck into a dark alcove, holding your breath as shadow-possessed guards rush past. But the wraiths can sense magic, and you're practically glowing with power from your earlier spells.\n\nThe shadows find you. There's nowhere left to run.\n\nTHE END - Defeat: Hunted Down",
      choices: [],
      isEnding: true,
    },

    "explain-innocence": {
      id: "explain-innocence",
      text: "You explain that you found Meredith already dead, that you were trying to help. Garrett listens, but his shadow continues to writhe unnaturally.\n\n'A likely story,' he says coldly. 'You'll tell it to the King.'\n\nAs the guards escort you to the throne room, you realize you've lost your chance to act. The doppelganger will ensure you never speak the truth.\n\nTHE END - Defeat: Silenced",
      choices: [],
      isEnding: true,
    },

    "search-prison": {
      id: "search-prison",
      text: "You search frantically for the prison entrance, following the symbol's clues. But time runs out—guards flood the chamber and seize you before you can find the hidden door.\n\nWithout proof of the conspiracy, you're blamed for Meredith's death. The doppelganger ensures you're imprisoned in the very cells where the true king suffers.\n\nTHE END - Defeat: Imprisoned",
      choices: [],
      isEnding: true,
    },

    "take-poison": {
      id: "take-poison",
      text: "You carefully collect a sample of the poison for later analysis. But as you work, guards burst in and find you tampering with evidence. They assume you're the poisoner trying to hide your crime.\n\nYou're arrested on the spot. The doppelganger makes sure you never get a chance to clear your name.\n\nTHE END - Defeat: Framed",
      choices: [],
      isEnding: true,
    },

    "lie-to-king": {
      id: "lie-to-king",
      text: "You claim complete ignorance, hoping to buy time. But the doppelganger sees through your deception—your eyes betrayed you when you noticed the wrong reflection.\n\n'Take them to the dungeons,' the fake king orders. 'We'll extract the truth later.'\n\nYou never get another chance to stop the conspiracy.\n\nTHE END - Defeat: Saw Through the Lie",
      choices: [],
      isEnding: true,
    },

    "investigate-magically": {
      id: "investigate-magically",
      text: "You request permission to magically investigate Meredith's death. The fake king considers this, then nods—perhaps intrigued to see what you know.\n\nBut as you begin your detection spell, the doppelganger's own magic interferes, corrupting your results. Worse, it uses the opportunity to bind shadow magic to you, marking you for future elimination.\n\nYou're dismissed, now hunted by shadow creatures that will ensure you never uncover the truth.\n\nTHE END - Defeat: Marked for Death",
      choices: [],
      isEnding: true,
    },

    "attack-king": {
      id: "attack-king",
      text: "You unleash your most powerful combat spell directly at the fake king. But he was ready—your magic dissipates against his shadow shield like rain against stone.\n\n'Foolish,' he says, and darkness swallows you whole.\n\nTHE END - Defeat: Overwhelmed",
      choices: [],
      isEnding: true,
    },

    "banish-doppelganger": {
      id: "banish-doppelganger",
      text: "You attempt a banishment spell, but without freeing the real king first, the doppelganger is too strongly anchored to this reality. Your spell fails, and you're left defenseless.\n\nThe doppelganger strikes you down without mercy.\n\nTHE END - Defeat: Failed Banishment",
      choices: [],
      isEnding: true,
    },

    "hide-observe": {
      id: "hide-observe",
      text: "You hide behind the ancient shelves and watch. Princess Elena enters the archives, moving with purpose. She's searching for something specific.\n\nShe pulls out a tome on shadow magic and begins reading frantically. Then she notices you.\n\n'You're alive!' she whispers urgently. 'I thought the wraiths got you. We need to work together—I know where my father is imprisoned.'\n\nYou've found an ally.\n\nTHE END - Victory: Royal Alliance (This path continues but ends here for scope)",
      choices: [],
      isEnding: true,
    },

    "find-banishment": {
      id: "find-banishment",
      text: "You search desperately for the banishment spell, pulling tome after tome. You find it—but it requires the original being to be present to work.\n\nYou must free the king first. But as you turn to leave, shadow-possessed guards block your exit.\n\nTHE END - Defeat: Trapped in the Archives",
      choices: [],
      isEnding: true,
    },

    "window-escape": {
      id: "window-escape",
      text: "You slip out the archive window and make your way toward the old dungeons. Using your knowledge of castle layout, you navigate the shadows and reach the entrance to the Keeper's Gate.\n\nYou've evaded pursuit for now.",
      choices: [
        {
          text: "Enter the passage to find the prison",
          next: "marked-passage",
        },
      ],
      isEnding: false,
    },

    "destroy-wraith": {
      id: "destroy-wraith",
      text: "You focus your power and strike at Garrett's shadow wraith with purifying light. The creature shrieks and dissolves. Garrett collapses, freed but unconscious.\n\nBut destroying one wraith alerts all the others. Shadow magic floods the castle. You've won the battle but alerted the enemy.\n\nYou have moments before they converge on you.\n\nTHE END - Defeat: Overwhelmed by Numbers (Simplified for scope)",
      choices: [],
      isEnding: true,
    },

    "fresh-air-passage": {
      id: "fresh-air-passage",
      text: "You follow the passage with fresh air, thinking it leads outside. Instead, it's a ventilation shaft that opens high on the castle wall.\n\nYou're trapped at a dead end as shadow-possessed guards close in behind you.\n\nTHE END - Defeat: Wrong Path",
      choices: [],
      isEnding: true,
    },

    "collapsed-tunnel": {
      id: "collapsed-tunnel",
      text: "You investigate the collapsed tunnel, hoping to find a way through. But the rubble is too thick, and you've wasted precious time.\n\nGuards discover you before you can find another route.\n\nTHE END - Defeat: Dead End",
      choices: [],
      isEnding: true,
    },

    "run-for-prison": {
      id: "run-for-prison",
      text: "You release your shield and sprint for the lower levels, racing toward the Keeper's Gate. The shadow wraiths pursue, but your head start is enough.\n\nYou reach the marked passage and descend, hearing Princess Elena's scream echo behind you. The cost of your escape weighs heavily on your conscience, but you press on.\n\nTHE END - Victory(?): Haunted Success (Simplified for scope)",
      choices: [],
      isEnding: true,
    },

    "purging-blast": {
      id: "purging-blast",
      text: "You channel every ounce of magical power into a massive purging blast of light. The shadow wraiths shriek and dissolve, freed from all five guards.\n\nBut the effort drains you completely. You collapse, powerless, as more shadow creatures pour in from throughout the castle.\n\nYour heroic effort saved five guards but cost you everything.\n\nTHE END - Defeat: Burned Out",
      choices: [],
      isEnding: true,
    },

    "promise-return": {
      id: "promise-return",
      text: "You promise King Aldric you'll return with the keys. You hide as guards pass, but without the keys, you have no way to free him.\n\nYou search for days, but the keys remain hidden. Eventually, you're discovered and captured.\n\nTHE END - Defeat: Lost Opportunity",
      choices: [],
      isEnding: true,
    },

    "ask-about-keys": {
      id: "ask-about-keys",
      text: "You ask the king where the keys are. He responds weakly: 'Meredith said... the keys aren't physical objects. They're truths. Virtues. Crown, heart, and flame...'\n\nBut before he can explain more, the doppelganger arrives with guards.\n\nYou're out of time.\n\nTHE END - Defeat: Too Late (This would connect to the confrontation but simplified for scope)",
      choices: [],
      isEnding: true,
    },

    "drain-locks": {
      id: "drain-locks",
      text: "You attempt to use yourself as a conduit to drain the magical locks, channeling their power through your body. The pain is excruciating—too much power flowing through you at once.\n\nThe locks begin to crack and break, but your body can't handle the strain. You manage to free the king, but at the cost of your own life.\n\nKing Aldric defeats the doppelganger and reclaims his throne. In the Crystal Hall, a statue is raised in your honor—the Young Mage who gave everything to save the kingdom.\n\nTHE END - Heroic Sacrifice: The Ultimate Price",
      choices: [],
      isEnding: true,
    },

    "channel-flame": {
      id: "channel-flame",
      text: "You reach deep within yourself, summoning your passion, your conviction, your inner fire. Your hands burst into flame—not destructive, but warm and alive.\n\nThe flame lock recognizes true passion and clicks open. The door swings wide, and the true king stumbles free.\n\nBut you've taken too long. The doppelganger is here.\n\nTHE END - Victory: Last-Second Rescue (Connects to confrontation, simplified)",
      choices: [],
      isEnding: true,
    },

    "defend-attack": {
      id: "defend-attack",
      text: "You raise a defensive shield against the doppelganger's assault. Your barrier holds, but you're locked in a stalemate—unable to free the king while defending yourself.\n\nThe doppelganger summons more shadow creatures. You're outnumbered and slowly overwhelmed.\n\nTHE END - Defeat: Defensive Failure",
      choices: [],
      isEnding: true,
    },

    "counter-magic": {
      id: "counter-magic",
      text: "You counter the doppelganger's shadow magic with your own force spell. The two magics collide in a brilliant explosion that rocks the chamber.\n\nBut you're outmatched. The doppelganger is far more powerful, and your counter only delays the inevitable.\n\nTHE END - Defeat: Magical Duel Lost",
      choices: [],
      isEnding: true,
    },

    "dodge-flame": {
      id: "dodge-flame",
      text: "You dodge aside, letting the shadow magic strike the flame lock directly. The dark energy and the lock's fire magic react violently, exploding in a burst of power.\n\nWhen the smoke clears, the flame lock is destroyed—but so is the door frame. You've created an opening but also weakened the prison's structure.\n\nThe ceiling begins to collapse.\n\nTHE END - Defeat: Pyrrhic Destruction (Simplified)",
      choices: [],
      isEnding: true,
    },
  },
};

export const zeldaAndLunaAdventure = {
  storyId: "zelda-and-luna-adventure",
  title: "Zelda and Luna's Magical Bakery Adventure",
  author: "Spencer Kittle",
  description:
    "Join sisters Zelda and Luna on a silly quest to save the town's dessert festival!",
  startNode: "start",
  nodes: {
    start: {
      id: "start",
      text: "Zelda and Luna woke up to the most wonderful smell - freshly baked cookies! But when they ran downstairs to the family bakery, they found something strange.\n\nTheir mom looked worried. 'Oh no! All our magical sprinkles have disappeared! Without them, we can't make treats for the big Dessert Festival tomorrow!'\n\nZelda, the brave older sister, said 'Don't worry, Mom! We'll find them!'\n\nLuna, the clever younger sister, noticed something sparkly on the floor - it was a trail of rainbow glitter leading out the door!\n\nWhat should the sisters do first?",
      choices: [
        {
          text: "Follow the sparkly trail outside",
          next: "follow-trail",
        },
        {
          text: "Ask their friendly neighbor Mr. Whiskers the cat for help",
          next: "ask-whiskers",
        },
        {
          text: "Check the bakery's secret recipe book for clues",
          next: "check-book",
        },
      ],
      isEnding: false,
    },

    "follow-trail": {
      id: "follow-trail",
      text: "Zelda and Luna followed the sparkly trail down the street. It twisted and turned past the playground, around the big oak tree, and led them to the town park.\n\nThere, sitting on a picnic blanket, was a tiny dragon no bigger than a puppy! He was surrounded by all the missing sprinkles and was sneezing rainbow sparkles everywhere!\n\n'ACHOO!' The little dragon sneezed. 'Sorry! I'm Pepper, and I'm allergic to regular pepper, but I LOVE magical sprinkles! They make me sneeze rainbows!'\n\nLuna giggled. 'You took all our sprinkles!'\n\nPepper looked sad. 'I'm sorry. I just wanted to make friends, but everyone runs away when I sneeze rainbows.'\n\nWhat should they do?",
      choices: [
        {
          text: "Invite Pepper to help at the bakery",
          next: "pepper-friend",
        },
        {
          text: "Trade something fun for the sprinkles back",
          next: "trade-sprinkles",
        },
      ],
      isEnding: false,
    },

    "ask-whiskers": {
      id: "ask-whiskers",
      text: "Mr. Whiskers was napping in his favorite sunny spot on the porch. He opened one eye when the sisters approached.\n\n'Mrow?' he yawned. 'Magical sprinkles missing? Well, well. I DID see a tiny dragon sneaking around this morning with a very sparkly bag!'\n\nZelda's eyes went wide. 'A dragon? In our town?'\n\nMr. Whiskers stretched. 'A very small, sneezy one. Left a trail of rainbow sparkles. Headed toward the park, I think.'\n\n'Thank you, Mr. Whiskers!' Luna said, giving him a pat.\n\nWhat should they do next?",
      choices: [
        {
          text: "Run to the park to find the dragon",
          next: "follow-trail",
        },
        {
          text: "Make a friendship gift to give the dragon",
          next: "make-gift",
        },
      ],
      isEnding: false,
    },

    "check-book": {
      id: "check-book",
      text: "Luna pulled out the old recipe book from the shelf. It was covered in flour and had drawings of cookies in the margins.\n\n'Look!' Zelda pointed to a page. 'There's a recipe for Dragon-Friendly Cookies! It says dragons love them more than anything!'\n\nLuna read aloud: 'Mix laughter, kindness, and chocolate chips. Perfect for making dragon friends!'\n\nAt the bottom, a note said: 'If a dragon takes your sprinkles, they probably just want to be friends!'\n\nThe sisters looked at each other and smiled. They knew what to do!",
      choices: [
        {
          text: "Bake the special dragon cookies",
          next: "bake-cookies",
        },
        {
          text: "Go find the dragon first",
          next: "follow-trail",
        },
      ],
      isEnding: false,
    },

    "pepper-friend": {
      id: "pepper-friend",
      text: "Zelda smiled kindly at Pepper. 'We don't run away! Your rainbow sneezes are beautiful! Want to be our friend?'\n\nPepper's eyes lit up with joy. 'Really? You mean it?'\n\nLuna nodded. 'Really! And we have an idea - what if you help us at the bakery? When you sneeze rainbows on our treats, they'll be the most magical desserts ever!'\n\nPepper jumped up excitedly, accidentally sneezing a huge rainbow that made all the flowers in the park bloom different colors.\n\n'That would be AMAZING!' Pepper cheered. 'Here, take all the sprinkles back! I'd rather help you make treats than steal them!'\n\nThe next day at the Dessert Festival, everyone loved the rainbow-sparkle treats. Pepper sneezed gentle rainbows over each cookie and cupcake, and people came from all over town to see the magical bakery with the friendliest dragon!\n\nZelda and Luna had saved the festival AND made a wonderful new friend!\n\nTHE END - You found the best ending! Friendship saves the day!",
      choices: [],
      isEnding: true,
    },

    "trade-sprinkles": {
      id: "trade-sprinkles",
      text: "Luna thought for a moment. 'What if we trade? You give us the sprinkles, and we give you something even better?'\n\nPepper tilted his head. 'What could be better than magical sprinkles?'\n\nZelda grinned. 'How about a lifetime supply of cookies, and you can be our Official Bakery Dragon?'\n\n'With a special dragon apron!' Luna added.\n\nPepper gasped. 'An OFFICIAL position? With an APRON? That sounds wonderful!'\n\nHe carefully packed up all the sprinkles and gave them back. 'Deal! But... what does an Official Bakery Dragon do?'\n\n'Taste test cookies, greet customers, and be our friend!' Zelda said.\n\nAt the festival, Pepper wore a tiny apron that said 'Official Bakery Dragon' and everyone thought he was the cutest helper ever. The bakery's booth was the most popular one there!\n\nTHE END - You did it! Everyone wins when you trade fairly!",
      choices: [],
      isEnding: true,
    },

    "make-gift": {
      id: "make-gift",
      text: "The sisters went back to the bakery and made a special friendship bracelet using colorful ribbons and a little jingle bell.\n\n'Dragons might like shiny, jingling things!' Luna said.\n\nThey also packed a small bag of cookies (not magical ones, just regular delicious ones).\n\nWhen they found Pepper in the park, they offered him the gifts. Pepper's eyes filled with happy tears.\n\n'Nobody's ever made me a present before!' he sniffled, which of course came out as a small rainbow sneeze.\n\nHe put on the bracelet and it jingled cheerfully. 'I love it! Here, you can have all your sprinkles back. I'm sorry I took them. I just wanted to have something special.'\n\n'You ARE special!' Zelda said. 'Want to help us at the festival tomorrow?'\n\nAt the festival, Pepper wore his jingle bracelet proudly and helped the sisters make the best magical treats ever. His happy rainbow sneezes made everything extra special!\n\nTHE END - You won with kindness! Gifts from the heart make the best friends!",
      choices: [],
      isEnding: true,
    },

    "bake-cookies": {
      id: "bake-cookies",
      text: "Zelda and Luna got to work in the bakery. They mixed flour, chocolate chips, and lots of giggles into the dough.\n\n'Don't forget the kindness!' Luna reminded her sister.\n\n'How do you add kindness to cookies?' Zelda wondered.\n\n'We make them with love and share them with everyone!' Luna said wisely.\n\nSoon the bakery smelled amazing! They packed the warm cookies in a nice box and followed Mr. Whiskers' directions to the park.\n\nWhen they found Pepper the dragon, they offered him the box of cookies.\n\n'These are for you!' Zelda said. 'We want to be your friend!'\n\nPepper took a bite and his eyes went wide. 'These are the most delicious cookies EVER!' He sneezed a rainbow that spelled out 'THANK YOU' in the sky!\n\n'Here are your sprinkles back,' Pepper said happily. 'And I'll help you at the festival tomorrow!'\n\nThe festival was a huge success, and Pepper became the town's favorite dragon friend!\n\nTHE END - You baked your way to victory! Yummy!",
      choices: [],
      isEnding: true,
    },
  },
};

export const stories = [sampleStory, zeldaAndLunaAdventure];
