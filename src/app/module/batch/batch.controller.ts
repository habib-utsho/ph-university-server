import { RequestHandler } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { batchServices } from "./batch.service"
import { StatusCodes } from "http-status-codes"
import AppError from "../../errors/appError"

const insertBatch: RequestHandler = catchAsync(
  async (req, res) => {
    const department = req.body?.department
    const batch = await batchServices.insertBatchToDb(department)
    sendResponse(res, StatusCodes.OK, {
      success: true,
      message: 'Batch inserted successfully!',
      data: batch,
    })
  },
)

const getAllBatches = catchAsync(async(req,res)=> {
    const batches = await batchServices.getAllBatch()
    sendResponse(res, StatusCodes.OK, {
      success: true,
      message: 'Batches are retrieved successfully!',
      data: batches,
    })
})

const getBatchById = catchAsync(async(req,res)=> {
    const batch = await batchServices.getSingleBatchById(req.params?.id)
    if (!batch) {
      throw  new AppError(StatusCodes.NOT_FOUND, 'Batch not found!')
    }
    sendResponse(res, StatusCodes.OK, {
      success: true,
      message: 'Batch retrieved successfully!',
      data: batch,
    })
})



export const batchController  = {
    insertBatch,
    getAllBatches,
    getBatchById,
}
