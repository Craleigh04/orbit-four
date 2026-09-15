# Orbit Four

A free, space-themed Connect Four game. Outsmart NOVA, a strategy AI that runs entirely in your browser.

**[Play the public game](https://orbit-four-caden-20260910.caden04.chatgpt.site/)**

## Features

- Three difficulty levels: Cadet, Pilot, and Commander
- Local minimax AI with alpha-beta pruning and tactical win/block detection
- Hints, winning-line highlights, and rematches
- Dashboard for wins, win rate, streaks, XP, and recent matches
- Keyboard-accessible column controls and responsive layouts
- Match history stored in localStorage on your device (up to 200 matches)
- No AI API key, subscription, or model download

## Run locally

Use Node.js 22.23.2 or a compatible recent Node 22 release and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by the development server.

## Build

```sh
npm run build
```

The static export is generated in `dist/client`. Serve that directory using a static web server; opening index.html directly from disk is not supported. The published game is hosted on Sites. GitHub Pages hosting is not configured in this repository.

## How to play

You are cyan; NOVA is violet. Select a column to drop an orb. Connect four horizontally, vertically, or diagonally before NOVA does. Difficulty remains fixed during a match. Hints suggest a move without playing it.

## Stack

React, TypeScript, Vinext/Vite, Tailwind CSS, Base UI/Shadcn components, and Lucide icons. The AI is a local game-search algorithm, not a chatbot or external AI service.

## Source map

- `app/game-dashboard.tsx`: game UI and match state
- `app/globals.css`: theme and responsive styling
- `lib/game.ts`: board rules and AI search
- `components/ui/`: reusable UI primitives

The optional WebMCP interface is feature-detected; it is not required to play. Browser automation validation of those optional tools has not been completed.
