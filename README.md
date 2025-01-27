# SpeakX Frontend

A React-based frontend application for searching and displaying questions with pagination functionality.

## Developed By
Aditya Singh  
GitHub: [s4kenn](https://github.com/s4kenn)

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/
│   ├── pages/
│   │   ├── CoverDemo.tsx
│   │   ├── FAQ.tsx
│   │   └── SearchPagination.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

## Features

- Modern React application built with TypeScript
- Responsive search interface with pagination
- Real-time search highlighting
- Customizable items per page
- Loading states and error handling
- Material UI integration for components
- Clean and intuitive user interface

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

## Installation

```bash
# Clone the repository
git clone https://github.com/s4kenn/speak-frontend.git

# Navigate to project directory
cd speak-frontend

# Install dependencies
npm install
```

## Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Components

**SearchWithPagination**
- Advanced search functionality
- Dynamic result highlighting
- Customizable items per page
- Pagination controls
- Loading states
- Error handling

**Main Features**
- Table view for search results
- Real-time search filtering
- Responsive design
- Server-side pagination
- Error state handling
- Loading indicators

## API Integration

The frontend connects to the backend API at:
- Base URL: https://backend-speakx.onrender.com/api
- Endpoints: 
  - GET /questions (with pagination and search parameters)

## Technologies Used

- React
- TypeScript
- Axios
- Material UI
- Tailwind CSS
- Shadcn UI Components

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

