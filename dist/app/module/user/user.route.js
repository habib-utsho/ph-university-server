"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const zodValidateHandler_1 = __importDefault(require("../../middleware/zodValidateHandler"));
const user_controller_1 = require("./user.controller");
const student_validate_1 = require("../student/student.validate");
const faculty_validate_ts_1 = require("../faculty/faculty.validate.ts");
const admin_validate_ts_1 = require("../admin/admin.validate.ts");
const router = (0, express_1.Router)();
exports.userRouter = router;
router.post('/create-student', (0, zodValidateHandler_1.default)(student_validate_1.createStudentZodSchema), user_controller_1.userController.insertStudent);
router.post('/create-faculty', (0, zodValidateHandler_1.default)(faculty_validate_ts_1.createFacultyZodSchema), user_controller_1.userController.insertFaculty);
router.post('/create-admin', (0, zodValidateHandler_1.default)(admin_validate_ts_1.createAdminZodSchema), user_controller_1.userController.insertAdmin);
router.get('/', user_controller_1.userController.getAllUsers);
router.get('/:id', user_controller_1.userController.getUserById);
