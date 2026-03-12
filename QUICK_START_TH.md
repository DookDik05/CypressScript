# 🚀 วิธีใช้ Cypress Test Suite - T-Logical HR System

## ✅ ก่อนเริ่ม

### ติดตั้ง Node.js
ดาวน์โหลดและติดตั้ง [Node.js v18+](https://nodejs.org/)

### เปิด Command Prompt
- **Windows:** `Win + R` พิมพ์ `cmd` แล้ว Enter
- **macOS:** ⌘ + Space พิมพ์ `Terminal`
- **Linux:** Ctrl + Alt + T

---

## 🔧 การติดตั้ง

### 1. เปิดโฟลเดอร์โปรเจกต์
```bash
cd e:\Programming\Cypress\CypressLearning
```

### 2. ติดตั้ง Dependencies
```bash
npm install
```
รอจนกว่าจะเสร็จ (~5 นาที)

---

## ▶️ การรัน Tests

### วิธี 1: รัน Tests ทั้งหมด (ง่ายที่สุด)

**Windows:**
```bash
run-tests.bat
```

**macOS/Linux:**
```bash
bash run-tests.sh
```

### วิธี 2: รัน Tests ด้วย npm

```bash
# รัน tests ทั้งหมด (headless)
npm run test

# รัน tests ด้วย browser หน้าต่าง (สำหรับดู)
npm run test:headed

# เปิด Cypress UI (interactive)
npm run test:open
```

### วิธี 3: รัน Tests เฉพาะ Module

```bash
# Authentication tests
npm run test:auth

# Landing page tests
npm run test:landing

# Dashboard tests
npm run test:dashboard

# ทั้งหมด
npm run test:all-modules
```

---

## 📊 สร้าง Report

### สร้าง Excel Report
```bash
npm run generate-report
```

Report จะถูกสร้างใน `cypress/reports/`

### ดู Report
```bash
npm run open-report
```

---

## 🎯 Workflow ทั่วไป

### วันแรก (ติดตั้ง)
```bash
cd e:\Programming\Cypress\CypressLearning
npm install
npm run test
```

### ทดสอบปกติ
```bash
npm run test
```

### ส่งผลการทดสอบ
```bash
npm run generate-report
npm run open-report
```

---

## 📁 โครงสร้างไฟล์

```
CypressLearning/
├── cypress/
│   ├── e2e/                    # Test files
│   │   ├── auth.cy.ts
│   │   ├── landing.cy.ts
│   │   ├── dashboard.cy.ts
│   │   └── ... (อื่นๆ)
│   ├── support/
│   │   └── page-objects/       # Page objects
│   └── reports/                # Excel reports
├── scripts/
│   └── generate-report.ts      # Script สร้าง Excel
├── cypress.config.ts           # Config
├── package.json                # Dependencies
├── run-tests.bat              # Script รัน (Windows)
├── run-tests.sh               # Script รัน (macOS/Linux)
├── TEST_README.md             # คู่มือ
├── TEST_SUMMARY.md            # สรุปผล
└── SUBMISSION_GUIDE.md        # วิธีส่ง
```

---

## 🔧 Configuration

### ตัวอักษรเข้าสู่ระบบ
ไฟล์: `cypress.config.ts`
```
URL:      https://hr.tlogical.com
Username: staff@tlogical.com
Password: test12345
```

### เปลี่ยน URL หรือ credentials
แก้ไขใน `cypress.config.ts`:
```typescript
env: {
  username: "your-username",
  password: "your-password",
  apiUrl: "https://your-url.com",
},
```

---

## ❌ ปัญหาทั่วไป

### ปัญหา: npm command ไม่รู้จัก
**วิธีแก้:** ตรวจสอบว่า Node.js ถูกติดตั้ง
```bash
node --version
npm --version
```

### ปัญหา: Tests timeout
**วิธีแก้:** เพิ่ม timeout ใน `cypress.config.ts`
```typescript
defaultCommandTimeout: 10000,
```

### ปัญหา: Elements ไม่พบ
**วิธีแก้:** ตรวจสอบ selectors ใน page objects

### ปัญหา: Login ล้มเหลว
**วิธีแก้:** ตรวจสอบ username/password ถูกต้อง

---

## 💡 Tips & Tricks

### ดู Real-time Testing
```bash
npm run test:headed
```
หน้าต่าง browser จะเปิดแสดงการทดสอบแบบ real-time

### Debug Single Test
```bash
npx cypress run --spec "cypress/e2e/auth.cy.ts"
```

### ใช้ Cypress Inspector
```bash
npm run test:open
```
คลิกที่ test เพื่อดูรายละเอียด

### ดูรายละเอียด Error
เปิด browser DevTools: `F12`

---

## 📧 การส่งผลการทดสอบ

### ขั้นตอน 1: สร้าง Report
```bash
npm run generate-report
```

### ขั้นตอน 2: ตรวจสอบไฟล์
ไฟล์จะอยู่ใน: `cypress/reports/`

### ขั้นตอน 3: เตรียมอีเมล
ใช้ template: `EMAIL_TEMPLATE_TH.md`

### ขั้นตอน 4: ส่งอีเมล
- ถึง: hr@tlogical.com
- แนบ: Excel Report + TEST_SUMMARY.md

---

## ✅ Checklist

### ก่อนเริ่มทดสอบ
- [ ] ติดตั้ง Node.js
- [ ] รัน `npm install`
- [ ] ตรวจสอบ credentials
- [ ] ทดสอบ login

### ระหว่างทดสอบ
- [ ] รัน `npm run test`
- [ ] ตรวจสอบผลการทดสอบ
- [ ] ทำบันทึกข้อค้นพบ

### ก่อนส่งผลการทดสอบ
- [ ] สร้าง Excel Report
- [ ] ตรวจสอบ Report ถูกต้อง
- [ ] เตรียมอีเมล
- [ ] แนบไฟล์ทั้งหมด

---

## 📞 ติดต่อช่วยเหลือ

- **ปัญหาทางเทคนิค:** ดูไฟล์ `cypress.config.ts` และ test specs
- **ปัญหา Tests:** ตรวจสอบ page-objects selectors
- **ปัญหาอื่นๆ:** อ่านไฟล์ `TEST_README.md`

---

## 🎓 เรียนรู้เพิ่มเติม

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Page Object Model](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests)

---

**Happy Testing! 🎉**

