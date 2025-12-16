export const zeldaLunaAdventure = {
  storyId: "zelda-and-luna-adventure",
  title: "Zelda and Luna's Magical Bakery Adventure",
  author: "Spencer Kittle",
  description:
    "Join sisters Zelda and Luna on a silly quest to save the town's dessert festival!",

  // Organization
  category: "kids",
  series: "zelda-and-luna",
  seriesOrder: 1,

  // Filtering/Discovery
  tags: ["wholesome", "adventure", "magic", "friendship", "problem-solving"],
  difficulty: "easy",
  estimatedTime: "10-15 minutes",

  startNode: "start",
  nodes: {
    start: {
      id: "start",
      text: "Zelda and Luna woke up to the most wonderful smell - freshly baked cookies! But when they ran downstairs to the family bakery, they found something strange.\n\nTheir Meemaw looked worried. 'Oh no! All our magical sprinkles have disappeared! Without them, we can't make treats for the big Dessert Festival tomorrow!'\n\nZelda, the brave older sister, said 'Don't worry, Meemaw! We'll find them!'\n\nLuna, the clever younger sister, noticed something sparkly on the floor - it was a trail of rainbow glitter leading out the door!\n\nWhat should the sisters do first?",
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
      text: "Zelda and Luna followed the sparkly trail down the street. It twisted and turned past the playground, around the big oak tree, and toward the town park.\n\nBut wait! The trail split into two paths. One led to the playground slide where something was making funny sneezing sounds. The other path went toward the pond where they could see rainbow sparkles reflecting on the water.\n\n'Which way should we go?' Luna asked.\n\nWhat should the sisters choose?",
      choices: [
        {
          text: "Follow the sneezing sounds to the playground",
          next: "playground-path",
        },
        {
          text: "Check out the rainbow sparkles at the pond",
          next: "pond-path",
        },
      ],
      isEnding: false,
    },

    "playground-path": {
      id: "playground-path",
      text: "The sisters ran to the playground and found a tiny dragon hiding under the slide. He was sneezing so much that rainbow sparkles were flying everywhere!\n\n'ACHOO! ACHOO!' The little dragon sneezed. 'Oh no, someone found me!'\n\n'Don't be scared!' Luna said gently. 'We're friendly!'\n\nThe dragon peeked out. 'I'm Pepper. I didn't mean to take all your sprinkles! I just... ACHOO!... they're so pretty and they make me sneeze rainbows!'\n\nPepper looked very sorry and a little scared. What should Zelda and Luna do?",
      choices: [
        {
          text: "Tell Pepper it's okay and ask him to be friends",
          next: "pepper-friend-kind",
        },
        {
          text: "Suggest a fun trade for the sprinkles",
          next: "pepper-trade",
        },
        {
          text: "Invite Pepper to play on the playground first",
          next: "playground-fun",
        },
      ],
      isEnding: false,
    },

    "pond-path": {
      id: "pond-path",
      text: "The sisters reached the pond and saw the most beautiful sight! Rainbow sparkles were floating on the water, making patterns like a magic light show.\n\n'Wow!' Zelda gasped. 'This is so pretty!'\n\nSuddenly, they heard a sad little voice from behind some bushes. 'I made that. Do you really think it's pretty?'\n\nA tiny dragon stepped out, looking hopeful but nervous. His nose was all sparkly from sniffling.\n\n'I'm Pepper,' he said quietly. 'I took your sprinkles to make the pond beautiful. Everyone always runs away from my rainbow sneezes, so I tried to make something nice instead.'\n\nWhat should the sisters say?",
      choices: [
        {
          text: "Tell Pepper the pond IS beautiful and he's talented!",
          next: "encourage-pepper",
        },
        {
          text: "Ask if Pepper wants to make something beautiful together",
          next: "create-together",
        },
      ],
      isEnding: false,
    },

    "ask-whiskers": {
      id: "ask-whiskers",
      text: "Mr. Whiskers was napping in his favorite sunny spot on the porch. He opened one eye when the sisters approached.\n\n'Mrow?' he yawned. 'Magical sprinkles missing? Well, well. I DID see a tiny dragon sneaking around this morning with a very sparkly bag!'\n\nZelda's eyes went wide. 'A dragon? In our town?'\n\nMr. Whiskers stretched and purred. 'A very small, sneezy one. Left a trail of rainbow sparkles. Seemed lonely. Headed toward the park, I think.'\n\n'Lonely?' Luna repeated. 'Maybe the dragon needs a friend!'\n\nWhat should they do next?",
      choices: [
        {
          text: "Run to the park to find the dragon",
          next: "follow-trail",
        },
        {
          text: "Make a friendship gift to give the dragon",
          next: "make-gift",
        },
        {
          text: "Pack some treats to share with the dragon",
          next: "pack-snacks",
        },
      ],
      isEnding: false,
    },

    "check-book": {
      id: "check-book",
      text: "Luna pulled out the old recipe book from the shelf. It was covered in flour and had drawings of cookies in the margins.\n\n'Look!' Zelda pointed to a page. 'There's a recipe for Dragon-Friendly Cookies! It says dragons love them more than anything!'\n\nLuna read aloud: 'Mix laughter, kindness, and chocolate chips. Perfect for making dragon friends!'\n\nAt the bottom, a note said: 'If a dragon takes your sprinkles, they probably just want to be friends!'\n\nThe sisters looked at each other and smiled. They knew what to do!",
      choices: [
        {
          text: "Bake the special dragon cookies right now",
          next: "bake-cookies-start",
        },
        {
          text: "Go find the dragon first, then bake together",
          next: "follow-trail",
        },
      ],
      isEnding: false,
    },

    "playground-fun": {
      id: "playground-fun",
      text: "Luna had a great idea. 'Pepper, have you ever been on a slide before?'\n\nPepper shook his little dragon head. 'No... people usually tell me to go away.'\n\n'Well, you're going to LOVE it!' Zelda said, helping him climb up the ladder.\n\nWHEEE! Pepper slid down and laughed so hard he sneezed the biggest rainbow ever! It arced over the whole playground.\n\n'That was AMAZING!' Pepper cheered. 'And look - my rainbow sneeze made all the swings glow!'\n\nThe playground looked magical! Pepper was so happy he started dancing, and rainbow sparkles fell from his wings.\n\n'Pepper,' Luna said, 'how would you like to help us at the bakery? Your rainbows could make the festival so special!'\n\nPepper's eyes sparkled with joy.",
      choices: [
        {
          text: "Pepper joins the bakery team!",
          next: "pepper-joins-team",
        },
      ],
      isEnding: false,
    },

    "encourage-pepper": {
      id: "encourage-pepper",
      text: "'Pepper, this is the most beautiful thing we've ever seen!' Zelda said. 'You have a real gift!'\n\nPepper's eyes filled with happy tears (which sparkled, of course). 'You really mean it?'\n\n'Absolutely!' Luna agreed. 'But we need the sprinkles for the festival. What if... what if you came to the festival and made rainbow art there? Everyone would love it!'\n\nPepper thought about it. 'Would they really? Or would they run away?'\n\n'They won't run away when they see how talented you are!' Zelda promised.\n\nPepper smiled the biggest smile. 'Okay! Here are your sprinkles back. And... can I really come to the festival?'\n\n'You're our special guest!' Luna said.",
      choices: [
        {
          text: "Prepare for the festival together",
          next: "festival-preparation",
        },
      ],
      isEnding: false,
    },

    "create-together": {
      id: "create-together",
      text: "'Pepper, what if we made something beautiful TOGETHER?' Luna suggested. 'You could use your rainbow sneezes, and we could bring decorations from the bakery!'\n\nPepper's eyes lit up. 'Really? You want to create with ME?'\n\n'Of course!' Zelda said. 'But first, can we have the sprinkles back for the festival? Then we can all work together!'\n\nPepper hopped up excitedly. 'Yes! Let's make the whole festival beautiful!'\n\nHe carefully gave back all the sprinkles. Then the three friends brainstormed the most amazing festival decorations ever - cookie garlands, cupcake towers, and rainbow-sneeze sparkles everywhere!\n\nWorking together was so much more fun than working alone!",
      choices: [
        {
          text: "Set up the amazing festival!",
          next: "amazing-festival",
        },
      ],
      isEnding: false,
    },

    "pepper-friend-kind": {
      id: "pepper-friend-kind",
      text: "'It's totally okay, Pepper!' Zelda said warmly. 'Everyone makes mistakes. The important thing is that you're sorry.'\n\nLuna added, 'And your rainbow sneezes aren't scary - they're MAGICAL! You shouldn't have to hide them!'\n\nPepper couldn't believe his ears. 'You... you think they're magical?'\n\n'Super magical!' both sisters said together.\n\nPepper was so happy he sneezed a rainbow that spelled out the words 'THANK YOU' in sparkly letters!\n\n'WOW!' The sisters laughed. 'That's amazing! Hey, we have an idea...'\n\nThey explained about the bakery and the festival. Pepper's face brightened more and more as they talked.",
      choices: [
        {
          text: "Pepper becomes the bakery's magical helper!",
          next: "pepper-bakery-helper",
        },
      ],
      isEnding: false,
    },

    "pepper-trade": {
      id: "pepper-trade",
      text: "Luna thought for a moment. 'What if we made a trade, Pepper? You give us the sprinkles back, and we give you something even better?'\n\nPepper tilted his little dragon head. 'What could be better than magical sprinkles?'\n\nZelda grinned. 'How about a lifetime supply of cookies, and you can be our Official Bakery Dragon?'\n\n'With a special dragon apron!' Luna added. 'And your own little chef hat!'\n\nPepper gasped so hard he accidentally sneezed a double rainbow. 'An OFFICIAL position? With an APRON? AND A HAT?'\n\n'Yep! You'd taste-test cookies, greet customers, and be our friend!' Zelda explained.\n\n'Deal! DEAL! BEST DEAL EVER!' Pepper bounced up and down excitedly.",
      choices: [
        {
          text: "Get Pepper ready for his new job!",
          next: "pepper-gets-ready",
        },
      ],
      isEnding: false,
    },

    "make-gift": {
      id: "make-gift",
      text: "The sisters went back to the bakery. Luna found colorful ribbons and a little jingle bell.\n\n'Let's make a friendship bracelet!' she said. 'Dragons might like shiny, jingling things!'\n\nWhile Luna worked on the bracelet, Zelda packed a small bag with cookies (not magical ones, just regular delicious ones) and wrote a note that said: 'For our new friend!'\n\n'Perfect!' Zelda said. 'Now let's go find this dragon!'\n\nThey hurried to the park, following the sparkly trail. What would happen when they found the dragon?",
      choices: [
        {
          text: "Find the dragon with the gift!",
          next: "gift-meeting",
        },
      ],
      isEnding: false,
    },

    "pack-snacks": {
      id: "pack-snacks",
      text: "Zelda and Luna packed a basket with all sorts of yummy treats - cookies, cupcakes, and fresh bread. They even added some colorful napkins to make it fancy.\n\n'If the dragon is lonely, sharing food is a great way to make friends!' Luna said.\n\nMeemaw smiled. 'That's very thoughtful of you, girls. You have kind hearts.'\n\nWith the basket packed, they headed toward the park. The rainbow trail grew brighter and brighter as they got closer!\n\nWhat would they find?",
      choices: [
        {
          text: "Arrive at the park with the basket",
          next: "basket-meeting",
        },
      ],
      isEnding: false,
    },

    "bake-cookies-start": {
      id: "bake-cookies-start",
      text: "Zelda and Luna got to work in the bakery. They mixed flour, chocolate chips, and lots of giggles into the dough.\n\n'Don't forget the kindness!' Luna reminded her sister.\n\n'How do you add kindness to cookies?' Zelda wondered.\n\n'We make them with love and share them with everyone!' Luna said wisely.\n\nMeemaw watched them proudly. 'You two are natural bakers!'\n\nSoon the kitchen smelled AMAZING! They packed the warm cookies in a pretty box with a bow.\n\n'Now let's go find that dragon!' Zelda said.",
      choices: [
        {
          text: "Bring the cookies to the park",
          next: "cookies-meeting",
        },
      ],
      isEnding: false,
    },

    "gift-meeting": {
      id: "gift-meeting",
      text: "The sisters found Pepper sitting by the pond, looking at the clouds and sneezing little rainbow puffs.\n\n'Hello!' Luna called out gently. 'We made something for you!'\n\nPepper turned around, surprised. 'For... me?'\n\nThey showed him the friendship bracelet and cookies. Pepper's eyes filled with happy tears.\n\n'Nobody's ever made me a present before!' he sniffled (which came out as a small rainbow sneeze, of course).\n\nHe put on the bracelet and it jingled cheerfully. 'I love it! And these cookies smell delicious!'\n\nPepper hugged them both. 'I'm so sorry I took your sprinkles. Here, you can have them all back!'\n\n'Want to come help us at the festival tomorrow?' Zelda asked. 'We could use a friend like you!'\n\nPepper nodded so hard his little jingle bell rang!",
      choices: [
        {
          text: "Head to the festival together!",
          next: "festival-with-pepper",
        },
      ],
      isEnding: false,
    },

    "basket-meeting": {
      id: "basket-meeting",
      text: "At the park, they found Pepper sitting under a tree, looking sad. When he saw them approaching, he started to hide.\n\n'Wait!' Zelda called. 'We brought you something!'\n\nPepper peeked out. 'You're not mad about the sprinkles?'\n\n'We were worried,' Luna said, 'but mostly we wanted to meet you! We brought snacks to share!'\n\nThey spread out the treats on a picnic blanket. Pepper couldn't believe it.\n\n'You want to... share with me?' His voice wobbled with happy surprise.\n\n'Of course! That's what friends do!' the sisters said together.\n\nThey had the best picnic ever! Pepper told funny stories that made them laugh, and every time he laughed too hard, he'd sneeze a little rainbow. The park became more beautiful with each giggle.\n\n'I'll give back all your sprinkles,' Pepper said happily. 'Being your friend is way better than any sprinkles!'",
      choices: [
        {
          text: "Celebrate the new friendship!",
          next: "picnic-ending",
        },
      ],
      isEnding: false,
    },

    "cookies-meeting": {
      id: "cookies-meeting",
      text: "They found Pepper in the park and offered him the special Dragon-Friendly Cookies. He sniffed them carefully.\n\n'These are... for me?' Pepper asked, amazed.\n\n'Yep! We made them especially for you!' Zelda said.\n\nPepper took a bite and his eyes went HUGE. 'These are the most delicious cookies EVER!' He sneezed a rainbow that spelled out 'YUM!' in the sky!\n\nThe sisters giggled. 'So Pepper, we need our sprinkles for the festival tomorrow. But we were wondering... would you like to help us there? You could make rainbow decorations and be our special guest!'\n\nPepper jumped up and down. 'Really? You want ME to help?'\n\n'You're perfect for it!' Luna said. 'Nobody else can make rainbow decorations like you can!'\n\nPepper gave back all the sprinkles and gave them both big dragon hugs.",
      choices: [
        {
          text: "Get ready for the festival!",
          next: "pepper-festival-prep",
        },
      ],
      isEnding: false,
    },

    "pepper-joins-team": {
      id: "pepper-joins-team",
      text: "The next day at the Dessert Festival, Pepper wore a tiny apron that said 'Official Bakery Dragon' and stood proudly at the booth.\n\nWhen customers came by, he would sneeze gentle rainbows over the treats. The cookies and cupcakes sparkled with rainbow colors!\n\n'This is AMAZING!' people gasped. 'We've never seen anything like it!'\n\nKids lined up to meet Pepper. Nobody ran away - they all wanted to be his friend!\n\n'Zelda! Luna!' Pepper called out happily. 'Everyone loves the rainbow treats! And they love ME!'\n\nMeemaw smiled at her granddaughters. 'You girls did something very special today. You made a friend and saved the festival!'\n\nIt was the best Dessert Festival ever!",
      endingTitle:
        "You found the best ending! Friendship and fun save the day!",
      choices: [],
      isEnding: true,
    },

    "festival-preparation": {
      id: "festival-preparation",
      text: "That evening, Zelda, Luna, and Pepper worked together to prepare for the festival. Pepper practiced making rainbow art while the sisters baked treats.\n\nMeemaw was delighted. 'This is wonderful! We'll have the most magical booth at the festival!'\n\nThe next day, Pepper created beautiful rainbow designs that floated over the bakery booth. People came from all over to see!\n\n'It's like a dream!' children exclaimed.\n\nPepper beamed with pride. 'This is what my rainbow sneezes were meant for - making people happy!'\n\nThe festival was a huge success, and Pepper found his true calling as an artist!",
      endingTitle: "Amazing! Art and friendship make the world beautiful!",
      choices: [],
      isEnding: true,
    },

    "amazing-festival": {
      id: "amazing-festival",
      text: "The Dessert Festival was absolutely spectacular! Pepper's rainbow decorations sparkled everywhere, and the sisters' treats were arranged in beautiful displays.\n\nPeople couldn't decide what they loved more - the delicious food or the magical decorations!\n\n'This is the best festival we've ever had!' the mayor announced.\n\nPepper, Zelda, and Luna took a bow together. Working as a team, they had created something truly special.\n\nMeemaw hugged them all. 'I'm so proud of you! You showed that when friends work together, anything is possible!'\n\nPepper sneezed one final rainbow that spelled out 'BEST FRIENDS FOREVER!' in the sky.",
      endingTitle: "Wonderful! Teamwork makes the dream work!",
      choices: [],
      isEnding: true,
    },

    "pepper-bakery-helper": {
      id: "pepper-bakery-helper",
      text: "Pepper became the bakery's most enthusiastic helper! At the Dessert Festival, he greeted every customer with a smile and a gentle rainbow sneeze that made all the treats sparkle.\n\n'Welcome to the Magical Bakery!' he would say, and his joy was so contagious that everyone smiled.\n\nThe booth was mobbed with happy customers. Kids wanted Pepper's autograph, and adults said it was the most delightful festival they'd ever attended.\n\n'I finally found where I belong!' Pepper told the sisters, his eyes shining with happiness.\n\nMeemaw patted his little dragon head. 'You were always special, Pepper. Now everyone else gets to see it too!'",
      endingTitle: "Perfect! Kindness and acceptance win the day!",
      choices: [],
      isEnding: true,
    },

    "pepper-gets-ready": {
      id: "pepper-gets-ready",
      text: "Back at the bakery, Meemaw helped make Pepper the cutest little apron and chef hat. They were purple with rainbow stitching!\n\nPepper put them on and looked at himself in the mirror. 'I look... professional!' he said proudly.\n\nThe sisters taught him how to arrange cookies on plates and how to greet customers. He was a natural!\n\nAt the festival the next day, Pepper was the star of the show. His outfit was adorable, his manners were perfect, and his rainbow sneezes made everything magical.\n\n'Best. Job. EVER!' Pepper declared, giving the sisters high-fives (which is tricky with little dragon claws, but they managed!).\n\nThe bakery's booth won first prize, and Pepper got a special medal for 'Most Magical Helper'!",
      endingTitle: "Fantastic! Everyone wins when you work together!",
      choices: [],
      isEnding: true,
    },

    "festival-with-pepper": {
      id: "festival-with-pepper",
      text: "At the festival, Pepper wore his friendship bracelet proudly and helped the sisters in every way he could. He greeted customers, arranged treats, and created rainbow sparkle displays.\n\nEveryone fell in love with the friendly little dragon. Children asked for rainbow blessings, and Pepper happily gave gentle sneezes that made them giggle.\n\n'You know what?' Pepper said at the end of the day. 'I used to think my rainbow sneezes were a problem. But you helped me see they're a gift!'\n\nLuna hugged him. 'And you're a gift to us, Pepper!'\n\nMeemaw brought out a special cake shaped like a dragon. 'To celebrate our new family member!'\n\nPepper's happy tears sparkled like tiny diamonds. He had found his forever home.",
      endingTitle: "Heartwarming! Gifts from the heart make the best friends!",
      choices: [],
      isEnding: true,
    },

    "picnic-ending": {
      id: "picnic-ending",
      text: "The picnic turned into a party! More kids from the neighborhood came to join, and Pepper made rainbow designs in the sky for everyone.\n\nWord spread quickly about the friendly dragon at the park. By evening, the mayor came to see what all the excitement was about.\n\n'Pepper,' the mayor said, 'would you like to be our town's Official Rainbow Artist?'\n\nPepper almost fainted with joy! 'REALLY?!'\n\nAt the festival the next day, Pepper had his own booth where he created custom rainbow art for everyone. The sisters' bakery booth was right next to him, and they worked together all day.\n\nIt was the beginning of a beautiful friendship - and the most successful festival the town had ever seen!",
      endingTitle: "Wonderful! Sharing and caring make everything better!",
      choices: [],
      isEnding: true,
    },

    "pepper-festival-prep": {
      id: "pepper-festival-prep",
      text: "That evening, Pepper helped the sisters prepare all the treats for the festival. He was so excited he kept sneezing little rainbows that made the cookies glow!\n\n'Oops! Sorry!' he'd say, but the sisters just laughed.\n\n'Don't be sorry - these are the prettiest cookies ever!' Zelda said.\n\nMeemaw agreed. 'Pepper, your rainbow magic makes everything special!'\n\nAt the festival, their booth was magical! The treats sparkled, Pepper entertained everyone with rainbow shows, and the line of customers went around the block.\n\n'We make a great team!' the three friends said together, doing a group hug (which is hilarious when one of you is a small dragon).\n\nThe town declared it the Best Dessert Festival Ever, and Pepper became a beloved member of the community!",
      endingTitle: "Brilliant! You baked your way to victory and friendship!",
      choices: [],
      isEnding: true,
    },
  },
};
