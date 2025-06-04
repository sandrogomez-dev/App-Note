# 📝 Notes App - Modern React Application

A beautiful and modern notes application built with React, featuring a stunning visual design and powerful functionality for managing your notes efficiently.

![Notes App](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## ✨ Features

### 🎨 **Modern Visual Design**
- **Gradient-based UI** with beautiful purple-blue color schemes
- **Smooth animations** and transitions throughout the app
- **Hover effects** with elevation and interactive feedback
- **Responsive design** that looks great on all devices
- **Modern typography** using Inter font family

### 📱 **Core Functionality**
- ✅ **Create Notes** - Add new notes with title and content
- ✅ **Edit Notes** - Inline editing with save/cancel options
- ✅ **Delete Notes** - Remove unwanted notes with confirmation
- ✅ **Real-time Search** - Instant filtering by title or content
- ✅ **Persistent Storage** - Notes automatically saved to localStorage
- ✅ **Search Results Counter** - See how many notes match your search

### 🎯 **User Experience**
- **Masonry-style layout** for optimal space utilization
- **Animated search bar** with circular design
- **Visual feedback** for all user interactions
- **Error handling** for data corruption scenarios
- **Empty state messaging** when no notes exist

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sandrogomez-dev/App-Note.git
   cd App-Note/notas-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

### **Frontend Technologies**
- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **Context API** - State management for notes and search functionality
- **CSS3** - Advanced styling with gradients, animations, and modern properties
- **HTML5** - Semantic markup structure

### **Development Tools**
- **Create React App** - Zero-configuration React development environment
- **React Scripts** - Build tools and development server
- **localStorage API** - Client-side data persistence

## 📁 Project Structure

```
notas-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Note.js          # Individual note component
│   │   ├── NoteForm.js      # Note creation form
│   │   ├── NoteList.js      # Notes container with filtering
│   │   └── SearchBar.js     # Real-time search component
│   ├── context/
│   │   └── NoteContext.js   # Global state management
│   ├── App.js              # Main application component
│   ├── App.css             # Modern styling and animations
│   └── index.js            # Application entry point
└── package.json
```

## 🎨 Design Features

### **Color Palette**
- **Primary Gradient**: Purple to Blue (`#667eea` → `#764ba2`)
- **Success Gradient**: Blue to Cyan (`#4facfe` → `#00f2fe`)
- **Warning Gradient**: Green to Cyan (`#43e97b` → `#38f9d7`)
- **Danger Gradient**: Pink to Yellow (`#fa709a` → `#fee140`)

### **Visual Elements**
- **Border Radius**: 12-20px for modern rounded corners
- **Box Shadows**: Multi-layered shadows for depth
- **Transitions**: 0.3s ease for smooth interactions
- **Animations**: Staggered entrance animations

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🌟 Usage Examples

### Creating a Note
1. Enter a title in the top input field
2. Add your content in the textarea
3. Click "Agregar Nota" to save

### Editing a Note
1. Click the "Editar" button on any note
2. Modify the title or content
3. Click "Guardar" to save or "Cancelar" to discard changes

### Searching Notes
1. Type in the search bar with the 🔍 icon
2. Results filter automatically as you type
3. Click the ✕ button to clear the search

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔒 Data Persistence

Notes are automatically saved to your browser's localStorage, ensuring your data persists between sessions. The app includes error handling for corrupted data scenarios.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sandro Gómez**
- GitHub: [@sandrogomez-dev](https://github.com/sandrogomez-dev)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the development setup
- Modern CSS features for beautiful styling possibilities

---

⭐ **Star this repository if you found it helpful!**
