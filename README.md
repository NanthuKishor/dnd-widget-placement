# DnD Widget Placement Application

This project lets users drag and drop widgets (Button, Input, Table) from a sidebar onto a central canvas. The canvas uses a grid-based layout where widgets can be moved, resized, arranged and deleted interactively.

This Application is bootstrapped with Vite, using the React-Typescript template & react-grid-layout library.

## Table of Contents

- [Prerequisites](#prerequisite)
- [Running Application](#running-application)
- [Deployed Application](#deployed-application)
- [Libraries Used](#libraries-used)
- [Key Features](#key-features)
- [Learn More](#learn-more)

## Prerequisites

For Building and Running the application.

- nodeJs >= 20
- npm >= 10

## Running Application

To run the application in local machine, you need to

1. Install the node_modules
   ```bash
   npm install
   ```
1. kick start the local server

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.
   The page will reload if you make edits.

## Libraries Used

`react-grid-layout` https://www.npmjs.com/package/react-grid-layout

## Key Features

- react-grid-layout is the main library used for implementing the major feature.
- Widgets mentioned can be dragged from the left sidebar, onto the white canvas. Native Drag and Drop functionality of the html element is used to achieve this feature.
- Dropped widget's positions can be arrange both Horizontally & Vertically.
- Dropped widgets can be resized both Horizontally & Vertically.
- Delete option is added so as to remove the unwanted widgets from the grid area canvas.
- State (Position and Size) of the dropped widgets are saved in the localStorage, so that state is preserved upon refresh.
- Text input accepts input.
- A custom hook useDnd, that handles all the drag n drop functionalities.

## Deployed Application

Deployed site can be accessed here: https://widget-dnd.netlify.app/

## Learn More

[Vite](https://vitejs.dev/) Bundler.

[React](https://react.dev/learn/start-a-new-react-project) setup,

[react-grid-layout](https://www.npmjs.com/package/react-grid-layout)
