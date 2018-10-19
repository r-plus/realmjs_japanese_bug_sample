#!/usr/bin/env node

const Realm = require('realm');

const shop = {
  name: '店舗',
  primaryKey: '店舗コード',
  properties: {
    "店舗コード": { type: 'string', indexed: true , default: '' },
    "店舗名": { type: 'string', default: '' },
  }
};

Realm.open({ schema: [shop] })
  .then(realm => {
    try {
      realm.write(() => {
        realm.create('店舗', {
          "店舗コード": "001",
          "店舗名": "渋谷店"
        });
      });
    } catch (e) {
      console.log(e);
    }
    process.exit(0);
  });
