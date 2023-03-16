import service from '@/utils/request'

// @Tags Meetcalendar
// @Summary 创建Meetcalendar
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Meetcalendar true "创建Meetcalendar"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /meetcalendar/createMeetcalendar [post]
export const createMeetcalendar = (data) => {
  return service({
    url: '/meetcalendar/createMeetcalendar',
    method: 'post',
    data
  })
}

// @Tags Meetcalendar
// @Summary 删除Meetcalendar
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Meetcalendar true "删除Meetcalendar"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /meetcalendar/deleteMeetcalendar [delete]
export const deleteMeetcalendar = (data) => {
  return service({
    url: '/meetcalendar/deleteMeetcalendar',
    method: 'delete',
    data
  })
}

// @Tags Meetcalendar
// @Summary 删除Meetcalendar
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Meetcalendar"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /meetcalendar/deleteMeetcalendar [delete]
export const deleteMeetcalendarByIds = (data) => {
  return service({
    url: '/meetcalendar/deleteMeetcalendarByIds',
    method: 'delete',
    data
  })
}

// @Tags Meetcalendar
// @Summary 更新Meetcalendar
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Meetcalendar true "更新Meetcalendar"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /meetcalendar/updateMeetcalendar [put]
export const updateMeetcalendar = (data) => {
  return service({
    url: '/meetcalendar/updateMeetcalendar',
    method: 'put',
    data
  })
}

// @Tags Meetcalendar
// @Summary 用id查询Meetcalendar
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Meetcalendar true "用id查询Meetcalendar"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /meetcalendar/findMeetcalendar [get]
export const findMeetcalendar = (params) => {
  return service({
    url: '/meetcalendar/findMeetcalendar',
    method: 'get',
    params
  })
}

// @Tags Meetcalendar
// @Summary 分页获取Meetcalendar列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Meetcalendar列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /meetcalendar/getMeetcalendarList [get]
export const getMeetcalendarList = (params) => {
  return service({
    url: '/meetcalendar/getMeetcalendarList',
    method: 'get',
    params
  })
}
