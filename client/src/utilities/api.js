
import fetch from "isomorphic-fetch";

import {
	API_SEND_EMAIL,
} from "common/constants/urls";

// const GET_REQUEST_PARAMS = {
//   method: "GET",
//   headers: {
//     Accept: "application/json"
//   }
// };

const POST_REQUEST_PARAMS = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
};

const sendEmail = async (FromAddress, FromName, Body) => {
	const params = {
		...POST_REQUEST_PARAMS,
		body: JSON.stringify({ FromAddress, FromName, Body })
	};
	let res = await fetch(API_SEND_EMAIL, params);
	res = await res.json();
	return res;
};

export {
  sendEmail,
};