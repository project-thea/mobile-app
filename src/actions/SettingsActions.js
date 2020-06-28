export const SET_UUID = 'SET_UUID';


export function setUUID(uuid){
	return {
		type: SET_UUID,
		uuid
	}
}