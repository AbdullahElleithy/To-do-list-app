# 📝 To Do List Web App

A simple and responsive **To Do List** application built using **HTML, CSS, and Vanilla JavaScript**.  
The application allows users to manage their daily tasks with persistent storage using the browser's **Local Storage**.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed
- ❌ Return completed tasks back to *In Progress*
- 💾 Automatically saves tasks using **Local Storage**
- 📅 Displays the date and time each task was added
- ✔️ Input validation to prevent empty task names
- 🎨 Clean and modern UI with Google Material Icons
- 🟢 Completed tasks are highlighted with a light green background

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- Google Material Symbols

---

## ⚙️ How It Works

### Adding a Task

- User clicks the ➕ button.
- Enters the task name.
- A new `Task` object is created.
- The task is saved to Local Storage.
- The UI is re-rendered.

---

### Editing a Task

- Searches for the task using its unique **ID**.
- Updates the task name through the `changeName()` method.
- Saves changes.
- Re-renders the task list.

---

### Deleting a Task

- Finds the task by its **ID**.
- Removes it from the tasks array.
- Updates Local Storage.
- Refreshes the UI.

---

### Marking as Done

- Finds the task by its **ID**.
- Calls the `switchStatus()` method.
- Saves the updated status.
- Changes the task appearance.

---

## 💾 Local Storage

Tasks remain available even after refreshing or closing the browser.

---

## ✅ Validation

The application prevents creating or renaming a task with an empty name.

If the input is empty, an alert is displayed:

```text
Task name can't be empty.