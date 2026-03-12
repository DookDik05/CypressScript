# ✅ Pre-Submission Checklist
## T-Logical HR System - Cypress Test Automation

**ชื่อโปรเจกต์:** Cypress Test Automation for T-Logical HR System  
**ผู้ปฏิบัติงาน:** (ชื่อผู้ทำ)  
**วันที่เตรียม:** 16 มีนาคม 2569 (Deadline)  
**สถานะ:** กำลังดำเนินการ ⏳

---

## 📋 ส่วนที่ 1: การติดตั้ง & การเตรียมตัว

### ขั้นตอนที่ 1: ตรวจสอบ Environment
- [ ] Node.js เวอร์ชัน 16+ ติดตั้งแล้ว
- [ ] npm ติดตั้งแล้ว
- [ ] Git ติดตั้งแล้ว (ถ้าต้อง)
- [ ] Run: `node --version` ✓
- [ ] Run: `npm --version` ✓

### ขั้นตอนที่ 2: Clone/Download โปรเจกต์
- [ ] โปรเจกต์ CypressLearning ดาวน์โหลดแล้ว
- [ ] ไปที่ไดเรกทอรี่: `cd CypressLearning`
- [ ] ตรวจสอบ package.json มีอยู่
- [ ] ตรวจสอบ cypress.config.ts มีอยู่

### ขั้นตอนที่ 3: ติดตั้ง Dependencies
```bash
npm install
```
- [ ] npm install เสร็จสิ้น
- [ ] ไม่มี error ขณะติดตั้ง
- [ ] node_modules folder ถูกสร้าง
- [ ] ExcelJS ติดตั้งแล้ว
- [ ] ts-node ติดตั้งแล้ว

---

## 🧪 ส่วนที่ 2: ตรวจสอบ Test Files

### ขั้นตอนที่ 4: ตรวจสอบไฟล์ Test
- [ ] cypress/e2e/ folder มี 13 files:
  - [ ] auth.cy.ts
  - [ ] landing.cy.ts
  - [ ] dashboard.cy.ts
  - [ ] projects.cy.ts
  - [ ] tasks.cy.ts
  - [ ] daily-meeting.cy.ts
  - [ ] reports.cy.ts
  - [ ] notifications.cy.ts
  - [ ] products.cy.ts
  - [ ] notes.cy.ts
  - [ ] users.cy.ts
  - [ ] profile.cy.ts
  - [ ] feedback.cy.ts

### ขั้นตอนที่ 5: ตรวจสอบ Page Objects
- [ ] cypress/support/page-objects/ folder มี 13 files:
  - [ ] login.page.ts
  - [ ] dashboard.page.ts
  - [ ] landing.page.ts
  - [ ] projects.page.ts
  - [ ] tasks.page.ts
  - [ ] daily-meeting.page.ts
  - [ ] reports.page.ts
  - [ ] notifications.page.ts
  - [ ] products.page.ts
  - [ ] notes.page.ts
  - [ ] users.page.ts
  - [ ] profile.page.ts
  - [ ] feedback.page.ts

### ขั้นตอนที่ 6: ตรวจสอบ Support Files
- [ ] cypress/support/utils.ts มีอยู่
- [ ] cypress/support/test-data.ts มีอยู่
- [ ] cypress/support/e2e.ts มีอยู่
- [ ] cypress/support/commands.ts มีอยู่

### ขั้นตอนที่ 7: ตรวจสอบ Configuration
- [ ] cypress.config.ts มี baseUrl = "https://hr.tlogical.com"
- [ ] cypress.config.ts มี environment variables (username, password)
- [ ] package.json มี scripts (test, test:open, test:headed, etc.)
- [ ] package.json มี devDependencies (cypress, typescript, exceljs, ts-node)

---

## 🧬 ส่วนที่ 3: ตรวจสอบ Selectors

