# Interactive Story App

🔗 **[Live Demo](https://interactive-story-app.vercel.app)** | 📱 **PWA Enabled** - Install to your home screen!

A mobile-first Progressive Web App for creating and experiencing choose-your-own-adventure stories. Built on a modular dialog tree engine designed for extensibility and reuse.

## The Vision

Remember those "choose your own adventure" books where you'd flip to page 47 if you opened the door, or page 103 if you ran away? This app brings that experience to the web with a modern, mobile-friendly interface.

**But it's more than just nostalgia.** This project is architected around a reusable dialog tree engine that can power any branching narrative system - from interactive fiction to game NPC conversations to educational decision trees.

## Features

### Story Experience
- ✅ **Mobile-First Design** - Optimized for reading on phones and tablets
- ✅ **PWA Capabilities** - Install to home screen, works offline
- ✅ **Branching Narratives** - Choices that matter and change the story
- ✅ **State Tracking** - Your decisions persist and affect future options
- ✅ **Save/Resume** - Progress saved automatically via localStorage
- ✅ **Multiple Stories** - Choose from different narrative adventures
- ✅ **Restart Capability** - Start over from the beginning anytime

### Technical Foundation
- ✅ **React Router Integration** - URL-based navigation with browser history
- ✅ **Redux State Management** - Persistent story progress and choice tracking
- ✅ **Error Boundaries** - Graceful error handling with recovery options
- ✅ **Offline Support** - Full PWA with service worker caching
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile

## Why This Architecture?

This app is built with **component extraction** in mind. The dialog tree engine is designed to be pulled out as a standalone library in the future. This means:

- **For this app**: Full-featured interactive story experience
- **For other projects**: Reusable dialog system (like game NPC conversations)
- **For learning**: Demonstrates library design and API thinking

## Tech Stack

- **React 18** - UI framework with hooks
- **Vite** - Lightning-fast build tool
- **React Router v6** - Client-side routing
- **Redux Toolkit** - State management with persistence
- **Vite PWA Plugin** - Service worker and offline capabilities
- **PropTypes** - Runtime type checking
- **Mobile-First CSS** - Responsive design patterns

## Use Cases

### As a Standalone App
- Interactive fiction and storytelling
- Educational decision-making simulations
- Training scenarios with branching outcomes
- Creative writing tool for authors

### As a Component Library (Future)
- RPG dialog systems
- Tutorial flows with branching paths
- Interactive documentation
- Chatbot conversation trees
- Any application needing branching narrative logic

## Development Philosophy

**Building for extraction:** The dialog tree engine is intentionally decoupled from the UI. This isn't just a story app - it's a proving ground for a reusable dialog system that can power any project needing branching conversations or narratives.

## Project Structure

```
src/
├── components/          # React components
│   ├── StoryMenu.jsx   # Story selection screen
│   ├── StoryContainer.jsx  # Main story wrapper
│   ├── StoryDisplay.jsx    # Story node renderer
│   ├── ChoiceButtons.jsx   # Choice UI
│   └── ErrorBoundary.jsx   # Error handling
├── store/              # Redux state management
│   ├── store.js        # Redux store configuration
│   └── storySlice.js   # Story state and actions
├── data/               # Story content
│   ├── stories.js      # Story registry
│   └── [story].js      # Individual story files
└── utils/              # Utilities
    └── storyValidator.js  # Story structure validation
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Current Status

✅ **Production Ready** - Deployed and functional with offline support

The app features multiple complete stories with branching narratives, full PWA capabilities, and a solid foundation for future enhancements.

## Future Enhancements

- **Story Builder UI** - Visual editor for creating stories without code
- **Story Marketplace** - Share and discover community-created stories
- **Conditional Logic** - Unlock choices based on previous decisions
- **Analytics** - Track which paths players take most often
- **Export to react-story-dialog** - Standalone library for other projects

## License

MIT

## Author

Spencer Kittle ([@016spitfire](https://github.com/016spitfire))

---

*Every choice tells a story. What will yours be?*
