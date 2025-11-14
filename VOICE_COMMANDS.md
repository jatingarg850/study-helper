# Voice Commands Reference

## 🎤 Complete Voice Commands Guide

### Navigation Commands

#### Go to Flashcards
- "go to flashcards"
- "open flashcards"
- "show flashcards"
- "take me to flashcards"
- "I want to see flashcards"

#### Go to Communities
- "go to communities"
- "open communities"
- "show communities"
- "take me to communities"
- "open forum"
- "show discussions"

#### Go to News
- "go to news"
- "open news"
- "show news"
- "show me news"
- "what's the news"
- "show articles"
- "show updates"

#### Go Home
- "go home"
- "go to home"
- "take me home"
- "go to main"
- "main screen"

#### Go Back
- "go back"
- "previous"
- "return"
- "back"

---

### Educational Questions

#### Math
- "Explain the Pythagorean theorem"
- "What is calculus?"
- "Help me with algebra"
- "How do I solve quadratic equations?"
- "What is the derivative of x squared?"

#### Science
- "Explain photosynthesis"
- "What is Newton's third law?"
- "Tell me about the solar system"
- "How does DNA work?"
- "What is quantum mechanics?"

#### History
- "Who was Abraham Lincoln?"
- "Tell me about World War 2"
- "What happened in 1776?"
- "Explain the French Revolution"

#### Geography
- "What is the capital of France?"
- "Tell me about the Amazon rainforest"
- "Where is Mount Everest?"
- "What are the continents?"

#### Literature
- "Who wrote Romeo and Juliet?"
- "Tell me about Shakespeare"
- "What is a metaphor?"
- "Explain the plot of Hamlet"

#### Languages
- "How do I say hello in Spanish?"
- "What is the past tense of go?"
- "Explain English grammar"
- "Help me with pronunciation"

---

### Study Help

#### General Help
- "I need help with homework"
- "Can you explain this concept?"
- "I don't understand"
- "Can you give me an example?"
- "Tell me more about that"

#### Clarification
- "Can you repeat that?"
- "Say that again"
- "I didn't understand"
- "Can you explain it differently?"
- "Give me a simpler explanation"

#### Examples
- "Can you give me an example?"
- "Show me how to do this"
- "Give me a practice problem"
- "Can you demonstrate?"

---

### Flashcard Commands

#### Navigation
- "next card"
- "previous card"
- "go to next"
- "show previous"

#### Actions
- "flip the card"
- "show answer"
- "reveal answer"
- "turn the card"

#### Categories
- "show math cards"
- "show science flashcards"
- "filter by category"

---

### Community Commands

#### Viewing
- "show recent posts"
- "what's new in community"
- "show discussions"

#### Creating
- "create a post"
- "I want to post something"
- "start a discussion"

#### Interacting
- "like this post"
- "comment on this"
- "share this post"

---

### News Commands

#### Viewing
- "show latest news"
- "what's new"
- "show recent articles"
- "refresh news"

#### Filtering
- "show education news"
- "show study tips"
- "show technology news"

---

### App Control

#### Voice Assistant
- "start listening"
- "stop listening"
- "mute"
- "unmute"
- "pause"
- "resume"

#### Settings
- "open settings"
- "change settings"
- "adjust volume"

#### Help
- "help"
- "what can you do"
- "show commands"
- "how do I use this"

---

## 💡 Tips for Better Voice Recognition

### Do's ✅
- Speak clearly and naturally
- Use complete sentences
- Wait for response before speaking again
- Use headphones for better quality
- Minimize background noise
- Speak at normal pace

### Don'ts ❌
- Don't shout or whisper
- Don't speak too fast
- Don't interrupt the AI
- Don't use in noisy environments
- Don't mumble

---

## 🎯 Command Patterns

### Navigation Pattern
```
[Action] + [Destination]
Examples:
- "go to" + "flashcards"
- "open" + "communities"
- "show" + "news"
```

### Question Pattern
```
[Question Word] + [Topic]
Examples:
- "what is" + "photosynthesis"
- "explain" + "calculus"
- "tell me about" + "history"
```

### Action Pattern
```
[Action] + [Object]
Examples:
- "flip" + "the card"
- "create" + "a post"
- "show" + "answer"
```

---

## 🔧 Customizing Commands

### Adding New Commands
Edit `app/lib/services/voice_command_service.dart`:

```dart
NavigationDestination parseNavigationCommand(String command) {
  final lowerCommand = command.toLowerCase().trim();

  // Add your custom command
  if (lowerCommand.contains('your_keyword')) {
    return NavigationDestination.yourDestination;
  }
  
  // ... existing commands
}
```

### Adding New Destinations
1. Add to enum in `voice_command_service.dart`:
```dart
enum NavigationDestination {
  home,
  flashcards,
  communities,
  news,
  yourNewDestination, // Add here
  back,
  unknown,
}
```

2. Handle navigation in your screen

---

## 📊 Command Categories

| Category | Commands | Purpose |
|----------|----------|---------|
| Navigation | 15+ | Move between screens |
| Education | 50+ | Ask questions, get help |
| Flashcards | 10+ | Study with cards |
| Community | 8+ | Social interaction |
| News | 6+ | Read articles |
| Control | 10+ | App settings |

---

## 🌟 Advanced Usage

### Chaining Commands
```
User: "Go to flashcards"
AI: "Opening flashcards"
User: "Show next card"
AI: "Here's the next card"
User: "Flip it"
AI: "Showing the answer"
```

### Context-Aware Commands
The AI remembers context:
```
User: "Explain photosynthesis"
AI: "Photosynthesis is..."
User: "Can you give an example?"
AI: "Sure, for example..."
User: "Tell me more"
AI: "Additionally..."
```

### Multi-Step Interactions
```
User: "I need help with math"
AI: "What math topic do you need help with?"
User: "Algebra"
AI: "What specifically about algebra?"
User: "Solving equations"
AI: "Let me explain how to solve equations..."
```

---

## 🎓 Learning the Commands

### Beginner Level
Start with basic navigation:
- "go home"
- "go to flashcards"
- "go back"

### Intermediate Level
Add educational queries:
- "explain [topic]"
- "help me with [subject]"
- "what is [concept]"

### Advanced Level
Use complex interactions:
- Context-aware follow-ups
- Multi-step conversations
- Custom commands

---

## 🔍 Command Discovery

### Ask the AI
- "what can you do"
- "show me commands"
- "help"
- "what features do you have"

### In-App Help
- Check the help section
- View command list
- See examples

---

## 📱 Platform-Specific Notes

### Android
- Works with Google Assistant integration
- Supports background listening (future)
- Better noise cancellation

### iOS
- Works with Siri shortcuts (future)
- Optimized for AirPods
- Enhanced privacy controls

---

## 🚀 Future Commands (Coming Soon)

- "set a reminder"
- "schedule study session"
- "track my progress"
- "show my statistics"
- "recommend topics"
- "quiz me on [subject]"
- "find study partners"
- "join study group"

---

**Master these commands to become a power user! 🎯**
