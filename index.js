const http = require("http")

const server = http.createServer((req, res) => {
    // collback
    // logic..
    // req : request로 프론트엔드로 부터 받은 데이터
    // res : response로 프론트에게 전달하는 응답값

    res.statusCode = 200 // 상태 코드
    res.setHeader("Content-type", "text/plain") // 응답 헤더
    res.end("chutzrit!~!~!~!~!") // 클라이언트에게 응답 할 데이터
})

server.listen(8080, () => {
    console.log("server on")
})