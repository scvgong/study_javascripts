// fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url,option)
//     } 
//     catch(error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// }

// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener(`click`,async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=FES6JFL9fVl0YD5eZSKDXP0Oaf%2FYu2YSn28mF8MeOhiCxg9ke6Ayj86lKsUlJCKoAtjh9UfU6lHzUKgkQYwZPw%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
    let options = {}; //python dict 유사

    try {
        let response = await fetch(url,options); // send

        let result = await response.json(); // response, 응답
        console.log(`response result : ${result}`) //

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents");
        contents.innerHTML = result['header']['resultMsg'];
    } 
    catch(error) {
        console.log(`Error Message : ${error.message}`)
    }
});

//datalab_shoppinginsite from naver api
let shopping_insite = document.querySelector("#datalab_shoppinginsite");
shopping_insite.addEventListener(`click`,async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
    let data = {

    }
    let options = {
        method : "POST", 
        header : {
            "X-Naver-Client-Id" : "Rx92qXMBbk21d2jtpw_x", 
            "X-Naver-Client-Secret" : "m0gL_D3yGl", 
            "Content-Type" : "application/json"
            }, 
        body : JSON.stringify(data)


    }; //python dict 유사

    try {
        let response = await fetch(url,options); // send

        let result = await response.json(); // response, 응답
        console.log(`response result : ${result}`) //

        let contents = document.querySelector("#datalab_shoppinginsite_contents");
        contents.innerHTML = result['endDate'];
    } 
    catch(error) {
        console.log(`Error Message : ${error.message}`)
    }
});