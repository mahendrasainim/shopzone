# How to Run ShopZone in VSCode

## Quick Start Guide

### Method 1: Using VSCode Integrated Terminal (Recommended)

1. **Open the project in VSCode**:
   - Open VSCode
   - File → Open Folder
   - Navigate to: `c:\Users\mahen\OneDrive\Desktop\task 6`
   - Click "Select Folder"

2. **Open the Terminal in VSCode**:
   - Press `Ctrl + `` (backtick) to open terminal
   - OR go to: Terminal → New Terminal
   - OR use menu: View → Terminal

3. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Your app will open automatically**:
   - Browser will open at `http://localhost:3000`
   - If it doesn't open automatically, manually go to: http://localhost:3000

### Method 2: Using VSCode Tasks (Optional)

You can also create a task configuration for easier running:

1. **Create `.vscode/tasks.json`** (I'll create this for you)
2. Press `Ctrl + Shift + P`
3. Type "Tasks: Run Task"
4. Select "npm: start"

---

## Step-by-Step Instructions

### Step 1: Open Project in VSCode

1. Launch Visual Studio Code
2. Click **File** → **Open Folder**
3. Navigate to: `c:\Users\mahen\OneDrive\Desktop\task 6`
4. Click **Select Folder**

### Step 2: Open Terminal

You have several options:
- **Keyboard Shortcut**: `Ctrl + `` (Control + Backtick)
- **Menu**: Terminal → New Terminal
- **Command Palette**: `Ctrl + Shift + P` → type "Terminal: Create New Terminal"

### Step 3: Check if Dependencies are Installed

In the terminal, check if `node_modules` folder exists:
```bash
dir node_modules
```

If you see "cannot find path" or empty, install dependencies:
```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm start
```

You should see output like:
```
Compiling...
Compiled successfully!

You can now view shopzone in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Step 5: View Your App

- The browser should open automatically
- If not, manually navigate to: **http://localhost:3000**

---

## Troubleshooting

### Issue: Port 3000 is already in use

**Solution**: Kill the process using port 3000
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

Or use a different port:
```bash
set PORT=3001 && npm start
```

### Issue: npm command not found

**Solution**: Install Node.js
- Download from: https://nodejs.org/
- Install Node.js (includes npm)
- Restart VSCode

### Issue: Module not found errors

**Solution**: Reinstall dependencies
```bash
# Delete node_modules and package-lock.json
rmdir /s node_modules
del package-lock.json

# Reinstall
npm install
```

### Issue: Build errors

**Solution**: Check for syntax errors
- Look at the terminal output for specific error messages
- Check file paths (Windows is case-sensitive in some cases)
- Ensure all imports are correct

---

## VSCode Tips

### Useful Extensions

Install these VSCode extensions for better React development:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Prettier - Code formatter** - Auto-format code
3. **ESLint** - Code linting
4. **Auto Rename Tag** - Auto-rename paired HTML/JSX tags
5. **Bracket Pair Colorizer** - Color matching brackets

### Keyboard Shortcuts

- `Ctrl + `` - Toggle terminal
- `Ctrl + Shift + P` - Command palette
- `Ctrl + B` - Toggle sidebar
- `F5` - Start debugging
- `Ctrl + /` - Toggle comment

### Debugging

1. Press `F5` or go to Run → Start Debugging
2. Select "Chrome" or "Edge" as debugger
3. Set breakpoints by clicking left of line numbers
4. Your app will open in debug mode

---

## Running Commands

### Available npm Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (not recommended)
npm run eject
```

### Stop the Server

- In the terminal, press `Ctrl + C`
- Or close the terminal tab

---

## File Structure Overview

```
task 6/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   ├── context/            # Context API (CartContext)
│   ├── pages/              # Page components
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── package.json            # Dependencies
├── vercel.json            # Vercel config
└── README.md              # Project docs
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `npm install` |
| Start dev server | `npm start` |
| Build for production | `npm run build` |
| Stop server | `Ctrl + C` |
| Open terminal | `Ctrl + `` |
| Open browser | http://localhost:3000 |

---

## Next Steps After Running

1. ✅ Test navigation - Click through all pages
2. ✅ Test cart - Add items, check badge count
3. ✅ Test login - Login as guest
4. ✅ Test checkout - Should redirect if not logged in
5. ✅ Test refresh - Cart should persist
6. ✅ Test protected routes - Try accessing /checkout without login

Happy coding! 🚀
