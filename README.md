# thai-cut-slim
word tokenization for thai language

## Installation

Use the package manager [nodejs](https://nodejs.org/en/) to install thai-cut-slim.

```bash
npm i -s thai-cut-slim
```

## Usage

```nodejs
const thaiCut = require('thai-cut-slim')

thaiCut.cut('ทดสอบระบบตัดคำ') # returns ['ทดสอบ','ระบบ','ตัด','คำ']
```

## Usage addon

```nodejs
const thaiCut = require('thai-cut-slim')

thaiCut.addon(['โห', 'อิอิ'])

thaiCut.cut('ทดสอบเพิ่มคำที่ไม่มีในดิกชันนารี่ เช่น โห อิอิ') # returns [ 'ทดสอบ', 'เพิ่ม', 'คำ', 'ที่', 'ไม่มี', 'ใน', 'ดิกชันนารี', 'เช่น', 'โห', 'อิอิ' ]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)