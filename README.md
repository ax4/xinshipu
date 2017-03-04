# xinshipu

to start the electron JS crawler:
```bash
cd xinshipu
cd electron
npm install
npm start
```

then in the pop-out debugging console (where you can see "the query id is 0"), enter
```javascript
spider_start()
```
Then wait for the spider to stop, it will stop when "the query id is 100000". After it stop, type in the console: 
```javascript
saveToFile()
```



## About xinshipu query API 
The following are the same
```
http://www.xinshipu.com/zuofadaquan/100001/
http://www.xinshipu.com/chishenme/100001/
```