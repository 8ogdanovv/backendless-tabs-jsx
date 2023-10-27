# backendless-tabs-jsx
Te5t a55i9nment f0r the Java5cript deve1oper po5iti0n at [8ackend~1e55](backendless.com)  
  
This project serves as a template for a React-based application that implements tabs without backend integration. It showcases various components, including charts, lists, and tables, along with a navigation layout and a router component. The project utilizes modern web development tools and libraries such as Material-UI, Vite, React Router, and more.

![landscape](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-landscape.png)
![portrait](https://github.com/vadym4che/backendless-tabs-jsx/blob/main/docs/screenshot-portrait.png)

## Features
+ Dynamic Tabs:  
Implementing dynamic tabs with React components without the need for backend integration.
+ Chart Rendering:  
Displaying data in the form of interactive charts using the Material-UI library.
+ List Functionality:  
Presenting a list of items with checkboxes and commenting options.
+ Routing and Navigation:  
Utilizing React Router to manage navigation within the application.
+ Component Structure:  
Organizing the components in a structured format for better readability and maintainability.
+ CI/CD Integration:  
Implementing continuous integration and continuous deployment with GitHub Actions.

## Project Structure
```arduino
├── .github/workflows/autodeploy.yml
├── docs/
│   ├── screenshot-portrait.png
│   ├── screenshot-landscape.png
├── public/
│   ├── .nojekyll
│   ├── react.svg
├── src/
│   ├── assets/
│   │   ├── MUI-logo.svg
│   │   ├── react-router-mark-color.svg
│   │   ├── react.svg
│   ├── components/
│   │   ├── CircularLoader.css
│   │   ├── CircularLoader.jsx
│   │   ├── NavigationLayout.css
│   │   ├── NavigationLayout.jsx
│   │   └── NoMatchingRoute.jsx
│   ├── tabs/
│   │   ├── DummyChart.jsx
│   │   ├── DummyComponent.css
│   │   ├── DummyList.jsx
│   │   └── DummyTable.jsx
│   ├── utils/computeHeight.js
│   ├── App.css
│   ├── App.jsx
│   ├── AppContext.jsx
│   ├── index.css
│   ├── main.jsx
│   └── RouterComponent.jsx
├── index.html
├── package.json
├── vite.config.js
```

## Installation
Clone the repository.
Run npm install to install the required dependencies.
Execute npm run dev for development mode or npm run build for production build.
Use npm run preview to preview the production build locally.

## Libraries and Dependencies
React
Material-UI
React Router
Emotion
Styled Components
Scripts
+ dev: Runs the development server using Vite.
+ build: Builds the application for production.
+ lint: Lints the project files using ESLint.
+ preview: Previews the production build locally using Vite.

## License
This project is licensed under the MIT License 