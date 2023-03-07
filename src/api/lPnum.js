import service from '@/utils/request'

// @Tags LPhone
// @Summary 创建LPhone
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.LPhone true "创建LPhone"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lPhone/createLPhone [post]
export const createLPhone = (data) => {
  return service({
    url: '/lPhone/createLPhone',
    method: 'post',
    data
  })
}

// @Tags LPhone
// @Summary 删除LPhone
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.LPhone true "删除LPhone"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lPhone/deleteLPhone [delete]
export const deleteLPhone = (data) => {
  return service({
    url: '/lPhone/deleteLPhone',
    method: 'delete',
    data
  })
}

// @Tags LPhone
// @Summary 删除LPhone
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除LPhone"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lPhone/deleteLPhone [delete]
export const deleteLPhoneByIds = (data) => {
  return service({
    url: '/lPhone/deleteLPhoneByIds',
    method: 'delete',
    data
  })
}

// @Tags LPhone
// @Summary 更新LPhone
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.LPhone true "更新LPhone"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /lPhone/updateLPhone [put]
export const updateLPhone = (data) => {
  return service({
    url: '/lPhone/updateLPhone',
    method: 'put',
    data
  })
}

// @Tags LPhone
// @Summary 用id查询LPhone
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.LPhone true "用id查询LPhone"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /lPhone/findLPhone [get]
export const findLPhone = (params) => {
  return service({
    url: '/lPhone/findLPhone',
    method: 'get',
    params
  })
}

// @Tags LPhone
// @Summary 分页获取LPhone列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取LPhone列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lPhone/getLPhoneList [get]
export const getLPhoneList = (params) => {
  return service({
    url: '/lPhone/getLPhoneList',
    method: 'get',
    params
  })
}
