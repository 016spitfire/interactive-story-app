# Interactive Story App

A mobile-first Progressive Web App for creating and experiencing choose-your-own-adventure stories. Built on a modular dialog tree engine designed for extensibility and reuse.

## The Vision

Remember those "choose your own adventure" books where you'd flip to page 47 if you opened the door, or page 103 if you ran away? This app brings that experience to the web with a modern, mobile-friendly interface.

**But it's more than just nostalgia.** This project is architected around a reusable dialog tree engine that can power any branching narrative system - from interactive fiction to game NPC conversations to educational decision trees.

## Core Features (Planned)

### Story Experience
- **Mobile-First Design** - Optimized for reading on phones and tablets
- **PWA Capabilities** - Install to home screen, works offline
- **Branching Narratives** - Choices that matter and change the story
- **State Tracking** - Your decisions persist and affect future options
- **Save/Resume** - Pick up where you left off

### Story Creation
- **Visual Story Builder** - Create branching narratives without code
- **Choice System** - Multiple paths, consequences, and outcomes
- **Conditional Logic** - Unlock choices based on previous decisions
- **Rich Content** - Text, images, and formatting support

### Technical Foundation
- **Modular Dialog Engine** - Clean separation between engine and UI
- **State Management** - Redux-powered story state tracking
- **Exportable Library** - Dialog tree engine designed for extraction as standalone package

## Why This Architecture?

This app is built with **component extraction** in mind. The dialog tree engine lives in `/src/lib` and is designed to be pulled out as a standalone library (`react-story-dialog`) in the future. This means:

- **For this app**: Full-featured interactive story experience
- **For other projects**: Reusable dialog system (like game NPC conversations)
- **For learning**: Demonstrates library design and API thinking

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool (fast, modern)
- **React Router** - Navigation and routing
- **Redux Toolkit** - State management
- **PWA Plugin** - Installability and offline support
- **Mobile-First CSS** - Responsive design

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

When the engine is mature and battle-tested, it will be extracted as `react-story-dialog` - a standalone npm package that other developers can use in their own projects.

## Current Status

🚧 **In Initial Development** - Project structure and architecture being established.

The focus is on building a solid dialog tree engine while creating a delightful story experience. Development is iterative with an emphasis on clean separation of concerns.

## Tech Highlights

- **Modular architecture** - Engine designed for extraction and reuse
- **State-driven narrative** - Redux manages complex story state and branching logic
- **PWA capabilities** - Installable, offline-capable web app
- **Mobile-first responsive design** - Works beautifully on any device
- **Router-based navigation** - Deep linking to story nodes
- **Library design patterns** - Public API, encapsulation, extensibility

## Future Considerations

- **Story Marketplace** - Share and discover community-created stories
- **Multiplayer Stories** - Collaborative decision-making
- **Analytics** - Track which paths players take most often
- **Story Templates** - Genre-specific starting points
- **Export to react-story-dialog** - Standalone library for other projects

## License

MIT

## Author

Spencer Kittle ([@016spitfire](https://github.com/016spitfire))

---

*Every choice tells a story. What will yours be?*
