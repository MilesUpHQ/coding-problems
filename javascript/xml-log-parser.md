You receive a string that contains an XML log file like the following:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<log>
    <entry id="1">
        <message>Application started</message>
    </entry>
    <entry id="2">
        <message>Application ended</message>
    </entry>
    <entry id="3">
        <message>Application ended</message>
    </entry>
</log>
```

Implement a function getIdsByMessage that returns the ids of the entries that contain a specific message.

For example, getIdsByMessage for the XML log above and for the message "Application ended" should return [2, 3].

```js
function getIdsByMessage(xml, message) {
  //  Write your code here
}

var xmlData = 
`<?xml version="1.0" encoding="UTF-8"?>
<log>
  <entry id="1">
    <message>Application started</message>
  </entry>
  <entry id="2">
    <message>Application ended</message>
  </entry>
  <entry id="3">
    <message>Application ended</message>
  </entry>
</log>`;

var ids = getIdsByMessage(xmlData, "Application ended");
console.log(ids == undefined ? ids : ids.join());
```
