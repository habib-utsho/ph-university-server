"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const appError_1 = __importDefault(require("../../errors/appError"));
const user_service_1 = require("./user.service");
const insertStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield user_service_1.userServices.insertStudentToDb(req.body);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: 'Student inserted successfully!',
        data: student,
    });
}));
const insertFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const faculty = yield user_service_1.userServices.insertFacultyToDb(req.body);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: 'Faculty inserted successfully!',
        data: faculty,
    });
}));
const insertAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield user_service_1.userServices.insertAdminToDb(req.body);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: 'Admin inserted successfully!',
        data: admin,
    });
}));
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.userServices.getAllUser();
        (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
            success: true,
            message: 'Users are retrieved successfully!',
            data: users,
        });
    }
    catch (error) {
        next(error);
    }
});
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield user_service_1.userServices.getSingleUserById((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
        if (!user) {
            throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found!');
        }
        (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
            success: true,
            message: 'User is retrieved successfully!',
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userController = {
    insertStudent,
    insertFaculty,
    insertAdmin,
    getAllUsers,
    getUserById,
};
