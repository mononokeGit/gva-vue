import service from '@/utils/request'

// @Tags BasicRoomS
// @Summary 创建BasicRoomS
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.BasicRoomS true "创建BasicRoomS"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /basicroom/createBasicRoomS [post]
export const createBasicRoomS = (data) => {
  return service({
    url: '/basicroom/createBasicRoomS',
    method: 'post',
    data
  })
}

// @Tags BasicRoomS
// @Summary 删除BasicRoomS
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.BasicRoomS true "删除BasicRoomS"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /basicroom/deleteBasicRoomS [delete]
export const deleteBasicRoomS = (data) => {
  return service({
    url: '/basicroom/deleteBasicRoomS',
    method: 'delete',
    data
  })
}

// @Tags BasicRoomS
// @Summary 删除BasicRoomS
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除BasicRoomS"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /basicroom/deleteBasicRoomS [delete]
export const deleteBasicRoomSByIds = (data) => {
  return service({
    url: '/basicroom/deleteBasicRoomSByIds',
    method: 'delete',
    data
  })
}

// @Tags BasicRoomS
// @Summary 更新BasicRoomS
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.BasicRoomS true "更新BasicRoomS"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /basicroom/updateBasicRoomS [put]
export const updateBasicRoomS = (data) => {
  return service({
    url: '/basicroom/updateBasicRoomS',
    method: 'put',
    data
  })
}

// @Tags BasicRoomS
// @Summary 用id查询BasicRoomS
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.BasicRoomS true "用id查询BasicRoomS"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /basicroom/findBasicRoomS [get]
export const findBasicRoomS = (params) => {
  return service({
    url: '/basicroom/findBasicRoomS',
    method: 'get',
    params
  })
}

// @Tags BasicRoomS
// @Summary 分页获取BasicRoomS列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取BasicRoomS列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /basicroom/getBasicRoomSList [get]
export const getBasicRoomSList = (params) => {
  return service({
    url: '/basicroom/getBasicRoomSList',
    method: 'get',
    params
  })
}
