

/* 액션 타입 선언 */
const GNB_NUM = 'gnb/GNB_NUM';

export const gnbNum = (idx) => ({ type: GNB_NUM, num:idx });


const initialState = {
	number: 0,
};

export default function gnb(state = initialState, action) {
	switch (action.type) {
		case GNB_NUM:
			return {
				...state,
				number: action.num,
			}
		default:
			return state;
	}
}