### ขั้นตอนที่ 8: ตรวจสอบ Login Selectors
```bash
npm run test:open
```
- [ ] เปิด Cypress UI สำเร็จ
- [ ] ไปยัง https://hr.tlogical.com
- [ ] ตรวจสอบ elements ต่อไปนี้:
  - [ ] Email input field มี data-testid หรือ CSS selector
  - [ ] Password input field มี data-testid หรือ CSS selector
  - [ ] Sign In button มี data-testid หรือ CSS selector
  - [ ] Forgot Password link มี selector

**หมายเหตุ:** ถ้าไม่พบ selector อื่นที่เหมาะสม ให้อัปเดตไฟล์ page object ที่เกี่ยวข้อง

### ขั้นตอนที่ 9: ตรวจสอบ Dashboard Selectors
- [ ] ใน Dashboard ตรวจสอบ:
  - [ ] Total Projects element
  - [ ] Total Tasks element
  - [ ] Completed Tasks element
  - [ ] Status breakdown chart

### ขั้นตอนที่ 10: ตรวจสอบ Module Pages
- [ ] Landing Page selectors
- [ ] Projects page selectors
- [ ] Tasks page selectors
- [ ] Daily Meeting calendar selectors
- [ ] Reports page selectors
- [ ] Notifications page selectors
- [ ] Products page selectors
- [ ] Notes page selectors
- [ ] Users page selectors
- [ ] Profile page selectors
- [ ] Feedback page selectors

---

## 🚀 ส่วนที่ 4: รัน Test Cases

### ขั้นตอนที่ 11: รัน Test ทั้งหมด
```bash
npm run test
```
- [ ] Test run สำเร็จ
- [ ] ไม่มี error เชิงสำคัญ
- [ ] ตรวจสอบผลลัพธ์:
  - [ ] Auth tests (5 tests)
  - [ ] Landing tests (3 tests)
  - [ ] Dashboard tests (2 tests)
  - [ ] Projects tests (4 tests)
  - [ ] Tasks tests (6 tests)
  - [ ] Daily Meeting tests (2 tests)
  - [ ] Reports tests (3 tests)
  - [ ] Notifications tests (2 tests)
  - [ ] Products tests (3 tests)
  - [ ] Notes tests (3 tests)
  - [ ] Users tests (3 tests)
  - [ ] Profile tests (2 tests)
  - [ ] Feedback tests (1 test)

### ขั้นตอนที่ 12: ตรวจสอบผลการทดสอบ
- [ ] Total tests: 39
- [ ] Passed: ≥ 35 (อย่างน้อย 90%)
- [ ] Failed: ≤ 4
- [ ] Skipped: 0
- [ ] Duration: < 10 minutes

### ขั้นตอนที่ 13: รัน Specific Module Tests
```bash
npm run test:auth
npm run test:projects
npm run test:tasks
```
- [ ] Individual modules รัน OK
- [ ] ไม่มี error

---

## 📊 ส่วนที่ 5: สร้าง Excel Report

### ขั้นตอนที่ 14: ตรวจสอบ Report Generator
- [ ] scripts/generate-report.ts มีอยู่
- [ ] ExcelJS ติดตั้งแล้ว (`npm list exceljs`)
- [ ] ts-node ติดตั้งแล้ว (`npm list ts-node`)

### ขั้นตอนที่ 15: สร้าง Report
```bash
npm run generate-report
```
- [ ] Report generation สำเร็จ
- [ ] ไม่มี error
- [ ] ไฟล์ Excel ถูกสร้าง

### ขั้นตอนที่ 16: ตรวจสอบ Excel Report
```bash
npm run open-report
```
- [ ] เปิด cypress/reports/ folder
- [ ] ไฟล์ `T-Logical_HR_Test_Report_*.xlsx` มีอยู่
- [ ] ตรวจสอบเนื้อหา Excel:
  - [ ] Sheet 1: "Test Results" มี 39 rows
  - [ ] Sheet 2: "Summary" มีสรุปต่อโมดูล
  - [ ] Column headers ถูกต้อง
  - [ ] Data format ถูกต้อง
  - [ ] Colors applied (green/red for pass/fail)

### ขั้นตอนที่ 17: ตรวจสอบ Test Results ใน Excel
- [ ] Test Results sheet:
  - [ ] TC ID column (TC-AUTH-001, TC-LAND-001, etc.)
  - [ ] Module column
  - [ ] Status column (PASSED/FAILED)
  - [ ] Priority column
  - [ ] DateTime column
  
