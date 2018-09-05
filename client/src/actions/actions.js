import axios, {} from "axios";

export const types = Object.freeze({
    FILL_DATA_FROM_AJAX: "FILL_DATA_FROM_AJAX",
    FILL_DATA_FROM_AJAX_SUCCESS: "FILL_DATA_FROM_AJAX_SUCCESS",
    FILL_DATA_FROM_AJAX_FAILURE: "FILL_DATA_FROM_AJAX_FAILURE",
    POST_NEW_MEMBER: "POST_NEW_MEMBER"
});

export const fillDataFromAjax = (url) => {
    return (dispatch)=>{
        axios.get(url).then((res)=>{
            dispatch(fillDataFromAjaxSuccess(res.data))
        }).catch((error)=>{
            dispatch(fillDataFromAjaxFailure(error.message))
        })
    }
};

const fillDataFromAjaxSuccess = (data)=>{
    // console.log(data.data);
    return{
        type: types.FILL_DATA_FROM_AJAX_SUCCESS,
        data: [...data]
    }
};

const fillDataFromAjaxFailure = (error)=>{
    return{
        type:types.FILL_DATA_FROM_AJAX_FAILURE,
        data: {error}
    }
};



export const postNewMember=(url,data)=>{
    return (dispatch)=>{
        axios.post(url, {...data}).then((res)=>{
            dispatch(fillDataFromAjax(url))
        })
    }
};