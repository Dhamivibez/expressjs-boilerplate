# Express.js + TypeScript API

This is a boilerplate for an **Express.js API** built with **TypeScript**, featuring a clean and structured project setup.

## 📌 Features

- **Express.js** for handling API requests
- **TypeScript** with strict type-checking
- **Modular project structure**
- **Path aliases** for cleaner imports
- **ESNext** module support
- **Gitignore** for a clean repository

## 📂 Project Structure

```
/src
│── config/         # Configuration files
│── controllers/    # Route controllers
│── logs/          # Logging utilities
│── middlewares/    # Express middlewares
│── models/        # Data models
│── routes/        # API routes
│── services/      # Business logic
│── tests/         # Unit & integration tests
│── utils/         # Utility functions
│── index.ts       # App entry point
```

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone <repo-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Path Aliases

Aliases are defined in `tsconfig.json`:

```json
"paths": {
  "@config/*": ["src/config/*"],
  "@controllers/*": ["src/controllers/*"],
  "@middlewares/*": ["src/middlewares/*"],
  "@models/*": ["src/models/*"],
  "@routes/*": ["src/routes/*"],
  "@services/*": ["src/services/*"],
  "@utils/*": ["src/utils/*"]
}
```

### 4️⃣ Run the Development Server

```sh
npm run dev
```

### 5️⃣ Build for Production

```sh
npm run build
npm start
```

## 📜 Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start in development mode |
| `npm run build` | Compile TypeScript files  |
| `npm start`     | Run compiled JavaScript   |

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **ESNext Modules**

## 📌 Notes

- Ensure you have **Node.js v16+** installed.
- Restart TypeScript server after modifying `tsconfig.json`.

## 📄 License

MIT License © [Your Name]

---

🚀 Happy Coding!
