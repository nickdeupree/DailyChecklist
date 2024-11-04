# Daily Checklist

A Progressive Web App (PWA) designed to help users manage their daily tasks with a simple checklist. Users can add tasks, mark them as completed, and reset the list each day. The app is installable on mobile and desktop devices, providing quick access to daily task management anytime, even offline.

## Features

- **Add Tasks**: Quickly add tasks to your checklist by typing them into the input box.
- **Mark Tasks as Completed**: Tap on tasks to mark them as complete, with a strikethrough indicating completion.
- **Daily Reset**: Reset the checklist at the start of each new day to keep track of daily tasks.
- **Instant Install**: Installable on mobile devices and desktops for quick access.
- **Offline Access**: The app functions offline once loaded, so you can manage tasks without an internet connection.

## App

[Use the Daily Checklist app](https://nickdeupree.github.io/DailyChecklist) <!-- Replace # with the actual URL once hosted. -->

## Usage

1. **Add a Task**: Type a task in the input box and click "Add Task" to add it to the checklist.
2. **Mark as Complete**: Click on a task to mark it as complete, adding a strikethrough to indicate completion.
3. **Reset List**: Click the "Reset List" button to clear all tasks and start fresh.
4. **Offline Functionality**: Use the app offline after the first load; all tasks are cached locally.

## Code Overview

### Key Files

- **index.html**: Contains the main structure and elements of the app.
- **styles.css**: Defines all the app styling, including responsive layout and dark mode-friendly colors.
- **app.js**: JavaScript logic for adding tasks, marking them as completed, and handling the daily reset.

### Core Functions

- **addTask**: Adds a new task to the checklist and stores it in local storage.
- **toggleTaskCompleted**: Marks a task as complete or incomplete when clicked, updating local storage.
- **resetTasks**: Clears all tasks from the checklist and local storage at the beginning of each new day.
- **loadTasks**: Loads saved tasks from local storage when the app starts and checks if a reset is needed for a new day.
