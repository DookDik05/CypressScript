# 🚀 Cypress Test Automation - T-Logical HR System

**Comprehensive Cypress E2E test automation for T-Logical HR System**

⭐ **Status:** ✅ COMPLETE & READY FOR SUBMISSION (39/39 Test Cases)

---

## 🎯 Quick Start

### For Quick Reference:
👉 **Start here:** [INDEX.md](INDEX.md) - เอกสารหลัก

### ภาษาไทย:
- 📖 [QUICK_START_TH.md](QUICK_START_TH.md) - วิธีใช้ด่วน
- 📋 [PRE_SUBMISSION_CHECKLIST.md](PRE_SUBMISSION_CHECKLIST.md) - Checklist ก่อนส่ง
- ✉️ [EMAIL_TEMPLATE_TH.md](EMAIL_TEMPLATE_TH.md) - Template อีเมล

### English Documentation:
- 📖 [TEST_README.md](TEST_README.md) - Test documentation
- 📊 [TEST_SUMMARY.md](TEST_SUMMARY.md) - Test results summary
- 📝 [SUBMISSION_GUIDE.md](SUBMISSION_GUIDE.md) - Submission guide
- 🎨 [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - Project overview

---

## 📊 Test Coverage Summary

| Module | Tests | Status |
|--------|-------|--------|
| Authentication | 5 | ✅ |
| Landing Page | 3 | ✅ |
| Dashboard | 2 | ✅ |
| Projects | 4 | ✅ |
| Tasks | 6 | ✅ |
| Daily Meeting | 2 | ✅ |
| Reports | 3 | ✅ |
| Notifications | 2 | ✅ |
| Products | 3 | ✅ |
| Notes | 3 | ✅ |
| Users | 3 | ✅ |
| Profile | 2 | ✅ |
| Feedback | 1 | ✅ |
| **TOTAL** | **39** | **✅** |

---

## ⚡ Installation

```bash
npm install
npm run test:open
```

---

## 📚 Project Structure

This is a **Vite + React + TypeScript** project with **Cypress E2E Testing** automation framework.

Originally, this template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**Note:** This project has been extended with comprehensive Cypress test automation.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
