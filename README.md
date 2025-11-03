# RamseyAI

## Inspiration

In the past 20 years, average household debt and cost of goods have **more than doubled** while salaries remained stagnant. With 28% of Americans having less than $1,000 in savings, there's a clear need for accessible financial guidance. We created an AI-powered solution to make Dave Ramsey's proven Baby Steps methodology instantly accessible to anyone seeking financial freedom.

## What it does

RamseyAI is an intelligent financial coaching assistant that guides users through Dave Ramsey's 7 Baby Steps:

1. $1,000 starter emergency fund
2. Debt snowball for all non-mortgage debt  
3. 3-6 months fully funded emergency fund
4. 15% retirement investing
5. Children's college fund
6. Early mortgage payoff
7. Building wealth and giving

The app provides personalized assessment, step-by-step guidance, and interactive chat coaching powered by AI to help users identify their current position and next actions.

## Setup and Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dave-ramsey-tracker
   ```

2. **Navigate to the project directory**
   ```bash
   cd dave-ramsey-tracker
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   The app will automatically open at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Building for Production

To create a production build:
```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## How we built it

**Frontend**: Built with React 19.2.0 featuring smooth scrolling navigation, scroll-lock UX, and responsive design.

**AI Integration**: Embedded Voiceflow conversational AI for intelligent financial coaching with contextual advice.

**Key Features**: Financial crisis statistics, interactive Baby Steps showcase, educational video content, and guided user experience with accessibility considerations.

## Challenges we ran into

**Scroll Management**: Implementing complex scroll-lock functionality that creates a guided experience while detecting genuine user interaction vs. programmatic scrolling and maintaining accessibility.

**AI Integration**: Configuring Voiceflow to provide accurate financial advice aligned with Ramsey's methodology and handling dynamic script loading for the embedded chat widget.

## Accomplishments that we're proud of

- Seamless AI integration providing personalized financial coaching
- User-centric design with intuitive guided navigation
- Comprehensive financial statistics highlighting real American challenges
- Smooth performance across all device types

## What we learned

**Technical**: Advanced React patterns for complex interactions, third-party AI platform integration, performance optimization for animations, and accessibility best practices.

**Domain Knowledge**: Deep understanding of Dave Ramsey's methodology, current American financial trends, and the importance of making financial education actionable.

## What's next for RamseyAI

**Enhanced Features**: Real-time debt/savings tracking via financial APIs, personalized budget creation, progress visualization, and community features for peer support.

**Advanced Tools**: Debt snowball calculator, emergency fund goal calculator, investment projections, and mortgage payoff acceleration tools.

**Platform Expansion**: Native mobile apps with offline mode, push notifications, video course integration, and resource library with downloadable worksheets.

The goal is to democratize quality financial education and make Dave Ramsey's proven methodology available to anyone through AI-powered coaching.
