# T-Logical HR System - Cypress Test Automation

## ข้อมูลการทดสอบ

**ระบบ:** T-Logical HR System  
**URL:** https://hr.tlogical.com  
**Username:** staff@tlogical.com  
**Password:** test12345  
**วันที่ส่ง:** 16/3/2569

## โครงสร้างการทดสอบ

### Modules ที่ทดสอบ:

1. **Authentication (5 test cases)**
   - TC-AUTH-001: Login สำเร็จ
   - TC-AUTH-002: Login password ผิด
   - TC-AUTH-003: Show/Hide Password
   - TC-AUTH-004: Forgot Password Flow
   - TC-AUTH-005: Reset Password

2. **Landing Page (3 test cases)**
   - TC-LAND-001: เปิดหน้า Landing
   - TC-LAND-002: เปิด News
   - TC-LAND-003: เปิด News Detail

3. **Dashboard (2 test cases)**
   - TC-DASH-001: Dashboard Summary
   - TC-DASH-002: Status Breakdown

4. **Projects (4 test cases)**
   - TC-PROJ-001: Create Project
   - TC-PROJ-002: Edit Project
   - TC-PROJ-003: Delete Project
   - TC-PROJ-004: Reorder Project

5. **Tasks (6 test cases)**
   - TC-TASK-001: Create Task
   - TC-TASK-002: Edit Task
   - TC-TASK-003: Delete Task
   - TC-TASK-004: Add Subtask
   - TC-TASK-005: Upload Attachment
   - TC-TASK-006: Import Excel

6. **Daily Meeting (2 test cases)**
   - TC-DM-001: Calendar View
   - TC-DM-002: Create Task From Date

7. **Reports (3 test cases)**
   - TC-REP-001: Staff View
   - TC-REP-002: Admin View
   - TC-REP-003: Edit Actual Man-day

8. **Notifications (2 test cases)**
   - TC-NOTI-001: Notification Display
   - TC-NOTI-002: Mark as Read

9. **Products (3 test cases)**
   - TC-PROD-001: Create Product
   - TC-PROD-002: Show/Hide Password
   - TC-PROD-003: Search Product

10. **Notes (3 test cases)**
    - TC-NOTE-001: Create Note
    - TC-NOTE-002: Auto Save
    - TC-NOTE-003: Share Note

11. **Users (3 test cases)**
    - TC-USER-001: Create User
    - TC-USER-002: Edit User
    - TC-USER-003: Reset Password

12. **Profile (2 test cases)**
    - TC-PI-001: Update Profile
    - TC-PI-002: Change Password

13. **Feedback (1 test case)**
    - TC-FB-001: Submit Feedback

**รวมทั้งหมด: 39 Test Cases**

## วิธีการใช้งาน

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รัน Tests ทั้งหมด
```bash
npm run test
```

### 3. รัน Tests แบบ Interactive
```bash
npm run test:open
```

### 4. รัน Tests เฉพาะ Module
```bash
npx cypress run --spec "cypress/e2e/auth.cy.ts"
```

### 5. สร้าง Report Excel
```bash
npm run generate-report
```

### 6. ดูรายละเอียด Report
```bash
npm run open-report
```

## โครงสร้างไฟล์

```
cypress/
├── e2e/
│   ├── auth.cy.ts              # Authentication tests
│   ├── landing.cy.ts            # Landing page tests
│   ├── dashboard.cy.ts          # Dashboard tests
│   ├── projects.cy.ts           # Projects tests
│   ├── tasks.cy.ts              # Tasks tests
│   ├── daily-meeting.cy.ts      # Daily meeting tests
│   ├── reports.cy.ts            # Reports tests
│   ├── notifications.cy.ts      # Notifications tests
│   ├── products.cy.ts           # Products tests
│   ├── notes.cy.ts              # Notes tests
│   ├── users.cy.ts              # Users tests
│   ├── profile.cy.ts            # Profile tests
│   └── feedback.cy.ts           # Feedback tests
├── support/
│   ├── page-objects/
│   │   ├── login.page.ts        # Login page object
│   │   ├── landing.page.ts      # Landing page object
│   │   ├── dashboard.page.ts    # Dashboard page object
│   │   ├── projects.page.ts     # Projects page object
│   │   ├── tasks.page.ts        # Tasks page object
│   │   ├── daily-meeting.page.ts
│   │   ├── reports.page.ts
│   │   ├── notifications.page.ts
│   │   ├── products.page.ts
│   │   ├── notes.page.ts
│   │   ├── users.page.ts
│   │   ├── profile.page.ts
│   │   └── feedback.page.ts
│   ├── e2e.ts
│   └── commands.ts
├── fixtures/
│   └── example.json
└── reports/
    └── T-Logical_HR_Test_Report_*.xlsx
```

## Page Object Pattern

ทุก test ใช้ Page Object Model เพื่อให้ได้ความเป็นระเบียบและ maintainability สูง:

```typescript
// Example: LoginPage
export class LoginPage {
  visitLogin() { ... }
  enterEmail(email: string) { ... }
  enterPassword(password: string) { ... }
  clickSignIn() { ... }
  login(email: string, password: string) { ... }
}
```

## Configuration

### cypress.config.ts
- **Base URL:** https://hr.tlogical.com
- **Viewport:** 1280x720
- **Reporter:** JUnit XML
- **Environment Variables:**
  - username: staff@tlogical.com
  - password: test12345

## Test Results

ผลการทดสอบจะถูกสร้างเป็น:
1. **HTML Report** - สำหรับการ browse online
2. **Excel Report** - สำหรับการ submit ให้บริษัท
3. **JUnit XML** - สำหรับ CI/CD integration

## Troubleshooting

### ปัญหา: Tests ไม่สามารถ login ได้
**วิธีแก้:** ตรวจสอบว่า username/password ถูกต้องในไฟล์ cypress.config.ts

### ปัญหา: Element ไม่พบ
**วิธีแก้:** ตรวจสอบ data-testid attributes ในระบบ จากนั้นปรับ selectors ใน page objects

### ปัญหา: Tests timeout
**วิธีแก้:** เพิ่ม timeout ใน cypress.config.ts หรือใช้ cy.wait() ในต้องการ

## คำสั่งใน package.json

```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:headed": "cypress run --headed",
    "test:chrome": "cypress run --browser chrome",
    "generate-report": "ts-node scripts/generate-report.ts",
    "open-report": "start cypress/reports"
  }
}
```

## Notes

- Tests ทั้งหมดจะใช้ credentials เดียวกัน (staff@tlogical.com)
- สามารถปรับปรุง selectors ได้ตามโครงสร้างจริงของ HTML
- Page Objects สามารถ reuse ได้ใน test files อื่น ๆ
- Excel Report จะถูกสร้างใน `cypress/reports/` พร้อมวันที่

## ติดต่อผู้พัฒนา

นำทดสอบระบบโดย Chonlatee Satruphai  
สำหรับตำแหน่ง: Software Tester  
บริษัท: ที.ลอจิคอล เรสโซลูชั่น จำกัด