- [ ] Summary sheet:
  - [ ] Module names
  - [ ] Passed count
  - [ ] Failed count
  - [ ] Total count
  - [ ] Pass Rate %

---

## 📄 ส่วนที่ 6: เตรียมเอกสาร

### ขั้นตอนที่ 18: ตรวจสอบเอกสาร
ไฟล์ที่ต้องมี:
- [ ] INDEX.md (เอกสารหลัก)
- [ ] QUICK_START_TH.md (วิธีใช้ด่วน)
- [ ] PROJECT_OVERVIEW.md (ภาพรวมโปรเจกต์)
- [ ] TEST_README.md (คู่มือการทดสอบ)
- [ ] TEST_SUMMARY.md (ผลการทดสอบ)
- [ ] SUBMISSION_GUIDE.md (วิธีการส่ง)
- [ ] EMAIL_TEMPLATE_TH.md (Template อีเมล)

### ขั้นตอนที่ 19: ตรวจสอบ README
- [ ] README.md มีอยู่
- [ ] README ได้รับการอัปเดต (ถ้าจำเป็น)
- [ ] Link ไปยังเอกสารใหม่ถูกต้อง

---

## 📧 ส่วนที่ 7: เตรียมการส่ง

### ขั้นตอนที่ 20: เตรียมอีเมล
- [ ] ตัวรับ (To): ตามที่ระบุ (________________)
- [ ] Subject: ตามที่ร่างใน EMAIL_TEMPLATE_TH.md
- [ ] Body: ใช้ template จาก EMAIL_TEMPLATE_TH.md
- [ ] เตรียมไฟล์แนบ:

### ขั้นตอนที่ 21: เตรียมไฟล์แนบ
- [ ] Excel Report: `T-Logical_HR_Test_Report_*.xlsx`
- [ ] Test Summary: `TEST_SUMMARY.md` (หรือ convert เป็น PDF)
- [ ] Documentation: `INDEX.md` (หรือ convert เป็น PDF)
- [ ] Submission Guide: `SUBMISSION_GUIDE.md` (หรือ convert เป็น PDF)

**ตัวเลือก:** 
1. แนบไฟล์โปรเจกต์ทั้งหมด (zip)
2. แนบเฉพาะ Excel + เอกสารสำคัญ

### ขั้นตอนที่ 22: ตรวจสอบไฟล์แนบ
- [ ] ไฟล์ทั้งหมดที่จำเป็น
- [ ] ขนาดไฟล์ไม่เกินขีดจำกัด (ถ้ามี)
- [ ] ไฟล์สามารถเปิดได้
- [ ] ชื่อไฟล์ถูกต้อง

---

## ✏️ ส่วนที่ 8: ตรวจสอบเอกสารส่วนตัว

### ขั้นตอนที่ 23: ตรวจสอบข้อมูลส่วนตัว
- [ ] ชื่อ - ถูกต้อง
- [ ] ตำแหน่ง - Cypress/QA Automation Engineer
- [ ] บริษัท - ที.ลอจิคอล เรสโซลูชั่น จำกัด
- [ ] Email - ถูกต้อง
- [ ] เบอร์โทร - ถูกต้อง (ถ้าต้อง)

### ขั้นตอนที่ 24: ตรวจสอบลายเซ็น
- [ ] ลายเซ็นดิจิทัลหรือไฟล์ลายเซ็น (ถ้าต้อง)
- [ ] วันที่และเวลาถูกต้อง
- [ ] PDF/Document ชัดเจน

---

## 🎯 ส่วนที่ 9: การส่งมอบสุดท้าย

### ขั้นตอนที่ 25: ตรวจสอบแบบสุดท้าย
- [ ] Test cases ทั้งหมด 39 สร้างแล้ว
- [ ] Page Objects ทั้งหมด 13 สร้างแล้ว
- [ ] Test รัน OK ≥ 90% pass rate
- [ ] Excel Report สร้างแล้ว
- [ ] เอกสารทั้งหมดเตรียมแล้ว
- [ ] ไฟล์แนบเตรียมแล้ว
- [ ] อีเมล draft เตรียมแล้ว

