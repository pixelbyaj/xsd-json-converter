
# xsd-json-converter (xjc)
Convert any given XSD To JSON schema

![npm](https://img.shields.io/npm/v/xsd-json-converter)
![NPM](https://img.shields.io/npm/l/xsd-json-converter)
[![npm](https://img.shields.io/npm/dm/xsd-json-converter)](https://npmjs.org/package/xsd-json-converter)


## Features

- 🔥 Convert any given XSD to Json schema
- ⚡️ Supports ISO 20022 XSD

## How to Install

1. Install npm package xsd-json-converter.

Global (For CLI)
```console
    npm install -g xsd-json-converter
```

Local (For SCRIPT/CLI)
```console
    npm install xsd-json-converter
```

## How to Use

### CLI
```console
xjc <source-path> <output-path>
```

#### Example
##### Linux

```console
xjc /mnt/c/source/xsd/camt.053.001.10.xsd /mnt/c/source/xsd/camt.053.json 
```

##### Windows
```console
xjc C:/source/xsd/camt.053.001.10.xsd C:/source/xsd/camt.053.json 
```
### Script
JavaScript
```js
const xsd = require('xsd-json-converter').default;

xsd.convert('./camt.053.001.10.xsd')
.then(output => console.log(output))
  .catch(error => console.error(error));
```

TypeScript
```ts
import xsd from "xsd-json-converter";


xsd.convert('./camt.053.001.10.xsd')
.then(output => console.log(output))
  .catch(error => console.error(error));
```
**NOTE**: For script please install the package locally

## Supported OS

- win-64x
- osx-64x
- linux-64x

## Generated Schema
```ts
export interface XsdSchema
{
  namespace:string;
  SchemaElement:SchemaElement
}

export interface SchemaElement {
    id: string;
    name: string;
    dataType: string | null;
    minOccurs: string | null;
    maxOccurs: string | null;
    minLength: string | null;
    maxLength: string| null;
    pattern: string | null;
    fractionDigits: string | null;
    totalDigits: string | null;
    minInclusive: string | null;
    maxInclusive: string | null;
    values: string[] | null;
    isCurrency: boolean | null;
    xpath: string | null;
    elements: Schema[];
}
```
### Example
```json
{
    "namespace": "urn:iso:std:iso:20022:tech:xsd:camt.053.001.10",
    "schemaElement": {
        "id": "Document",
        "name": "Document",
        "dataType": null,
        "minOccurs": "1",
        "maxOccurs": null,
        "minLength": null,
        "maxLength": null,
        "pattern": null,
        "fractionDigits": null,
        "totalDigits": null,
        "minInclusive": null,
        "maxInclusive": null,
        "values": null,
        "isCurrency": false,
        "xpath": "Document",
        "elements":[
          ...
        ]
    }
}
```