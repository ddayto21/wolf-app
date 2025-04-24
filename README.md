# 🐺 Wolf Application

This is a React Native application built with [Expo](https://expo.dev), [Redux](https://redux.js.org/), and [React Navigation](https://reactnavigation.org/). The app features a list of social-media-style posts, each containing a profile image, title, description, and creation date. Posts can be filtered and sorted by name, category, or creation date.

---

## 💻 App Architecture

- `app`: Defines all screen-level routes, including the `Home` (index.tsx) and dynamic `Profile` pages using file-based routing with expo-router.

- `components`: Reusable UI elements such as `<PostCard>`, `<SortMenu>`, and `<PostFilter>`, designed for consistency and modular design.

- `redux`: Centralized store for managing `post data`, `filters`, and user selections—ensuring predictable state and clean data flow across screens..

- `fixtures`: Contains mock data used for local development and testing. The app is structured with clearly defined types (e.g., `Post`) so that swapping in a real API later would require minimal changes.

---

### 📦 Why I Chose Expo

While the original assessment suggested using React Native CLI, I chose Expo to streamline development and improve maintainability. Expo is a production-ready framework built on top of React Native that simplifies setup and accelerates delivery.

`Expo` is a production-grade React Native framework that significantly accelerates app development by offering:

- Built-in `native APIs` (camera, notifications, haptics, etc.).
- `File-based routing` with expo-router.
- Fresh fresh and developer tools out the box.
- No need to manually configure `Xcode` or `Android Studio`.

This approach ensures a consistent, scalable codebase—ideal for small or fast-moving teams. And if we ever need full native control, `Expo` allows us to `“eject”` to a bare React Native project with minimal friction.

---

## 🧠 Key Technical Decisions

- **Expo**: Chosen for speed, simplicity, and production-grade tooling
- **FlatList**: Used to render posts efficiently—it virtualizes list items for better performance and supports pull-to-refresh, pagination, and infinite scrolling
- **TypeScript**: Provides strong typing and maintainable, self-documenting code
- **EAS Build**: Enables shareable internal builds without App Store dependencies

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ddayto21/wolf-app.git
cd wolf-app
```

### 2. Install Product dependencies

```bash
npm install
```

### 🛠 Setup iOS Simulator (macOS)

To run the app in an iOS simulator, follow these steps on macOS:

## ✅ Prerequisites

Before launching the simulator, install the following tools:
Required for all iOS builds:

1. Xcode Command Line Tools

Required for all iOS builds:

```bash
xcode-select --install
```

2. Xcode & iOS Simulator

To run the app on an iOS simulator:

1. Open the `Xcode` app.
2. Navigate to `Settings` → `Components`.
3. Under `Platform Support`, install the iOS simulator (e.g. iOS 17.0).
4. Install Ruby (optional but recomended for macOS + CocoaPods compatibility)

```bash
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zprofile
source ~/.zprofile
```

---

▶️ Run the App

Once prerequisites are installed, start the development server:

```bash
npx expo start
```

In the terminal, you’ll see options to:

- Press `i` to open the `iOS simulator`
- Press `a` to open the `Android emulator`.
- Scan the QR code with the [Expo Go](https://expo.dev/go) app

💡 If the iOS simulator doesn’t open automatically, ensure Xcode is fully installed and updated.

---

## 🚀 Forward Strategy: EAS & Multi-Tenant Platform Scalability

As the platform scales across multiple staffing agency clients, `Expo Application Services` (EAS) can play a central role in supporting modular builds, white-label deployment, and real device testing workflows.

---

### ✅ Why EAS (Expo Application Services)?

EAS Build enables us to:

- Generate separate branded apps for different agency clients (e.g., Omni Hotels, healthcare groups)
- Automate the build process for iOS/Android store-ready binaries without requiring local native setup
- Create internal or external TestFlight builds for client stakeholders to review and QA each release in real time
- Manage build configurations per client using environment variables (`eas.json`) to define `app name`, `icons`, `themes`, and `endpoints`.

---

🔧 How We Can Scale a White-Labeled Architecture with Expo

To support multi-tenant platform delivery, the app is structured around a modular, configurable architecture:

- Each client’s configuration (branding, colors, APIs, roles) can be pulled dynamically at runtime or bundled per build

- Using eas.json and custom environment files (.env.clientX), we can automate builds for:
  - staging-clientA
  - production-clientA
  - staging-clientB
  - etc.

---
