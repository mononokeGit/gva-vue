import service from '@/utils/request'

// @Tags PhoneNum
// @Summary 创建PhoneNum
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PhoneNum true "创建PhoneNum"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /phoneNum/createPhoneNum [post]
export const createPhoneNum = (data) => {
  return service({
    url: '/phoneNum/createPhoneNum',
    method: 'post',
    data
  })
}

// @Tags PhoneNum
// @Summary 删除PhoneNum
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PhoneNum true "删除PhoneNum"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /phoneNum/deletePhoneNum [delete]
export const deletePhoneNum = (data) => {
  return service({
    url: '/phoneNum/deletePhoneNum',
    method: 'delete',
    data
  })
}

// @Tags PhoneNum
// @Summary 删除PhoneNum
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除PhoneNum"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /phoneNum/deletePhoneNum [delete]
export const deletePhoneNumByIds = (data) => {
  return service({
    url: '/phoneNum/deletePhoneNumByIds',
    method: 'delete',
    data
  })
}

// @Tags PhoneNum
// @Summary 更新PhoneNum
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PhoneNum true "更新PhoneNum"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /phoneNum/updatePhoneNum [put]
export const updatePhoneNum = (data) => {
  return service({
    url: '/phoneNum/updatePhoneNum',
    method: 'put',
    data
  })
}

// @Tags PhoneNum
// @Summary 用id查询PhoneNum
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.PhoneNum true "用id查询PhoneNum"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /phoneNum/findPhoneNum [get]
export const findPhoneNum = (params) => {
  return service({
    url: '/phoneNum/findPhoneNum',
    method: 'get',
    params
  })
}

// @Tags PhoneNum
// @Summary 分页获取PhoneNum列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取PhoneNum列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /phoneNum/getPhoneNumList [get]
export const getPhoneNumList = (params) => {
  return service({
    url: '/phoneNum/getPhoneNumList',
    method: 'get',
    params
  })
}
