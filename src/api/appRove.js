import service from '@/utils/request'

// @Tags Approve
// @Summary 创建Approve
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Approve true "创建Approve"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /approve/createApprove [post]
export const createApprove = (data) => {
  return service({
    url: '/approve/createApprove',
    method: 'post',
    data
  })
}

// @Tags Approve
// @Summary 删除Approve
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Approve true "删除Approve"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /approve/deleteApprove [delete]
export const deleteApprove = (data) => {
  return service({
    url: '/approve/deleteApprove',
    method: 'delete',
    data
  })
}

// @Tags Approve
// @Summary 删除Approve
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Approve"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /approve/deleteApprove [delete]
export const deleteApproveByIds = (data) => {
  return service({
    url: '/approve/deleteApproveByIds',
    method: 'delete',
    data
  })
}

// @Tags Approve
// @Summary 更新Approve
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Approve true "更新Approve"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /approve/updateApprove [put]
export const updateApprove = (data) => {
  return service({
    url: '/approve/updateApprove',
    method: 'put',
    data
  })
}

// @Tags Approve
// @Summary 用id查询Approve
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Approve true "用id查询Approve"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /approve/findApprove [get]
export const findApprove = (params) => {
  return service({
    url: '/approve/findApprove',
    method: 'get',
    params
  })
}

// @Tags Approve
// @Summary 分页获取Approve列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Approve列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /approve/getApproveList [get]
export const getApproveList = (params) => {
  return service({
    url: '/approve/getApproveList',
    method: 'get',
    params
  })
}
