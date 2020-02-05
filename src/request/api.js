import http from "./http";

//首页课程列表
export const getList = (limit,page,keyword) => http.get('/mic/course/index',{limit,page,keyword});

//根据ID获取课程详情
export const detail = (courseId) => http.get('/mic/course/detail',{courseId});

//分类列表
export const typeList = (limit,page) => http.get('/mic/tcategoty/index',{limit,page});

//根据分类id 获取课程列表
export const courses = (categotyId,limit,page) => http.get('/mic/course/courses',{categotyId,limit,page});

//搜索
export const search = (str) => http.get('/mic/selectAll',{str});
