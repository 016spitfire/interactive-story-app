export const crystalThrone = {
  storyId: "the-crystal-throne",
  title: "The Crystal Throne",
  author: "Spencer Kittle",
  description:
    "A fantasy adventure where your choices determine the fate of a kingdom on the brink of war.",

  // Organization
  category: "fantasy",
  series: "crystal-kingdom",
  seriesOrder: undefined, // To be determined when more stories are added

  // Filtering/Discovery
  tags: ["dark", "mystery", "adventure", "magic"],
  difficulty: "medium",
  estimatedTime: "15-20 minutes",

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

    "pick-locks": {
      id: "pick-locks",
      text: "You focus your magic on the locks, trying to sense their mechanisms. The crown lock resists immediately—it's not mechanical at all, but bound by an enchantment of loyalty and service.\n\nAs you probe deeper, the locks react. A wave of magical feedback slams into your mind, and you stagger back. The prisoner groans from behind the door.\n\n'Don't... force them,' a weak voice calls out. 'The locks... respond to truth, not power.'\n\nYou've wasted precious time. Footsteps echo from the passage above.",
      choices: [
        {
          text: "Call out to identify the prisoner",
          next: "call-out",
        },
        {
          text: "Search the chamber for another way",
          next: "search-chamber",
        },
        {
          text: "Hide and wait for whoever is coming",
          next: "hide-chamber",
        },
      ],
      isEnding: false,
    },

    "search-chamber": {
      id: "search-chamber",
      text: "You search the circular chamber methodically. The walls are covered in Old Realm inscriptions, philosophical riddles about kingship, sacrifice, and truth. There are no physical keys anywhere.\n\nAs you read the inscriptions, you begin to understand—the 'three keys' aren't objects. They're concepts: service (the crown), truth (the heart), and transformation (the flame).\n\nThe prisoner coughs weakly behind the door. You're running out of time to make a choice.",
      choices: [
        {
          text: "Call out to the prisoner for guidance",
          next: "call-out",
        },
        {
          text: "Attempt to unlock the crown lock through an act of service",
          next: "service-unlock",
        },
        {
          text: "Study the inscriptions more carefully",
          next: "study-inscriptions",
        },
      ],
      isEnding: false,
    },

    "hide-chamber": {
      id: "hide-chamber",
      text: "You quickly duck into a shadowed alcove as heavy footsteps descend into the chamber. Three guards enter, led by someone wearing royal robes—but you can see the wrongness in how they move, how shadows cling to them unnaturally.\n\nThe doppelganger king approaches the sealed door. 'Still alive in there, Aldric?' it mocks. 'How does it feel, knowing your kingdom thrives under my rule while you rot?'\n\nYou have the element of surprise, but you're outnumbered.",
      choices: [
        {
          text: "Attack the doppelganger while its back is turned",
          next: "fight-doppelganger",
        },
        {
          text: "Wait for them to leave and try again",
          next: "promise-return",
        },
        {
          text: "Flee before they discover you",
          next: "flee-chaos",
        },
      ],
      isEnding: false,
    },

    "service-unlock": {
      id: "service-unlock",
      text: "You kneel before the door and speak clearly: 'I seek no crown for myself. I am a mage of Valoreth, sworn to serve its people and protect its rightful ruler. My service is my key.'\n\nThe crown lock glows softly and clicks open. You feel a surge of hope—one lock down, two to go.\n\nBut before you can celebrate, you hear voices approaching from above. The doppelganger and his guards are returning to check on the prisoner.",
      choices: [
        {
          text: "Quickly try to open the heart lock",
          next: "heart-truth",
        },
        {
          text: "Hide and observe",
          next: "hide-chamber",
        },
        {
          text: "Stand your ground and declare yourself",
          next: "declare-servant",
        },
      ],
      isEnding: false,
    },

    "study-inscriptions": {
      id: "study-inscriptions",
      text: "You trace your fingers over the Old Realm script, reading carefully. The inscriptions tell a story: a king who sacrificed himself to save his kingdom, a mage who gave up power to serve truth, a flame that consumed darkness but was itself transformed.\n\nThe pattern becomes clear—each lock requires a sacrifice of ego, a truth spoken aloud, and a willingness to be changed. You're beginning to understand what must be done.\n\nFootsteps echo from above. Time is running out.",
      choices: [
        {
          text: "Put your understanding into action with the locks",
          next: "service-unlock",
        },
        {
          text: "Call to the prisoner for confirmation",
          next: "call-out",
        },
        {
          text: "Prepare to face whoever is coming",
          next: "hide-chamber",
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
      text: "You hide behind the ancient shelves and watch. Princess Elena enters the archives, moving with purpose. She's searching for something specific.\n\nShe pulls out a tome on shadow magic and begins reading frantically. Then she notices you.\n\n'You're alive!' she whispers urgently. 'I thought the wraiths got you. We need to work together—I know where my father is imprisoned.'",
      choices: [
        {
          text: "Trust Elena and share what you know",
          next: "trust-elena",
        },
        {
          text: "Question how she knows about the imprisonment",
          next: "question-elena",
        },
        {
          text: "Suggest she might be compromised by shadow magic",
          next: "suspect-elena",
        },
      ],
      isEnding: false,
    },

    "trust-elena": {
      id: "trust-elena",
      text: "You step out from hiding and quickly share everything—Meredith's letter, the doppelganger king, the Keeper's Gate. Elena listens intently, then nods.\n\n'I've suspected for weeks that something was wrong with Father,' she says. 'He's been... different. Colder. But I couldn't prove it until tonight when I saw his shadow move independently.'\n\nShe pulls out a small crystal pendant. 'Meredith gave me this before she died. She said it would reveal the path to the Keeper's Gate. We need to go now, before the doppelganger realizes we're working together.'",
      choices: [
        {
          text: "Follow Elena to the Keeper's Gate",
          next: "elena-leads-prison",
        },
        {
          text: "Suggest getting more allies first",
          next: "gather-allies",
        },
      ],
      isEnding: false,
    },

    "question-elena": {
      id: "question-elena",
      text: "'How do you know he's imprisoned?' you ask carefully. 'How do you know this isn't another shadow deception?'\n\nElena's eyes flash with hurt, then understanding. 'You're right to be cautious. Here—' She extends her hand toward a shaft of moonlight. Her shadow falls naturally, moving only as she moves.\n\n'I'm real,' she says quietly. 'Meredith came to me three days ago. She knew she was being watched, so she couldn't be direct. But she left me clues, and tonight... tonight I saw the thing wearing my father's face. Its eyes were wrong.'\n\nShe shows you a pendant. 'This will lead us to him. But we must hurry.'",
      choices: [
        {
          text: "Apologize and work together",
          next: "elena-leads-prison",
        },
        {
          text: "Remain cautious and follow at a distance",
          next: "follow-cautiously",
        },
      ],
      isEnding: false,
    },

    "suspect-elena": {
      id: "suspect-elena",
      text: "You take a step back. 'How do I know you're not compromised? The shadow wraiths could be using you.'\n\nElena's face falls. 'I... I understand your suspicion. But we don't have time for this.' She turns to leave. 'I'm going to free my father with or without your help. If you trust Meredith's judgment, she trusted me.'\n\nShe disappears into the shadows of the archives. You're left with a choice: trust your paranoia, or trust Meredith's dying actions.",
      choices: [
        {
          text: "Follow Elena and apologize",
          next: "follow-apologize",
        },
        {
          text: "Go to the prison alone via the marked passage",
          next: "marked-passage",
        },
      ],
      isEnding: false,
    },

    "follow-apologize": {
      id: "follow-apologize",
      text: "You catch up to Elena in the corridor. 'Wait! I'm sorry. This whole night has been... I don't know who to trust anymore.'\n\nShe stops and turns. 'I know. Meredith's dead, my father's imprisoned, and something wearing his face sits on the throne. Trust is a luxury we can't afford. But we're all each other has.'\n\nShe extends her hand. You take it.\n\n'Now let's go save my father,' she says with grim determination.",
      choices: [
        {
          text: "Head to the Keeper's Gate together",
          next: "elena-leads-prison",
        },
      ],
      isEnding: false,
    },

    "elena-leads-prison": {
      id: "elena-leads-prison",
      text: "Elena leads you through hidden passages you never knew existed, the crystal pendant glowing faintly in her hand. You descend deep beneath the castle until you reach the circular chamber with the three-locked door.\n\n'The Keeper's Gate,' Elena breathes. 'Father!' she calls through the door.\n\n'Elena?' The king's voice is weak but unmistakable. 'Is that really you?'\n\n'We're getting you out,' she promises, examining the locks: crown, heart, and flame.\n\nYou explain what you learned in the archives about the locks requiring truth, not force.",
      choices: [
        {
          text: "Work together to unlock the crown lock through service",
          next: "elena-crown-lock",
        },
        {
          text: "Let Elena try the heart lock first",
          next: "elena-heart-lock",
        },
      ],
      isEnding: false,
    },

    "elena-crown-lock": {
      id: "elena-crown-lock",
      text: "You and Elena place your hands on the crown lock together. You speak first: 'I seek no crown, only to serve the kingdom and its people.'\n\nElena continues: 'I am a princess, but that's just a title. What matters is my duty to protect those I love and those I'm sworn to serve.'\n\nThe crown lock glows brilliant gold and clicks open. King Aldric calls from behind the door: 'That's my girl. Two more locks, but hurry—I can feel the doppelganger's magic searching for you.'",
      choices: [
        {
          text: "Elena speaks her heart's truth for the second lock",
          next: "elena-unlocks-heart",
        },
        {
          text: "You share a personal truth for the heart lock",
          next: "mage-unlocks-heart",
        },
      ],
      isEnding: false,
    },

    "elena-heart-lock": {
      id: "elena-heart-lock",
      text: "Elena places her hand on the heart lock and speaks: 'I'm afraid. I'm terrified. Not just for my father, but for everyone in this kingdom. I don't know if I'm strong enough for what's coming. But I'm here anyway.'\n\nThe heart lock chimes softly and opens. She wipes tears from her eyes and manages a smile.\n\n'One more,' you say, eyeing the flame lock as shadows begin to gather at the chamber entrance. Time is running out.",
      choices: [
        {
          text: "Quickly work on the crown lock before company arrives",
          next: "rush-crown-lock",
        },
        {
          text: "Prepare to defend while Elena tries the flame lock",
          next: "defend-elena-flame",
        },
      ],
      isEnding: false,
    },

    "elena-unlocks-heart": {
      id: "elena-unlocks-heart",
      text: "Elena takes a deep breath and places her hand on the heart lock. 'I've spent years trying to be the perfect princess. Strong, composed, unafraid. But the truth is... I'm scared. I miss my father. I don't want to lose anyone else. And I don't know if I have the strength to face what's coming.'\n\nThe heart lock opens with a gentle chime. You hear footsteps approaching from above—the doppelganger knows you're here.\n\n'The flame lock,' you say urgently. 'We need transformation, sacrifice—'\n\nBefore you can finish, shadow magic floods the chamber. The doppelganger has arrived.",
      choices: [
        {
          text: "Both of you channel magic into the flame lock together",
          next: "dual-flame-unlock",
        },
        {
          text: "Defend Elena while she focuses on the lock",
          next: "defend-final-lock",
        },
      ],
      isEnding: false,
    },

    "mage-unlocks-heart": {
      id: "mage-unlocks-heart",
      text: "You step forward and place your hand on the heart lock. 'I became a mage because I wanted power, recognition. But Meredith taught me that magic is about service. Tonight she died trusting me to do the right thing. I'm terrified I'll fail her memory, fail this kingdom. But I'm here trying anyway.'\n\nThe lock opens. Elena squeezes your shoulder. 'Meredith chose well.'\n\nShadows begin pouring into the chamber. The doppelganger has found you. One lock remains.",
      choices: [
        {
          text: "Both channel magic into the flame lock",
          next: "dual-flame-unlock",
        },
        {
          text: "Hold off the shadows while Elena tries the flame",
          next: "defend-final-lock",
        },
      ],
      isEnding: false,
    },

    "dual-flame-unlock": {
      id: "dual-flame-unlock",
      text: "You and Elena join hands and place them on the flame lock. Together you speak: 'We transform from fear to courage, from doubt to action, from shadow to light!'\n\nYour combined magic blazes through the lock as the doppelganger's shadows crash against you. The flame lock shatters in a burst of fire, and the door swings open.\n\nKing Aldric stumbles out, weak but alive. The moment he enters the chamber, the doppelganger's form flickers.\n\n'No!' it shrieks. 'I am the king! I am real!'\n\n'You are nothing but shadow,' Aldric says firmly, 'and shadow cannot stand in the light.'",
      choices: [
        {
          text: "All three of you combine magic to banish it",
          next: "family-banishment",
        },
        {
          text: "Defend the king while he performs the banishment",
          next: "protect-the-king",
        },
      ],
      isEnding: false,
    },

    "family-banishment": {
      id: "family-banishment",
      text: "King Aldric, Princess Elena, and you join hands in a triangle, magic flowing between you. The king speaks the words of banishment, Elena channels her royal bloodline's power, and you provide the magical framework.\n\nThe doppelganger's form dissolves, screaming curses as it's torn from this reality. Throughout the castle, shadow wraiths flee their hosts and dissipate.\n\nWhen the light fades, King Aldric embraces his daughter. Then he turns to you.\n\n'You honored Meredith's trust and saved my kingdom. I name you Royal Protector and grant you her seat on my council. Together, we'll make sure shadow never threatens Valoreth again.'\n\nIn the days that follow, the kingdom celebrates its liberation. The Crystal Throne stands secure, guarded not just by magic, but by the bonds of trust and courage forged in its darkest hour.\n\nTHE END - True Victory: Light Prevails Through Unity",
      choices: [],
      isEnding: true,
    },

    "protect-the-king": {
      id: "protect-the-king",
      text: "You and Elena form a shield of light around the weakened king as he begins the banishment ritual. Shadow magic hammers against your barrier, but you hold firm.\n\nKing Aldric's voice grows stronger with each word of the ancient spell. Elena's royal magic reinforces your shield. The three of you work in perfect synchronization.\n\nThe doppelganger makes one final desperate lunge, but your combined defense holds. White light explodes through the chamber as the creature is banished forever.\n\nKing Aldric staggers but remains standing. 'Well done, both of you. The kingdom owes you a debt beyond measure.'\n\nAt a ceremony before the Crystal Throne, you're named Royal Defender, and Elena is formally recognized as Crown Princess and heir. The kingdom has been saved, and a new era of vigilance against shadow begins.\n\nTHE END - Victory: The Shield and the Crown",
      choices: [],
      isEnding: true,
    },

    "defend-final-lock": {
      id: "defend-final-lock",
      text: "You step between the doppelganger and Elena, raising a blazing shield of light. 'Elena, the flame lock! I'll hold them off!'\n\nShadow magic crashes against your barrier. You pour everything you have into holding the line while Elena works frantically on the final lock.\n\n'Transformation requires sacrifice,' she whispers, then louder: 'I offer myself—my fear, my doubt, my former self—to become who the kingdom needs!'\n\nThe flame lock explodes open. The door swings wide and King Aldric emerges. Your shield fails and you collapse, but the king catches you.\n\n'Well done, young mage,' he says, then turns to face his dark reflection.",
      choices: [
        {
          text: "Recover and help banish the doppelganger",
          next: "recover-and-finish",
        },
        {
          text: "Stay down and let the king handle it",
          next: "king-solo-finish",
        },
      ],
      isEnding: false,
    },

    "recover-and-finish": {
      id: "recover-and-finish",
      text: "You force yourself to your feet, drawing on reserves you didn't know you had. Together with King Aldric and Elena, you face the doppelganger.\n\n'Three against one,' the creature hisses. 'You think that's enough?'\n\n'It's not about numbers,' you say. 'It's about truth.'\n\nThe three of you strike as one—royal authority, royal bloodline, and magical power unified. The doppelganger cannot stand against the combined assault and dissolves into nothing.\n\nYou've saved the kingdom and forged an unbreakable alliance. At your side stand a grateful king and a princess who will one day be a great queen. And you? You're the Royal Protector, defender against shadow, and proof that courage can triumph over any darkness.\n\nTHE END - Victory: The Triumvirate of Light",
      choices: [],
      isEnding: true,
    },

    "king-solo-finish": {
      id: "king-solo-finish",
      text: "You're too drained to continue. You watch as King Aldric confronts his shadow self, weakened but determined.\n\nThe battle is fierce, but the king's rightful claim to the throne gives him power the doppelganger cannot match. With Elena's support, Aldric speaks the words of banishment, and the creature dissolves.\n\nYou wake three days later in the royal infirmary. The healers say you pushed yourself past your limits. King Aldric visits personally.\n\n'You freed me and gave me the chance to save my kingdom,' he says. 'Rest, recover, and know that you have my eternal gratitude. A position on my council awaits when you're ready.'\n\nYou succeeded, though the cost was high. But the kingdom stands free of shadow, and that's what matters.\n\nTHE END - Victory: The Price of Freedom",
      choices: [],
      isEnding: true,
    },

    "gather-allies": {
      id: "gather-allies",
      text: "'We should gather more allies first,' you suggest. 'The royal guard, loyal nobles, anyone we can trust.'\n\nElena shakes her head. 'Every moment we wait, the doppelganger consolidates power. And how do we know who's compromised? No—we strike now, while we still can.'\n\nShe's right. You can see it in her eyes. This is the moment that defines everything.\n\n'Then let's go save your father,' you say.",
      choices: [
        {
          text: "Head to the Keeper's Gate",
          next: "elena-leads-prison",
        },
      ],
      isEnding: false,
    },

    "follow-cautiously": {
      id: "follow-cautiously",
      text: "You follow Elena but keep your distance, detection spell at the ready. She leads you through the passages just as she described, down to the Keeper's Gate.\n\nWhen she reaches the locked door and calls to her father, his weak response confirms everything. You were wrong to doubt her.\n\nYou step forward. 'I'm sorry. I should have trusted Meredith's judgment—and yours.'\n\nElena nods. 'Apology accepted. Now help me with these locks.'",
      choices: [
        {
          text: "Work together on the locks",
          next: "elena-crown-lock",
        },
      ],
      isEnding: false,
    },

    "rush-crown-lock": {
      id: "rush-crown-lock",
      text: "You quickly turn to the crown lock and speak: 'I serve the kingdom, not myself. My power is offered in service!'\n\nThe lock clicks open just as the doppelganger appears at the chamber entrance with shadow-possessed guards.\n\n'How touching,' it sneers. 'But you're too late.'\n\nElena stands defiantly. 'One lock left, and you can't stop us!'\n\nShe places her hands on the flame lock as darkness floods toward you.",
      choices: [
        {
          text: "Defend Elena while she works",
          next: "final-stand-flame",
        },
        {
          text: "Help her channel the transformation together",
          next: "shared-transformation",
        },
      ],
      isEnding: false,
    },

    "final-stand-flame": {
      id: "final-stand-flame",
      text: "You stand between Elena and the approaching shadows, channeling every bit of power into a barrier of light. Behind you, Elena speaks desperately to the flame lock.\n\n'I transform my fear into strength, my doubt into certainty—'\n\nA shadow tendril pierces your barrier, striking you. Pain explodes through your body, but you hold the line.\n\n'—my weakness into power!' Elena shouts.\n\nThe flame lock shatters. The door opens. King Aldric stumbles out, and the doppelganger's form flickers in his presence.\n\nYou collapse, but you've bought enough time. The king and princess finish what you started.\n\nTHE END - Victory: The Last Stand",
      choices: [],
      isEnding: true,
    },

    "shared-transformation": {
      id: "shared-transformation",
      text: "You abandon defense and join Elena at the flame lock. Together you channel your magic, your willingness to be changed by this trial.\n\n'We were students,' you say. 'Now we're defenders!'\n\n'I was a sheltered princess,' Elena adds. 'Now I'm a warrior!'\n\nThe flame lock explodes open. King Aldric emerges just as the shadows reach you. But now you're not alone—the king channels his royal authority, the three of you forming a unified defense.\n\nThe doppelganger cannot stand against the truth of your transformation. It dissolves, and the kingdom is saved.\n\nTHE END - Victory: Forged in Flame",
      choices: [],
      isEnding: true,
    },

    "defend-elena-flame": {
      id: "defend-elena-flame",
      text: "You position yourself at the chamber entrance, preparing to defend against whatever comes. 'Elena, work on the locks. I'll buy you time.'\n\nShe nods and focuses on the crown lock while you watch the passage. You hear her speak: 'I am a princess, but that's just a title. My duty is to my people, to my father, to the truth.'\n\nThe crown lock opens. Footsteps echo from above—company is coming.\n\n'Hurry!' you urge.",
      choices: [
        {
          text: "Hold your position while she continues",
          next: "hold-position",
        },
        {
          text: "Help her with the remaining locks",
          next: "abandon-defense",
        },
      ],
      isEnding: false,
    },

    "hold-position": {
      id: "hold-position",
      text: "You maintain your defensive position as Elena works through the heart lock, speaking her fears and truths. The lock opens just as shadow-possessed guards flood into the passage.\n\nYou unleash a blinding flash of light, scattering them temporarily. 'Elena! The last lock!'\n\nShe turns to the flame lock as the doppelganger itself appears, shadow magic swirling.\n\n'One mage and one princess,' it mocks. 'You cannot win.'\n\n'We don't need to win,' Elena says, pressing her hands to the flame lock. 'We just need to hold long enough!'\n\nShe channels transformation magic. You hold the shadows at bay with everything you have. The flame lock shatters—\n\n—and King Aldric steps forth.",
      choices: [
        {
          text: "All three of you face the doppelganger",
          next: "family-banishment",
        },
      ],
      isEnding: false,
    },

    "abandon-defense": {
      id: "abandon-defense",
      text: "You abandon your defensive position and rush to help Elena. Together you work through the heart and flame locks, speaking truths and channeling transformation.\n\nBut you've left the entrance undefended. The doppelganger appears just as the final lock breaks.\n\n'Foolish,' it says, raising shadow-wreathed hands.\n\nThe door swings open. King Aldric emerges, weak but radiating authority. 'You're finished,' he tells his dark reflection.\n\nTogether, the three of you banish the creature. The kingdom is saved, though you realize guarding the entrance might have prevented the final confrontation from being quite so close.\n\nStill—victory is victory.\n\nTHE END - Victory: Calculated Risk",
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
      text: "You focus your power and strike at Garrett's shadow wraith with purifying light. The creature shrieks and dissolves. Garrett collapses, freed but unconscious.\n\nBut destroying one wraith alerts all the others. Shadow magic floods the castle. You've won the battle but alerted the enemy.\n\nYou have moments before they converge on you.",
      choices: [
        {
          text: "Flee to the prison immediately",
          next: "emergency-flight-prison",
        },
        {
          text: "Try to wake Garrett and recruit him",
          next: "wake-garrett",
        },
        {
          text: "Make a stand here and fight",
          next: "doomed-stand",
        },
      ],
      isEnding: false,
    },

    "emergency-flight-prison": {
      id: "emergency-flight-prison",
      text: "You sprint through the castle as shadow wraiths pour from every corridor. Your knowledge of the secret passages barely keeps you ahead of them.\n\nYou reach the marked passage and descend to the Keeper's Gate. Behind you, the shadows follow—you've led them right to the prison.\n\nYou must free the king before they arrive. The locks glow before you: crown, heart, flame. No time for hesitation.",
      choices: [
        {
          text: "Rush through all three locks with desperate truths",
          next: "desperate-unlocking",
        },
        {
          text: "Prepare to defend the gate",
          next: "gate-defense",
        },
      ],
      isEnding: false,
    },

    "desperate-unlocking": {
      id: "desperate-unlocking",
      text: "You place your hands on each lock in turn, speaking rapid truths:\n\n'I serve!' Crown lock clicks.\n\n'I'm terrified!' Heart lock opens.\n\n'Transform me or destroy me, I don't care!' Flame lock shatters.\n\nThe door swings open as shadows flood the chamber. King Aldric stumbles out, sees the danger, and immediately begins casting.\n\nWeakened but determined, together you banish the shadow wraiths. The doppelganger, sensing its minions' destruction, flees the castle rather than face the true king.\n\nYou've won, though the doppelganger escapes to threaten another day. Still, the kingdom is free, and the king has reclaimed his throne.\n\nTHE END - Victory: The Shadow Flees",
      choices: [],
      isEnding: true,
    },

    "gate-defense": {
      id: "gate-defense",
      text: "You turn to face the approaching shadows, placing yourself between them and the locked gate. Behind you, you hear the imprisoned king calling: 'Who's there? Are you here to help or hurt?'\n\n'Help!' you shout back, then unleash everything you have at the shadows.\n\nYou fight brilliantly, destroying wave after wave. But there are too many. They overwhelm you, and your last thought is that at least you tried.\n\nTHE END - Defeat: Last Stand at the Gate",
      choices: [],
      isEnding: true,
    },

    "wake-garrett": {
      id: "wake-garrett",
      text: "You try to wake Garrett, shaking him desperately. His eyes flutter open, confused.\n\n'What... what happened?' he gasps.\n\n'You were possessed. The king is a doppelganger. I need your help.'\n\nHe struggles to his feet just as shadow wraiths burst into the room. But there's no time—they're upon you.\n\nTogether, you manage to destroy several more wraiths, but you're overwhelmed. Your brave attempt to recruit an ally cost precious seconds you couldn't afford.\n\nTHE END - Defeat: Too Slow",
      choices: [],
      isEnding: true,
    },

    "doomed-stand": {
      id: "doomed-stand",
      text: "You plant your feet and prepare to fight. Shadows pour in from every direction. You destroy them by the dozen, your magic blazing brilliantly.\n\nBut for every wraith you destroy, two more appear. Eventually, your power runs dry. You collapse, drained.\n\nThe last thing you see is the doppelganger king standing over you. 'Brave,' it says. 'But foolish.'\n\nTHE END - Defeat: Valiant but Doomed",
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
      text: "You release your shield and sprint for the lower levels, racing toward the Keeper's Gate. The shadow wraiths pursue, but your head start is enough.\n\nYou reach the marked passage and descend, hearing Princess Elena's scream echo behind you. The cost of your escape weighs heavily on your conscience, but you press on.\n\nYou must free the king. That's what matters. That's what Meredith would want.\n\nBut Elena's scream follows you into the darkness.",
      choices: [
        {
          text: "Continue to the prison—the king is the priority",
          next: "guilt-ridden-rescue",
        },
        {
          text: "Turn back to help Elena",
          next: "return-for-elena",
        },
      ],
      isEnding: false,
    },

    "guilt-ridden-rescue": {
      id: "guilt-ridden-rescue",
      text: "You force yourself forward, each step heavier than the last. You reach the Keeper's Gate and work frantically on the locks, speaking the truths needed to open them.\n\nThe crown lock: 'I serve, though I abandoned someone who needed me.'\n\nThe heart lock: 'I am afraid that I've made the wrong choice.'\n\nThe flame lock: 'I must transform my guilt into purpose.'\n\nThe door opens. King Aldric stumbles out. 'Where's Elena?' he asks immediately.\n\nYour silence tells him everything.",
      choices: [
        {
          text: "Explain what happened and prepare to rescue her",
          next: "rescue-elena-mission",
        },
        {
          text: "Confess you left her to save him",
          next: "confession-ending",
        },
      ],
      isEnding: false,
    },

    "return-for-elena": {
      id: "return-for-elena",
      text: "You can't do it. You can't leave her. You turn and race back up the passage toward her scream.\n\nYou burst into the hall to find Elena surrounded by shadow wraiths, fighting desperately with a glowing sword—you didn't even know she could fight.\n\n'I thought you'd abandoned me!' she shouts.\n\n'Never!' you respond, unleashing magic to drive back the shadows.\n\nTogether, you fight your way clear and descend to the Keeper's Gate.",
      choices: [
        {
          text: "Work together to free the king",
          next: "elena-leads-prison",
        },
      ],
      isEnding: false,
    },

    "rescue-elena-mission": {
      id: "rescue-elena-mission",
      text: "You explain how you fled to free him, how you heard her scream but continued on. King Aldric's face hardens.\n\n'Then we go get her. Now.' Despite his weakness, he radiates authority.\n\nYou race back through the castle together. You find Elena imprisoned in a shadow-binding, the doppelganger standing over her.\n\n'Welcome, Your Majesty,' the creature mocks. 'Come to surrender?'\n\nBut with the real king present, the doppelganger's power wavers. Together, you free Elena and banish the shadow creature.\n\nElena won't meet your eyes for days afterward. You saved the kingdom, but trust is broken. Some victories carry bitter costs.\n\nTHE END - Victory: The Weight of Choice",
      choices: [],
      isEnding: true,
    },

    "confession-ending": {
      id: "confession-ending",
      text: "You confess everything—how you chose to save him over protecting her, how you heard her scream and kept running.\n\nKing Aldric listens in silence. Then: 'You made a tactical decision in an impossible situation. But my daughter paid the price.'\n\nTogether you return to find Elena captured by the doppelganger, used as leverage. You manage to free her and banish the creature, but the king's eyes hold disappointment.\n\nYou're granted no honors, no title. The kingdom is saved, but you'll always be the mage who left the princess to die. Some tactical decisions destroy more than they save.\n\nTHE END - Victory: The Tactical Failure",
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
      text: "You ask the king where the keys are. He responds weakly: 'Meredith said... the keys aren't physical objects. They're truths. Virtues. Crown, heart, and flame...'\n\nBut before he can explain more, the doppelganger arrives with guards, shadow magic swirling.\n\n'How convenient,' the creature says. 'All my problems in one place.'",
      choices: [
        {
          text: "Use what the king told you to quickly unlock the door",
          next: "rapid-unlock-attempt",
        },
        {
          text: "Fight the doppelganger to buy time",
          next: "desperate-combat",
        },
      ],
      isEnding: false,
    },

    "rapid-unlock-attempt": {
      id: "rapid-unlock-attempt",
      text: "You spin and place your hands on the locks, speaking frantically:\n\n'Service!' Crown clicks. 'Truth!' Heart opens. 'Change!' Flame shatters.\n\nThe door swings open and King Aldric stumbles out just as the doppelganger strikes. The creature's magic hits you, but the king is free.\n\nEven weakened, his presence disrupts the doppelganger's power. Together, you banish it.\n\nYou survive, though barely. The healers say you'll recover fully. King Aldric visits daily, calling you the bravest mage in the kingdom.\n\nTHE END - Victory: Split-Second Timing",
      choices: [],
      isEnding: true,
    },

    "desperate-combat": {
      id: "desperate-combat",
      text: "You step between the doppelganger and the locked door, buying time for... you're not sure what. But you have to try.\n\nYou fight brilliantly, but you're outmatched. The doppelganger's power is overwhelming. You fall, and your last thought is at least you tried to protect the king.\n\nBehind the door, King Aldric hears your sacrifice. Somehow, impossibly, he gathers enough strength to break through the locks himself. He emerges and banishes the doppelganger, but you're gone.\n\nThe kingdom is saved, but at the cost of its youngest, bravest mage. A statue in your honor stands before the Crystal Throne.\n\nTHE END - Heroic Death: The Ultimate Price",
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
      text: "You reach deep within yourself, summoning your passion, your conviction, your inner fire. Your hands burst into flame—not destructive, but warm and alive.\n\nThe flame lock recognizes true passion and clicks open. The door swings wide, and the true king stumbles free.\n\nBut you've taken too long. Shadow magic floods the chamber as the doppelganger arrives with its guards.\n\n'How touching,' the creature sneers. 'But ultimately futile.'",
      choices: [
        {
          text: "Stand with the king and fight together",
          next: "king-mage-alliance",
        },
        {
          text: "Tell the king to flee while you hold them off",
          next: "sacrifice-for-king",
        },
      ],
      isEnding: false,
    },

    "king-mage-alliance": {
      id: "king-mage-alliance",
      text: "You stand shoulder to shoulder with King Aldric. Though he's weak from imprisonment, his presence alone makes the doppelganger's form flicker.\n\n'Together,' you say.\n\n'Together,' the king agrees.\n\nYou provide the magical power, he provides the royal authority and knowledge of banishment. Your combined assault catches the doppelganger off-guard—it expected you to be separated, vulnerable.\n\nBut together, you're unstoppable. The creature dissolves with a final scream, and throughout the castle, shadow wraiths dissipate.\n\nKing Aldric claps you on the shoulder. 'You saved my life and my kingdom. Name your reward.'\n\nTHE END - Victory: The King and the Mage",
      choices: [],
      isEnding: true,
    },

    "sacrifice-for-king": {
      id: "sacrifice-for-king",
      text: "'Run!' you shout at the king. 'I'll hold them!'\n\nYou don't wait for his response. You unleash everything you have—fire, light, force—creating a wall of magic between the king and the shadows.\n\nYou hear the king's footsteps retreating. Good. At least he'll escape.\n\nThe doppelganger's magic overwhelms you. Your last thought is that Meredith would be proud—you gave everything for the kingdom.\n\nBut King Aldric doesn't run. He circles back with loyal guards he managed to free, and together they destroy the doppelganger. You wake days later in the royal infirmary, the kingdom's greatest hero.\n\nTHE END - Victory: The Noble Sacrifice",
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
      text: "You dodge aside, letting the shadow magic strike the flame lock directly. The dark energy and the lock's fire magic react violently, exploding in a burst of power.\n\nWhen the smoke clears, the flame lock is destroyed—but so is the door frame. You've created an opening but also weakened the prison's structure.\n\nStone cracks above you. The ceiling begins to collapse.",
      choices: [
        {
          text: "Pull the king out through the damaged opening",
          next: "rescue-through-rubble",
        },
        {
          text: "Use magic to hold up the ceiling",
          next: "hold-the-ceiling",
        },
      ],
      isEnding: false,
    },

    "rescue-through-rubble": {
      id: "rescue-through-rubble",
      text: "You lunge through the damaged opening and grab King Aldric, hauling him out just as massive stones crash down where he was standing.\n\nThe passage collapses behind you as you flee. Dust chokes the air. You drag the weakened king up the stairs, through corridors, finally emerging into fresh air.\n\nThe doppelganger finds you there, but with the true king present, its power falters. A final banishment spell ends the threat forever.\n\nYou saved the king by inches. The prison is destroyed, but the kingdom is free.\n\nTHE END - Victory: Narrow Escape",
      choices: [],
      isEnding: true,
    },

    "hold-the-ceiling": {
      id: "hold-the-ceiling",
      text: "You throw your hands up and channel every ounce of magic into holding the collapsing ceiling. Stone grinds against your magical barrier.\n\n'Get out!' you scream at the king through the damaged door.\n\nKing Aldric stumbles through the opening and keeps running. You hold the ceiling for ten more seconds, then twenty, then—\n\nYour power gives out. The ceiling crashes down.\n\nYou wake days later. Somehow, you survived. King Aldric tells you the doppelganger was banished, the kingdom saved. Your sacrifice bought just enough time.\n\nThe healers say you'll never fully recover your magical strength. But the king makes you Royal Advisor, Meredith's true successor.\n\nTHE END - Victory: The Cost of Heroism",
      choices: [],
      isEnding: true,
    },
  },
};
