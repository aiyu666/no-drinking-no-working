# no-drinking-no-working

This is a chrome extension let you have to drink water during working.

# Developer guidline

## Setup developer env

```
npm install
```

## Run unit test

```
npm run test
```


## Plugin

### VSCode
* [Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)


### Diagrams
![](https://i.imgur.com/1wsrLgi.png)

```sequence
Popup->Popup: Input config
Popup->Background: send set config event
Note right of Background: Store at local storage

Background -->Popup: Done
Popup->Popup: sync status

Background->Background: check time 
Note right of Background: Trigger drink event
Background->Background: Query all tabs
Background -> Content: Send event(tabs)
Content -> Content: Inject image
Content --> Background: Done
Background->Background: Update status

Note right of Content: Drank
Content -> Background: Send cancel event
Background->Background: Query all tabs
Background -> Content: Send event(tabs)
Content -> Content: Cancel Inject image
Content --> Background: Done
Background->Background: Update status

```

![](https://i.imgur.com/TaME6dY.png)

```flow
st=>start: 開始
e=>end: 結束
setConfig=>operation: 設定參數
storeConfig=>operation: 儲存參數(local storage)
checkTime=>condition: 檢查是否達觸發時間
injectImg=>operation: 網頁插入圖片
checkDrink=>condition: 檢查是否喝水
cancelInjectImg=>operation: 取消網頁插入圖片

st->setConfig->storeConfig->checkTime
checkTime(yes)->injectImg
checkTime(no)->checkTime
injectImg->checkDrink
checkDrink(yes)->cancelInjectImg
checkDrink(no)->checkDrink
cancelInjectImg->e
```

# Refercane

[Google mv3 getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
