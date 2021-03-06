import { api } from "api/api"
import { payMethodConstants } from "redux/constants/index"

export const payMethodsActions = {
	getAllPayMethods,
}

function getAllPayMethods() {
	return (dispatch) => {
		dispatch(request())

		api.get("/payMethods").then(
			(res) => {
				dispatch(success(res.data))
			},
			(err) => dispatch(failure(err)),
		)
	}

	function request() {
		return { type: payMethodConstants.GET_ALL_REQUEST }
	}
	function success(payMethods) {
		return {
			type: payMethodConstants.GET_ALL_SUCCESS,
			payload: { ...payMethods },
		}
	}
	function failure(error) {
		return {
			type: payMethodConstants.GET_ALL_FAILURE,
			payload: { error },
		}
	}
}