### ขั้นตอนที่ 26: ส่งอีเมล
```
To: [recipient email]
Subject: [ตามที่ระบุใน EMAIL_TEMPLATE_TH.md]
Attachments:
  - T-Logical_HR_Test_Report_*.xlsx
  - TEST_SUMMARY.md
  - INDEX.md
  - (อื่นๆ ตามที่ระบุ)
```

- [ ] คลิก Send
- [ ] ตรวจสอบการส่ง OK
- [ ] เก็บ Email copy for records

### ขั้นตอนที่ 27: ยืนยันการส่ง
- [ ] Email ส่งสำเร็จ
- [ ] ได้รับ confirmation (ถ้ามี)
- [ ] บันทึกเวลาและวันที่ที่ส่ง
- [ ] เก็บ proof of submission

---

## 📊 Summary

| Item | Status | Notes |
|------|--------|-------|
| Environment Setup | [ ] | |
| Dependencies Install | [ ] | |
| Test Files Check | [ ] | 13 spec files |
| Page Objects Check | [ ] | 13 page objects |
| Support Files Check | [ ] | utils, test-data |
| Configuration Check | [ ] | cypress.config.ts |
| Selector Validation | [ ] | ตรวจสอบ vs live app |
| Run All Tests | [ ] | 39 tests |
| Test Results ≥90% | [ ] | Target: 35/39+ |
| Generate Report | [ ] | Excel .xlsx |
| Report Validation | [ ] | ตรวจสอบเนื้อหา |
| Documentation | [ ] | 7 markdown files |
| Email Preparation | [ ] | Draft + attachments |
| Final Review | [ ] | ทั้งหมด OK |
| Send Submission | [ ] | Completed ✓ |

---

## ⏰ Timeline

```
วันที่: 16 มีนาคม 2569
เวลา: ก่อน 17:00 น. (หรือตามที่ระบุ)

Timeline แนะนำ:
- 09:00 - 09:30: ติดตั้ง dependencies
- 09:30 - 10:30: ตรวจสอบ selectors
- 10:30 - 11:00: รัน tests ทั้งหมด
- 11:00 - 11:15: สร้าง Excel report
- 11:15 - 11:30: ตรวจสอบ report
- 11:30 - 12:00: เตรียมอีเมล + ไฟล์แนบ
- 12:00 - 12:15: ส่งอีเมล
- 12:15 - 12:30: ยืนยันการส่ง
```

---

## 🚨 Troubleshooting

### ปัญหา: npm install ล้มเหลว
**วิธีแก้:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### ปัญหา: Tests ไม่รัน
**วิธีแก้:**
```bash
npm run test -- --no-exit
npm run test:open  (ใช้ UI เพื่อ debug)
```

### ปัญหา: Element selectors ไม่พบ
**วิธีแก้:**
1. เปิด https://hr.tlogical.com ในเบราว์เซอร์
2. ตรวจสอบ HTML elements จริง
3. อัปเดต selectors ใน page-objects/

### ปัญหา: Excel Report ไม่สร้าง
**วิธีแก้:**
```bash
npm list exceljs   # ตรวจสอบติดตั้ง
npm run generate-report -- --verbose
```

---

## 📞 Contact Information

**ติดต่อได้ที่:**
- Email: [your email]
- Phone: [your phone]
- Name: [your name]

**ระยะเวลาการตอบสนอง:** 24 ชั่วโมง

---

## 📝 Notes

```
บันทึกการปฏิบัติงาน:
```

**Date:** _______________

**Completed by:** _______________________

**Reviewed by:** _______________________

**Approved by:** _______________________

---

## ✅ Status: READY FOR SUBMISSION

**วันที่เสร็จสิ้น:** _______________

**เวลาที่ส่ง:** _______________

**ผู้รับการส่ง:** _______________

**ยืนยันการรับ:** _______________

---

**© 2569 T-Logical HR System | Cypress Automation Framework**

