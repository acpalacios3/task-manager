## "Character Counter: React and TypeScript"**

## Description

***"This project create a Task Management application that demonstrates dynamic list rendering, proper key usage, and conditional rendering. You will practice creating TypeScript React components that handle lists of data, implement filtering, and show different states based on task properties. This focuses on list rendering, key management, conditional rendering, and component composition using React and TypeScript."***

## Technologies Used

1. React: To build reusable UI components and update the interface dynamically.
2. TypeScript: To define interfaces, specify prop types, and improve type safety.
3. JavaScript: To implement event handling, text processing, and statistics calculations.
4. React Hooks (useState): To store the text entered by the user and update the application state.
5. Tailwind CSS: To style the application, manage spacing, apply colors, and create a responsive layout.
6. Vite: To run the development server and build the application.

## How to Run the Application

1. Install the dependencies:
npm install
2. Start the development server:
npm run dev
3. Open the local URL displayed in the terminal in your browser.

## Tailwind CSS Installation
1. Installed Tailwind CSS and the Vite plugin using:
 npm install tailwindcss @tailwindcss/vite.

2. Configured the Tailwind CSS plugin in vite.config.ts.
3. Imported Tailwind CSS in the main CSS file using @import "tailwindcss";.

## Components

**1. App**

The App component is the parent component responsible for managing the tasks state and handling task operations.
It defines callback functions to update task statuses and delete tasks. 
It passes the task data and callback functions to TaskList through props.

**2. TaskList**

The TaskList component receives the tasks array and callback functions through props. 
It uses the filter() method to filter tasks by status and priority. 
It also uses map() to render the filtered tasks and displays a message when no tasks match the selected filters. 

**3. TaskItem**

The TaskItem component displays an individual task, including its title, description, status, priority, and due date. 
It allows users to change the task status and delete the task through callback functions received from the parent component. 
Conditional expressions apply different colors based on task priority and status.

## TypeScript Interfaces

I used TypeScript types and interfaces to define the structure of task data, task statuses, priorities, and component props. 
These definitions help ensure that components receive the expected data and callback functions. 
The types are defined in a separate types file and imported where needed.



