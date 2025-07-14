const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // collback
    // logic..
    // req : request로 프론트엔드로 부터 받은 데이터
    // res : response로 프론트에게 전달하는 응답값

    // res.statusCode = 200 // 상태 코드
    // res.setHeader("Content-type", "text/plain") // 응답 헤더
    // res.end("chutzrit!~!~!~!~!") // 클라이언트에게 응답 할 데이터

    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
                if(err) {
                    res.statusCode = 500
                    res.end('Error')
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data) //html 파일 반환
                }
            }) //현재 경로
        } else if (req.url === '/about') {
                fs.readFile(path.join(__dirname, 'about.html'), 'utf-8', (err, data) => {
                if(err) {
                    res.statusCode = 500
                    res.end('Error')
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data) //html 파일 반환
                }
            }) //현재 경로
        } else {
                fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8', (err, data) => {
                if(err) {
                    res.statusCode = 500
                    res.end('Error')
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data) //html 파일 반환
                }
            }) //현재 경로
        }
    }
})

server.listen(8080, () => {
    console.log("server on")
    
})

// 정적파일 서빙
// index.html, about.html, contact.html

