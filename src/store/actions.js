// import api from '../api'
import {
	USER_LOGIN,
	USER_UPDATEINFO,
	USER_LOGOUT
} from './types'

/* 公共操作 */

/**
 * 用户登录
 * @param  {[type]} options.commit [description]
 * @param  {[type]} data           [description]
 * @return {[type]}                [description]
 */
export const UserLogin = ({
	commit
}, data) => {
	commit(USER_LOGIN, data);
};

export const UpdateUserInfo = ({
	commit
}, data) => {
	commit(USER_UPDATEINFO, data)
};